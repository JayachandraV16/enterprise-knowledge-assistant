import { describe, it, expect, beforeEach } from 'vitest';
import { chatService, _resetMockHistory } from '../chatService';
import { MAX_QUESTION_LENGTH } from '../../utils/validators';
import { toConversationList } from '../adapters';
import { hasSources } from '../../components/ChatWrapper';

describe('Chat Service & Chat Logic', () => {
  beforeEach(() => {
    _resetMockHistory();
  });

  describe('chatService.ask in mock mode', () => {
    it('creates a new thread when conversationId is undefined', async () => {
      const question = 'What is the policy on password renewal?';
      const reply = await chatService.ask(question);

      expect(reply.conversationId).toBeDefined();
      expect(reply.message.role).toBe('assistant');
      expect(reply.message.content).toBeDefined();
      expect(reply.message.sources).toBeDefined();
      expect(reply.message.sources!.length).toBeGreaterThan(0);

      const history = await chatService.getHistory();
      const thread = history.find((c) => c.id === reply.conversationId);
      expect(thread).toBeDefined();
      expect(thread?.messages.length).toBe(2);
      expect(thread?.messages[0].content).toBe(question);
      expect(thread?.messages[0].role).toBe('user');
      expect(thread?.messages[1].role).toBe('assistant');
    });

    it('continues an existing thread when conversationId is provided', async () => {
      const historyBefore = await chatService.getHistory();
      const initialThread = historyBefore[0];
      const initialMsgCount = initialThread.messages.length;

      const followUp = 'Can I use an authenticator app?';
      const reply = await chatService.ask(followUp, initialThread.id);

      expect(reply.conversationId).toBe(initialThread.id);

      const historyAfter = await chatService.getHistory();
      const updatedThread = historyAfter.find((c) => c.id === initialThread.id);
      expect(updatedThread?.messages.length).toBe(initialMsgCount + 2);
      expect(updatedThread?.messages[updatedThread.messages.length - 2].content).toBe(followUp);
    });
  });

  describe('chatService.getHistory & deleteConversation in mock mode', () => {
    it('returns seeded conversations', async () => {
      const history = await chatService.getHistory();
      expect(history.length).toBeGreaterThanOrEqual(3);
      expect(history[0].id).toBe('c1');
      expect(history[0].tag).toBe('Security');
      expect(history[0].messages.length).toBeGreaterThan(0);
    });

    it('deletes a conversation by ID', async () => {
      const historyBefore = await chatService.getHistory();
      const idToDelete = historyBefore[0].id;

      await chatService.deleteConversation(idToDelete);

      const historyAfter = await chatService.getHistory();
      expect(historyAfter.find((c) => c.id === idToDelete)).toBeUndefined();
      expect(historyAfter.length).toBe(historyBefore.length - 1);
    });
  });

  describe('Input validation', () => {
    it('defines MAX_QUESTION_LENGTH as 1000', () => {
      expect(MAX_QUESTION_LENGTH).toBe(1000);
    });

    it('identifies questions that exceed MAX_QUESTION_LENGTH', () => {
      const validQuestion = 'a'.repeat(1000);
      const invalidQuestion = 'a'.repeat(1001);

      expect(validQuestion.length <= MAX_QUESTION_LENGTH).toBe(true);
      expect(invalidQuestion.length > MAX_QUESTION_LENGTH).toBe(true);
    });
  });

  describe('Flat Q&A records handling without conversation_id or sources', () => {
    it('normalizes flat records with no conversationId and no sources', () => {
      const flatRecords = [
        {
          id: 'qa-1',
          question: 'What are the core working hours?',
          response: 'Core working hours are 9 AM to 5 PM Monday through Friday.',
          timestamp: '2024-01-15T09:00:00Z',
        },
        {
          id: 'qa-2',
          question: 'How do I request software access?',
          response: 'Submit a ticket via the IT Service Portal.',
          timestamp: '2024-01-16T10:00:00Z',
        },
      ];

      const conversations = toConversationList(flatRecords);
      expect(conversations.length).toBe(2);

      const first = conversations[0];
      expect(first.title).toBe('What are the core working hours?');
      expect(first.messages.length).toBe(2);
      expect(first.messages[0].role).toBe('user');
      expect(first.messages[0].content).toBe('What are the core working hours?');
      expect(first.messages[1].role).toBe('assistant');
      expect(first.messages[1].content).toBe('Core working hours are 9 AM to 5 PM Monday through Friday.');
      expect(first.messages[1].sources).toBeUndefined();
    });
  });

  describe('Sources rendering condition (hasSources)', () => {
    it('returns false when sources is missing or undefined', () => {
      expect(hasSources({ role: 'assistant' })).toBe(false);
      expect(hasSources({ role: 'assistant', sources: undefined })).toBe(false);
    });

    it('returns false when sources is an empty array', () => {
      expect(hasSources({ role: 'assistant', sources: [] })).toBe(false);
    });

    it('returns false when message is undefined or null', () => {
      expect(hasSources(undefined)).toBe(false);
      expect(hasSources(null)).toBe(false);
    });

    it('returns false for user messages even if sources is present', () => {
      expect(hasSources({ role: 'user', sources: [{ documentName: 'doc.pdf', snippet: 'snippet' }] })).toBe(false);
    });

    it('returns true when assistant message has at least one source item', () => {
      expect(hasSources({ role: 'assistant', sources: [{ documentName: 'doc.pdf', snippet: 'snippet' }] })).toBe(true);
      expect(
        hasSources({
          role: 'assistant',
          sources: [
            { documentName: 'doc1.pdf', snippet: 'a' },
            { documentName: 'doc2.pdf', snippet: 'b' },
          ],
        })
      ).toBe(true);
    });
  });

  describe('Role-based separation (Admin vs Employee)', () => {
    it('returns separate chat history for admin and employee', async () => {
      const adminHistory = await chatService.getHistory('admin');
      const employeeHistory = await chatService.getHistory('employee');

      expect(adminHistory.length).toBeGreaterThanOrEqual(3);
      expect(employeeHistory.length).toBeGreaterThanOrEqual(3);

      expect(adminHistory[0].id).toBe('c1');
      expect(employeeHistory[0].id).toBe('emp-c1');

      // IDs should not overlap
      const adminIds = adminHistory.map((c) => c.id);
      const employeeIds = employeeHistory.map((c) => c.id);
      const overlap = adminIds.filter((id) => employeeIds.includes(id));
      expect(overlap.length).toBe(0);
    });

    it('adding a message as admin does not affect employee history', async () => {
      const empBefore = await chatService.getHistory('employee');
      const adminReply = await chatService.ask('Admin question about compliance', undefined, 'admin');

      const adminAfter = await chatService.getHistory('admin');
      const empAfter = await chatService.getHistory('employee');

      expect(adminAfter.some((c) => c.id === adminReply.conversationId)).toBe(true);
      expect(empAfter.some((c) => c.id === adminReply.conversationId)).toBe(false);
      expect(empAfter.length).toBe(empBefore.length);
    });

    it('adding a message as employee does not affect admin history', async () => {
      const adminBefore = await chatService.getHistory('admin');
      const empReply = await chatService.ask('Employee question about dental', undefined, 'employee');

      const adminAfter = await chatService.getHistory('admin');
      const empAfter = await chatService.getHistory('employee');

      expect(empAfter.some((c) => c.id === empReply.conversationId)).toBe(true);
      expect(adminAfter.some((c) => c.id === empReply.conversationId)).toBe(false);
      expect(adminAfter.length).toBe(adminBefore.length);
    });

    it('deleting an employee conversation does not delete from admin', async () => {
      const adminBefore = await chatService.getHistory('admin');
      const empBefore = await chatService.getHistory('employee');
      const empIdToDelete = empBefore[0].id;

      await chatService.deleteConversation(empIdToDelete, 'employee');

      const empAfter = await chatService.getHistory('employee');
      const adminAfter = await chatService.getHistory('admin');

      expect(empAfter.find((c) => c.id === empIdToDelete)).toBeUndefined();
      expect(adminAfter.length).toBe(adminBefore.length);
    });
  });
});
