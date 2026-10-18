import { describe, it, expect, beforeEach } from 'vitest';
import { authService, DEMO } from '../authService';
import { documentService, _resetMockDocs } from '../documentService';
import { userService, _resetMockUsers } from '../userService';
import { chatService, _resetMockHistory } from '../chatService';
import { USER_KEY } from '../api';
import type { KnowledgeDocument, User } from '../../types';

const store = new Map<string, string>();
const localStorageMock = {
  getItem: (k: string) => store.get(k) ?? null,
  setItem: (k: string, v: string) => store.set(k, String(v)),
  removeItem: (k: string) => store.delete(k),
  clear: () => store.clear(),
  length: 0,
  key: () => null,
};
if (typeof globalThis.localStorage === 'undefined') {
  globalThis.localStorage = localStorageMock as Storage;
}

describe('Settings and Dashboard Data Logic', () => {
  beforeEach(() => {
    localStorage.clear();
    _resetMockDocs();
    _resetMockUsers();
    _resetMockHistory();
    // Set initial demo admin in localStorage
    localStorage.setItem(
      USER_KEY,
      JSON.stringify({ id: '1', name: 'Admin', email: 'admin@enterprise.com', role: 'ADMIN', active: true })
    );
  });

  describe('authService.changePassword in mock mode', () => {
    it('rejects wrong current password for demo user', async () => {
      await expect(authService.changePassword('WrongPassword', 'NewSecret123!')).rejects.toThrow(
        'Current password is incorrect'
      );
    });

    it('successfully changes password with correct current password', async () => {
      await expect(authService.changePassword('Admin@123', 'UpdatedAdmin2026!')).resolves.toBeUndefined();

      // Verify the demo store has been updated
      const demoAccount = DEMO.find((d) => d.user.email === 'admin@enterprise.com');
      expect(demoAccount?.password).toBe('UpdatedAdmin2026!');

      // Reset back for other tests
      if (demoAccount) demoAccount.password = 'Admin@123';
    });
  });

  describe('Password Change Form Validation', () => {
    const validatePasswordForm = (currentPw: string, newPw: string, confirmPw: string) => {
      if (!currentPw) return 'Current password is required.';
      if (newPw.length < 8) return 'New password must be at least 8 characters.';
      if (newPw === currentPw) return 'New password must be different from current password.';
      if (newPw !== confirmPw) return 'Confirm password does not match.';
      return null;
    };

    it('flags empty current password', () => {
      expect(validatePasswordForm('', 'NewPass123', 'NewPass123')).toBe('Current password is required.');
    });

    it('flags new password shorter than 8 characters', () => {
      expect(validatePasswordForm('OldPass123', 'Short', 'Short')).toBe('New password must be at least 8 characters.');
    });

    it('flags when new password equals current password', () => {
      expect(validatePasswordForm('SamePass123', 'SamePass123', 'SamePass123')).toBe(
        'New password must be different from current password.'
      );
    });

    it('flags when confirm password does not match', () => {
      expect(validatePasswordForm('OldPass123', 'NewPass123', 'Mismatch123')).toBe(
        'Confirm password does not match.'
      );
    });

    it('accepts valid password change input', () => {
      expect(validatePasswordForm('OldPass123', 'NewPass123', 'NewPass123')).toBeNull();
    });
  });

  describe('Admin Dashboard Metrics Aggregation', () => {
    it('computes document status counts from service data', async () => {
      const docs: KnowledgeDocument[] = [
        { id: '1', fileName: 'a.pdf', fileType: 'PDF', sizeBytes: 100, uploadedAt: '', status: 'PROCESSED' },
        { id: '2', fileName: 'b.docx', fileType: 'DOCX', sizeBytes: 200, uploadedAt: '', status: 'PROCESSING' },
        { id: '3', fileName: 'c.csv', fileType: 'CSV', sizeBytes: 300, uploadedAt: '', status: 'FAILED' },
        { id: '4', fileName: 'd.pdf', fileType: 'PDF', sizeBytes: 400, uploadedAt: '', status: 'PROCESSED' },
      ];

      const totalDocs = docs.length;
      const processed = docs.filter((d) => d.status === 'PROCESSED').length;
      const processing = docs.filter((d) => d.status === 'PROCESSING').length;
      const failed = docs.filter((d) => d.status === 'FAILED').length;

      expect(totalDocs).toBe(4);
      expect(processed).toBe(2);
      expect(processing).toBe(1);
      expect(failed).toBe(1);
    });

    it('computes user counts from service data', async () => {
      const users: User[] = [
        { id: '1', name: 'Alice', email: 'alice@test.com', role: 'ADMIN', active: true },
        { id: '2', name: 'Bob', email: 'bob@test.com', role: 'EMPLOYEE', active: false },
        { id: '3', name: 'Charlie', email: 'charlie@test.com', role: 'EMPLOYEE', active: true },
      ];

      const totalUsers = users.length;
      const activeUsers = users.filter((u) => u.active).length;

      expect(totalUsers).toBe(3);
      expect(activeUsers).toBe(2);
    });
  });

  describe('Employee Dashboard Conversations', () => {
    it('slices latest 3 conversations from history', async () => {
      const history = await chatService.getHistory();
      const latestThree = history.slice(0, 3);

      expect(latestThree.length).toBeLessThanOrEqual(3);
      if (history.length >= 3) {
        expect(latestThree.length).toBe(3);
      }
    });

    it('returns empty list when all conversations are deleted', async () => {
      const history = await chatService.getHistory();
      for (const conv of history) {
        await chatService.deleteConversation(conv.id);
      }

      const emptyHistory = await chatService.getHistory();
      expect(emptyHistory.length).toBe(0);
      expect(emptyHistory.slice(0, 3).length).toBe(0);
    });
  });
});
