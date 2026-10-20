import { describe, expect, it } from 'vitest';
import {
  toAuthResponse,
  toChatReply,
  toConversationList,
  toDocument,
  toSource,
  toUser,
  unwrapList,
} from '../adapters';
import { getErrorMessage } from '../api';
import { AxiosError } from 'axios';

describe('adapters', () => {
  describe('toUser', () => {
    it('normalizes numeric ID and standard fields', () => {
      const user = toUser({ id: 123, name: 'Alice', email: 'alice@test.com', role: 'ADMIN', active: true });
      expect(user).toEqual({
        id: '123',
        name: 'Alice',
        email: 'alice@test.com',
        role: 'ADMIN',
        active: true,
      });
    });

    it('handles role variants: ADMIN, ROLE_ADMIN, admin, Administrator', () => {
      expect(toUser({ id: '1', role: 'ADMIN' }).role).toBe('ADMIN');
      expect(toUser({ id: '1', role: 'ROLE_ADMIN' }).role).toBe('ADMIN');
      expect(toUser({ id: '1', role: 'admin' }).role).toBe('ADMIN');
      expect(toUser({ id: '1', role: 'Administrator' }).role).toBe('ADMIN');
      expect(toUser({ id: '1', roles: ['ROLE_ADMIN'] }).role).toBe('ADMIN');
    });

    it('handles role variants for EMPLOYEE', () => {
      expect(toUser({ id: '1', role: 'EMPLOYEE' }).role).toBe('EMPLOYEE');
      expect(toUser({ id: '1', role: 'ROLE_EMPLOYEE' }).role).toBe('EMPLOYEE');
      expect(toUser({ id: '1', role: 'employee' }).role).toBe('EMPLOYEE');
      expect(toUser({ id: '1', role: 'Employee' }).role).toBe('EMPLOYEE');
      expect(toUser({ id: '1', role: 'unknown' }).role).toBe('EMPLOYEE');
    });

    it('normalizes active status from active, enabled, or status === "ACTIVE"', () => {
      expect(toUser({ id: '1', active: false }).active).toBe(false);
      expect(toUser({ id: '1', enabled: true }).active).toBe(true);
      expect(toUser({ id: '1', enabled: false }).active).toBe(false);
      expect(toUser({ id: '1', status: 'ACTIVE' }).active).toBe(true);
      expect(toUser({ id: '1', status: 'INACTIVE' }).active).toBe(false);
      expect(toUser({ id: '1' }).active).toBe(true); // default true
    });
  });

  describe('toAuthResponse', () => {
    it('handles nested user and token', () => {
      const res = toAuthResponse({
        token: 'jwt-123',
        user: { id: 1, name: 'Admin', email: 'a@b.com', role: 'ROLE_ADMIN' },
      });
      expect(res.token).toBe('jwt-123');
      expect(res.user.role).toBe('ADMIN');
    });

    it('handles accessToken and jwt keys', () => {
      expect(toAuthResponse({ accessToken: 'tok-a', user: { id: '1' } }).token).toBe('tok-a');
      expect(toAuthResponse({ jwt: 'tok-b', user: { id: '2' } }).token).toBe('tok-b');
    });

    it('handles flat user fields on the root', () => {
      const res = toAuthResponse({
        accessToken: 'tok-flat',
        id: 42,
        name: 'Flat User',
        email: 'flat@test.com',
        role: 'admin',
        enabled: true,
      });
      expect(res.token).toBe('tok-flat');
      expect(res.user.id).toBe('42');
      expect(res.user.name).toBe('Flat User');
      expect(res.user.role).toBe('ADMIN');
      expect(res.user.active).toBe(true);
    });
  });

  describe('toDocument', () => {
    it('normalizes fileName from fileName, filename, or name', () => {
      expect(toDocument({ id: '1', fileName: 'f1.pdf' }).fileName).toBe('f1.pdf');
      expect(toDocument({ id: '1', filename: 'f2.docx' }).fileName).toBe('f2.docx');
      expect(toDocument({ id: '1', name: 'f3.csv' }).fileName).toBe('f3.csv');
    });

    it('derives fileType from extension if missing', () => {
      expect(toDocument({ id: '1', name: 'report.pdf' }).fileType).toBe('PDF');
      expect(toDocument({ id: '2', name: 'notes.docx' }).fileType).toBe('DOCX');
      expect(toDocument({ id: '3', name: 'data.csv' }).fileType).toBe('CSV');
    });

    it('normalizes sizeBytes from sizeBytes, size, or string numbers', () => {
      expect(toDocument({ id: '1', sizeBytes: 2048 }).sizeBytes).toBe(2048);
      expect(toDocument({ id: '1', size: 4096 }).sizeBytes).toBe(4096);
      expect(toDocument({ id: '1', size: '8192' }).sizeBytes).toBe(8192);
    });

    it('normalizes uploadedAt to ISO string', () => {
      const iso = toDocument({ id: '1', uploadDate: '2026-05-10T12:00:00Z' }).uploadedAt;
      expect(iso).toBe('2026-05-10T12:00:00.000Z');
    });

    it('normalizes status variants', () => {
      // PROCESSED variants
      expect(toDocument({ id: '1', status: 'Processed' }).status).toBe('PROCESSED');
      expect(toDocument({ id: '1', status: 'COMPLETED' }).status).toBe('PROCESSED');
      expect(toDocument({ id: '1', status: 'READY' }).status).toBe('PROCESSED');
      expect(toDocument({ id: '1', status: 'INDEXED' }).status).toBe('PROCESSED');

      // PROCESSING variants
      expect(toDocument({ id: '1', status: 'Processing' }).status).toBe('PROCESSING');
      expect(toDocument({ id: '1', status: 'PENDING' }).status).toBe('PROCESSING');
      expect(toDocument({ id: '1', status: 'UPLOADED' }).status).toBe('PROCESSING');

      // FAILED variants
      expect(toDocument({ id: '1', status: 'Failed' }).status).toBe('FAILED');
      expect(toDocument({ id: '1', status: 'ERROR' }).status).toBe('FAILED');
    });
  });

  describe('toSource', () => {
    it('normalizes source references with documentName, page, and snippet', () => {
      const src1 = toSource({ documentName: 'HR.pdf', page: 5, snippet: 'Vacation days' });
      expect(src1).toEqual({ documentName: 'HR.pdf', page: 5, snippet: 'Vacation days' });

      const src2 = toSource({ document: 'IT.docx', pageNumber: 12, text: 'Network policy' });
      expect(src2).toEqual({ documentName: 'IT.docx', page: 12, snippet: 'Network policy' });

      const src3 = toSource({ fileName: 'Fin.csv', chunk: 'Expenses' });
      expect(src3).toEqual({ documentName: 'Fin.csv', page: undefined, snippet: 'Expenses' });
      const src4 = toSource({ filename: 'Policy.pdf', page: 2, snippet: 'Security rule', score: 0.95 });
      expect(src4).toEqual({ documentName: 'Policy.pdf', page: 2, snippet: 'Security rule' });
    });
  });

  describe('toChatReply', () => {
    it('accepts { conversationId, message: {...} } shape', () => {
      const reply = toChatReply({
        conversationId: 'c-100',
        message: {
          id: 'm-1',
          content: 'Here is your answer',
          sources: [{ documentName: 'Doc.pdf', page: 1, snippet: 'quote' }],
          timestamp: '2026-06-01T10:00:00Z',
        },
      });
      expect(reply.conversationId).toBe('c-100');
      expect(reply.message.role).toBe('assistant');
      expect(reply.message.content).toBe('Here is your answer');
      expect(reply.message.sources).toHaveLength(1);
    });

    it('accepts { answer, sources, conversationId? } shape with default sources', () => {
      const reply = toChatReply({
        conversationId: 'c-200',
        answer: 'Direct answer without nested message',
      });
      expect(reply.conversationId).toBe('c-200');
      expect(reply.message.content).toBe('Direct answer without nested message');
      expect(reply.message.sources).toEqual([]);
      expect(reply.message.role).toBe('assistant');
    });
  });

  describe('toConversationList and unwrapList', () => {
    it('unwraps Spring Boot pagination envelope { content: [...] } and { data: [...] }', () => {
      expect(unwrapList({ content: [{ id: '1' }] })).toHaveLength(1);
      expect(unwrapList({ data: [{ id: '2' }] })).toHaveLength(1);
      expect(unwrapList([{ id: '3' }])).toHaveLength(1);
      expect(unwrapList(null)).toEqual([]);
    });

    it('parses conversations with nested messages array', () => {
      const raw = [
        {
          id: 'conv-1',
          title: 'Security check',
          tag: 'Security',
          messages: [
            { id: 'm1', role: 'user', content: 'What is MFA?' },
            { id: 'm2', role: 'assistant', content: 'MFA is required.', sources: [{ document: 'Sec.pdf', text: 'MFA' }] },
          ],
        },
      ];
      const list = toConversationList(raw);
      expect(list).toHaveLength(1);
      expect(list[0].id).toBe('conv-1');
      expect(list[0].messages).toHaveLength(2);
      expect(list[0].messages[1].sources?.[0].documentName).toBe('Sec.pdf');
    });

    it('groups flat Q&A records by conversationId', () => {
      const flatRecords = [
        { id: '1', conversationId: 'c-grp', question: 'Q1', response: 'A1', timestamp: '2026-01-01T10:00:00Z' },
        { id: '2', conversationId: 'c-grp', question: 'Q2', response: 'A2', timestamp: '2026-01-01T10:05:00Z' },
      ];
      const list = toConversationList(flatRecords);
      expect(list).toHaveLength(1);
      expect(list[0].id).toBe('c-grp');
      expect(list[0].title).toBe('Q1');
      expect(list[0].messages).toHaveLength(4); // 2 questions + 2 answers
    });

    it('handles flat Q&A records without conversationId (one conversation per record)', () => {
      const flatRecords = [
        { id: 'qa-1', question: 'What is the leave policy?', response: '25 days per year', timestamp: '2026-01-01T10:00:00Z' },
        { id: 'qa-2', question: 'Where is the cafeteria?', response: '2nd floor', timestamp: '2026-01-02T10:00:00Z' },
      ];
      const list = toConversationList(flatRecords);
      expect(list).toHaveLength(2);
      expect(list[0].title).toBe('What is the leave policy?');
      expect(list[0].messages).toHaveLength(2); // user + assistant
    });
  });
});

