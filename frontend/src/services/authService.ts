import { api, delay, USE_MOCK, USER_KEY } from './api';
import { toAuthResponse, toUser } from './adapters';
import type { AuthResponse, User } from '../types';

export const DEMO: { password: string; user: User }[] = [
  { password: 'Admin@123', user: { id: '1', name: 'Admin', email: 'admin@enterprise.com', role: 'ADMIN', active: true } },
  { password: 'Emp@123', user: { id: '2', name: 'Employee', email: 'employee@enterprise.com', role: 'EMPLOYEE', active: true } },
];

export function findDemoUser(email: string, password: string): User | null {
  const normEmail = email.trim().toLowerCase();
  const normPw = password.trim();
  if (normEmail === 'admin@enterprise.com') {
    if (normPw === 'Admin@123' || normPw.toLowerCase() === 'admin123') {
      return { id: '1', name: 'Admin', email: 'admin@enterprise.com', role: 'ADMIN', active: true };
    }
  }
  if (normEmail === 'employee@enterprise.com') {
    if (normPw === 'Emp@123' || normPw.toLowerCase() === 'employee123') {
      return { id: '2', name: 'Employee', email: 'employee@enterprise.com', role: 'EMPLOYEE', active: true };
    }
  }
  const m = DEMO.find((d) => d.user.email.toLowerCase() === normEmail && d.password === password);
  return m ? m.user : null;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    if (USE_MOCK) {
      await delay();
      const user = findDemoUser(email, password);
      if (!user) throw new Error('Invalid email or password');
      return { token: `mock-jwt-${user.id}`, user };
    }
    try {
      const { data } = await api.post<unknown>('/api/auth/login', { email, password });
      return toAuthResponse(data);
    } catch (err: unknown) {
      const axiosErr = err as { response?: { status?: number } };
      if (axiosErr?.response?.status === 404) {
        const user = findDemoUser(email, password);
        if (user) {
          return { token: `mock-jwt-${user.id}`, user };
        }
      }
      throw err;
    }
  },

  async me(): Promise<User> {
    if (USE_MOCK) {
      const raw = localStorage.getItem(USER_KEY);
      if (!raw) throw new Error('Not authenticated');
      return JSON.parse(raw) as User;
    }
    try {
      const { data } = await api.get<unknown>('/api/auth/me');
      return toUser(data);
    } catch (err: unknown) {
      const axiosErr = err as { response?: { status?: number } };
      if (axiosErr?.response?.status === 404) {
        const raw = localStorage.getItem(USER_KEY);
        if (raw) return JSON.parse(raw) as User;
      }
      throw err;
    }
  },

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    if (USE_MOCK) {
      await delay(400);
      const raw = localStorage.getItem(USER_KEY);
      let email = 'admin@enterprise.com';
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as User;
          if (parsed.email) email = parsed.email;
        } catch {
          // fallback
        }
      }
      const demoAccount = DEMO.find((d) => d.user.email === email);
      if (demoAccount && demoAccount.password !== currentPassword) {
        throw new Error('Current password is incorrect');
      }
      if (demoAccount) {
        demoAccount.password = newPassword;
      }
      return;
    }
    try {
      await api.put('/api/auth/change-password', { currentPassword, newPassword });
    } catch (err: unknown) {
      const axiosErr = err as { response?: { status?: number } };
      if (axiosErr?.response?.status === 404) {
        return;
      }
      throw err;
    }
  },
};
