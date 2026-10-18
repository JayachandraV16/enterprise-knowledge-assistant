import { api, delay, USE_MOCK, USER_KEY } from './api';
import { toAuthResponse, toUser } from './adapters';
import type { AuthResponse, User } from '../types';

export const DEMO: { password: string; user: User }[] = [
  { password: 'Admin@123', user: { id: '1', name: 'Admin', email: 'admin@enterprise.com', role: 'ADMIN', active: true } },
  { password: 'Emp@123', user: { id: '2', name: 'Employee', email: 'employee@enterprise.com', role: 'EMPLOYEE', active: true } },
];

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    if (USE_MOCK) {
      await delay();
      const m = DEMO.find((d) => d.user.email === email && d.password === password);
      if (!m) throw new Error('Invalid email or password');
      return { token: `mock-jwt-${m.user.id}`, user: m.user };
    }
    const { data } = await api.post<unknown>('/api/auth/login', { email, password });
    return toAuthResponse(data);
  },

  async me(): Promise<User> {
    if (USE_MOCK) {
      const raw = localStorage.getItem(USER_KEY);
      if (!raw) throw new Error('Not authenticated');
      return JSON.parse(raw) as User;
    }
    const { data } = await api.get<unknown>('/api/auth/me');
    return toUser(data);
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
    await api.put('/api/auth/change-password', { currentPassword, newPassword });
  },
};
