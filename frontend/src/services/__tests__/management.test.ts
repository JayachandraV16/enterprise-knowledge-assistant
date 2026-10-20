import { describe, it, expect, beforeEach } from 'vitest';
import { documentService, _resetMockDocs } from '../documentService';
import { userService, _resetMockUsers } from '../userService';
import { validateDocument, ALLOWED_TYPES, MAX_FILE_MB } from '../../utils/validators';
import type { User } from '../../types';

describe('Document and User Management', () => {
  beforeEach(() => {
    _resetMockDocs();
    _resetMockUsers();
  });

  describe('Document Service & Validation', () => {
    it('allowed document types are PDF, DOCX, CSV only (no XLSX)', () => {
      expect(ALLOWED_TYPES).toEqual(['PDF', 'DOCX', 'CSV']);
      expect(ALLOWED_TYPES.includes('XLSX' as any)).toBe(false);
    });

    it('validateDocument accepts PDF, DOCX, and CSV files under size limit', () => {
      const pdfFile = new File(['%PDF-1.4 test content'], 'manual.pdf', { type: 'application/pdf' });
      const docxFile = new File(['docx content'], 'handbook.docx', {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      const csvFile = new File(['col1,col2\nval1,val2'], 'data.csv', { type: 'text/csv' });

      expect(validateDocument(pdfFile)).toBeNull();
      expect(validateDocument(docxFile)).toBeNull();
      expect(validateDocument(csvFile)).toBeNull();
    });

    it('validateDocument rejects XLSX and other unsupported extensions', () => {
      const xlsxFile = new File(['spreadsheet content'], 'budget.xlsx', {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      const txtFile = new File(['text content'], 'notes.txt', { type: 'text/plain' });

      expect(validateDocument(xlsxFile)).toContain('Unsupported file type');
      expect(validateDocument(txtFile)).toContain('Unsupported file type');
    });

    it('validateDocument rejects empty files and files exceeding size limit', () => {
      const emptyFile = new File([], 'empty.pdf', { type: 'application/pdf' });
      expect(validateDocument(emptyFile)).toBe('File is empty');

      // Mock oversized file
      const largeFile = new File(['a'], 'huge.pdf', { type: 'application/pdf' });
      Object.defineProperty(largeFile, 'size', { value: (MAX_FILE_MB + 1) * 1024 * 1024 });
      expect(validateDocument(largeFile)).toBe(`File exceeds ${MAX_FILE_MB} MB`);
    });

    it('documentService.list returns documents', async () => {
      const docs = await documentService.list();
      expect(docs.length).toBeGreaterThanOrEqual(2);
      expect(docs[0].fileType).toBe('PDF');
    });

    it('documentService.upload uploads file and tracks progress', async () => {
      const progressUpdates: number[] = [];
      const testFile = new File(['sample content'], 'Policy_2026.pdf', { type: 'application/pdf' });

      const doc = await documentService.upload(testFile, (p) => {
        progressUpdates.push(p);
      });

      expect(doc.fileName).toBe('Policy_2026.pdf');
      expect(doc.status).toBe('PROCESSING');
      expect(progressUpdates).toContain(100);

      const docs = await documentService.list();
      expect(docs.some((d) => d.id === doc.id)).toBe(true);
    });

    it('documentService.remove deletes document', async () => {
      const docsBefore = await documentService.list();
      const idToRemove = docsBefore[0].id;

      await documentService.remove(idToRemove);

      const docsAfter = await documentService.list();
      expect(docsAfter.find((d) => d.id === idToRemove)).toBeUndefined();
      expect(docsAfter.length).toBe(docsBefore.length - 1);
    });
  });

  describe('User Service & Self-Protection Logic', () => {
    it('userService.list returns registered users', async () => {
      const users = await userService.list();
      expect(users.length).toBeGreaterThanOrEqual(2);
      expect(users.some((u) => u.role === 'ADMIN')).toBe(true);
      expect(users.some((u) => u.role === 'EMPLOYEE')).toBe(true);
    });

    it('userService.create creates a new user', async () => {
      const newUser = await userService.create({
        name: 'Alex Rivera',
        email: 'alex@enterprise.com',
        password: 'Password@123',
        role: 'EMPLOYEE',
      });

      expect(newUser.name).toBe('Alex Rivera');
      expect(newUser.email).toBe('alex@enterprise.com');
      expect(newUser.role).toBe('EMPLOYEE');
      expect(newUser.active).toBe(true);

      const users = await userService.list();
      expect(users.some((u) => u.id === newUser.id)).toBe(true);
    });

    it('userService.update updates existing user properties', async () => {
      const users = await userService.list();
      const targetUser = users[1];

      const updated = await userService.update(targetUser.id, {
        name: 'Employee Updated',
        role: 'ADMIN',
      });

      expect(updated.name).toBe('Employee Updated');
      expect(updated.role).toBe('ADMIN');
    });

    it('userService.setActive updates active flag', async () => {
      const users = await userService.list();
      const target = users[1];

      await userService.setActive(target.id, false);
      const updatedList = await userService.list();
      const found = updatedList.find((u) => u.id === target.id);
      expect(found?.active).toBe(false);
    });

    it('userService.remove deletes a user', async () => {
      const usersBefore = await userService.list();
      const toDelete = usersBefore[usersBefore.length - 1];

      await userService.remove(toDelete.id);
      const usersAfter = await userService.list();
      expect(usersAfter.find((u) => u.id === toDelete.id)).toBeUndefined();
    });

    it('self-protection guard identifies logged-in user by ID or email', () => {
      const currentAdmin: User = {
        id: 'admin-1',
        name: 'Admin User',
        email: 'admin@enterprise.com',
        role: 'ADMIN',
        active: true,
      };

      const isSelf = (target: User) =>
        target.id === currentAdmin.id || target.email.toLowerCase() === currentAdmin.email.toLowerCase();

      const sameIdUser: User = {
        id: 'admin-1',
        name: 'Admin User',
        email: 'other@enterprise.com',
        role: 'ADMIN',
        active: true,
      };
      const sameEmailUser: User = {
        id: 'different-id',
        name: 'Admin User',
        email: 'ADMIN@enterprise.com',
        role: 'ADMIN',
        active: true,
      };
      const otherUser: User = {
        id: 'emp-2',
        name: 'Jane Doe',
        email: 'jane@enterprise.com',
        role: 'EMPLOYEE',
        active: true,
      };

      expect(isSelf(sameIdUser)).toBe(true);
      expect(isSelf(sameEmailUser)).toBe(true);
      expect(isSelf(otherUser)).toBe(false);
    });
  });
});