describe('getErrorMessage', () => {
  function makeAxiosError(status?: number, data?: unknown): AxiosError {
    return {
      name: 'AxiosError',
      message: 'Request failed',
      isAxiosError: true,
      config: { headers: {} as never },
      response: status !== undefined ? { status, data, headers: {}, config: {} as never, statusText: '' } : undefined,
    } as unknown as AxiosError;
  }

  it('uses backend message when present', () => {
    const err = makeAxiosError(400, { message: 'Custom backend validation error' });
    expect(getErrorMessage(err)).toBe('Custom backend validation error');
  });

  it('returns friendly text for 403 when no backend message is provided', () => {
    const err = makeAxiosError(403, {});
    expect(getErrorMessage(err)).toBe("You don't have permission to do this");
  });

  it('returns friendly text for 404 when no backend message is provided', () => {
    const err = makeAxiosError(404, {});
    expect(getErrorMessage(err)).toBe('The requested resource was not found');
  });

  it('returns friendly text for 413 when no backend message is provided', () => {
    const err = makeAxiosError(413, {});
    expect(getErrorMessage(err)).toBe('File is too large for the server');
  });

  it('returns friendly text for 5xx errors', () => {
    expect(getErrorMessage(makeAxiosError(500, {}))).toBe('Server error. Please try again');
    expect(getErrorMessage(makeAxiosError(502, {}))).toBe('Server error. Please try again');
  });

  it('handles network error (no response)', () => {
    const err = makeAxiosError(undefined);
    expect(getErrorMessage(err)).toBe('Cannot reach the server. Please try again.');
  });
});
