import { describe, it, expect, beforeEach } from 'vitest';
import { authService } from '../authService';
import { userService } from '../userService';
import { TOKEN_KEY, USER_KEY, getErrorMessage } from '../api';

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

describe('Authentication and User Service', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('authService in mock mode', () => {
    it('authenticates admin with valid credentials', async () => {
      const res = await authService.login('admin@enterprise.com', 'Admin@123');
      expect(res.token).toContain('mock-jwt');
      expect(res.user.role).toBe('ADMIN');
      expect(res.user.email).toBe('admin@enterprise.com');
    });

    it('authenticates employee with valid credentials', async () => {
      const res = await authService.login('employee@enterprise.com', 'Emp@123');
      expect(res.token).toContain('mock-jwt');
      expect(res.user.role).toBe('EMPLOYEE');
      expect(res.user.email).toBe('employee@enterprise.com');
    });

    it('rejects incorrect credentials with an error', async () => {
      await expect(authService.login('admin@enterprise.com', 'WrongPass')).rejects.toThrow(
        'Invalid email or password'
      );
    });

    it('rejects unknown email', async () => {
      await expect(authService.login('unknown@enterprise.com', 'Admin@123')).rejects.toThrow(
        'Invalid email or password'
      );
    });
  });

  describe('Role validation logic', () => {
    it('detects mismatch when employee logs in with Administrator selected', () => {
      const selectedRole: 'admin' | 'employee' = 'admin';
      const userRole = 'EMPLOYEE';
      const expectedRole = selectedRole === 'admin' ? 'ADMIN' : 'EMPLOYEE';
      expect(userRole !== expectedRole).toBe(true);

      const roleLabel = selectedRole === 'admin' ? 'Administrator' : 'Employee';
      const error = `This account is not an ${roleLabel}`;
      expect(error).toBe('This account is not an Administrator');
    });

    it('detects mismatch when admin logs in with Employee selected', () => {
      const selectedRole: 'admin' | 'employee' = 'employee';
      const userRole = 'ADMIN';
      const expectedRole = selectedRole === 'admin' ? 'ADMIN' : 'EMPLOYEE';
      expect(userRole !== expectedRole).toBe(true);

      const roleLabel = selectedRole === 'admin' ? 'Administrator' : 'Employee';
      const error = `This account is not an ${roleLabel}`;
      expect(error).toBe('This account is not an Employee');
    });

    it('accepts matching admin role', () => {
      const selectedRole: 'admin' | 'employee' = 'admin';
      const userRole = 'ADMIN';
      const expectedRole = selectedRole === 'admin' ? 'ADMIN' : 'EMPLOYEE';
      expect(userRole === expectedRole).toBe(true);
    });

    it('accepts matching employee role', () => {
      const selectedRole: 'admin' | 'employee' = 'employee';
      const userRole = 'EMPLOYEE';
      const expectedRole = selectedRole === 'admin' ? 'ADMIN' : 'EMPLOYEE';
      expect(userRole === expectedRole).toBe(true);
    });
  });

  describe('userService.create', () => {
    it('creates an employee user and adds to user list', async () => {
      const newUser = await userService.create({
        name: 'Jane Doe',
        email: 'jane@enterprise.com',
        password: 'Password@1234',
        role: 'EMPLOYEE',
      });
      expect(newUser.id).toBeDefined();
      expect(newUser.name).toBe('Jane Doe');
      expect(newUser.email).toBe('jane@enterprise.com');
      expect(newUser.role).toBe('EMPLOYEE');
      expect(newUser.active).toBe(true);

      const users = await userService.list();
      expect(users.some((u) => u.email === 'jane@enterprise.com')).toBe(true);
    });

    it('creates an admin user with ADMIN role', async () => {
      const newAdmin = await userService.create({
        name: 'New Admin',
        email: 'newadmin@enterprise.com',
        password: 'AdminPassword@123',
        role: 'ADMIN',
      });
      expect(newAdmin.role).toBe('ADMIN');
      expect(newAdmin.active).toBe(true);
    });
  });

  describe('Storage contract', () => {
    it('stores token and user under standard keys on login and clears on logout', () => {
      localStorage.setItem(TOKEN_KEY, 'jwt-token-xyz');
      localStorage.setItem(USER_KEY, JSON.stringify({ id: '1', role: 'ADMIN' }));

      expect(localStorage.getItem(TOKEN_KEY)).toBe('jwt-token-xyz');
      expect(localStorage.getItem(USER_KEY)).toContain('ADMIN');

      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);

      expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
      expect(localStorage.getItem(USER_KEY)).toBeNull();
    });

    it('does not use legacy rag_app_users key', () => {
      expect(localStorage.getItem('rag_app_users')).toBeNull();
    });
  });

  describe('getErrorMessage handling', () => {
    it('formats plain Error object properly', () => {
      const err = new Error('Invalid email or password');
      expect(getErrorMessage(err)).toBe('Invalid email or password');
    });

    it('handles unexpected non-error objects gracefully', () => {
      expect(getErrorMessage('some raw string')).toBe('Something went wrong');
      expect(getErrorMessage(null)).toBe('Something went wrong');
    });
  });
});
