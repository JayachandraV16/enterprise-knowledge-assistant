import { api, delay, USE_MOCK } from './api';
import type { User, UserInput } from '../types';

let mockUsers: User[] = [
  { id: '1', name: 'Admin', email: 'admin@enterprise.com', role: 'ADMIN', active: true },
  { id: '2', name: 'Employee', email: 'employee@enterprise.com', role: 'EMPLOYEE', active: true },
];

// All admin only (SRS 2.3: Administrator manages users)
export const userService = {
  async list(): Promise<User[]> {
    if (USE_MOCK) { await delay(300); return [...mockUsers]; }
    return (await api.get<User[]>('/api/users')).data;
  },
  async create(input: UserInput): Promise<User> {
    if (USE_MOCK) {
      const u: User = { id: `u${Date.now()}`, name: input.name, email: input.email, role: input.role, active: true };
      mockUsers = [...mockUsers, u];
      return u;
    }
    return (await api.post<User>('/api/users', input)).data;
  },
  async update(id: string, input: Partial<UserInput>): Promise<User> {
    if (USE_MOCK) {
      const { password: _pw, ...safe } = input;
      mockUsers = mockUsers.map((u) => (u.id === id ? { ...u, ...safe } : u));
      return mockUsers.find((u) => u.id === id)!;
    }
    return (await api.put<User>(`/api/users/${id}`, input)).data;
  },
  async setActive(id: string, active: boolean): Promise<void> {
    if (USE_MOCK) { mockUsers = mockUsers.map((u) => (u.id === id ? { ...u, active } : u)); return; }
    await api.patch(`/api/users/${id}/status`, { active });
  },
  async remove(id: string): Promise<void> {
    if (USE_MOCK) { mockUsers = mockUsers.filter((u) => u.id !== id); return; }
    await api.delete(`/api/users/${id}`);
  },
};
