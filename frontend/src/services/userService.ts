import { api, delay, USE_MOCK } from './api';
import { toUser, unwrapList } from './adapters';
import type { User, UserInput } from '../types';

export const INITIAL_MOCK_USERS: User[] = [
  { id: '1', name: 'Admin', email: 'admin@enterprise.com', role: 'ADMIN', active: true },
  { id: '2', name: 'Employee', email: 'employee@enterprise.com', role: 'EMPLOYEE', active: true },
];

let mockUsers: User[] = [...INITIAL_MOCK_USERS];

export function _resetMockUsers(): void {
  mockUsers = JSON.parse(JSON.stringify(INITIAL_MOCK_USERS));
}

// All admin only (SRS 2.3: Administrator manages users)
export const userService = {
  async list(): Promise<User[]> {
    if (USE_MOCK) { await delay(300); return [...mockUsers]; }
    const { data } = await api.get<unknown>('/api/users');
    return unwrapList(data).map(toUser);
  },
  async create(input: UserInput): Promise<User> {
    if (USE_MOCK) {
      const u: User = { id: `u${Date.now()}`, name: input.name, email: input.email, role: input.role, active: true };
      mockUsers = [...mockUsers, u];
      return u;
    }
    const { data } = await api.post<unknown>('/api/users', input);
    return toUser(data);
  },
  async update(id: string, input: Partial<UserInput>): Promise<User> {
    if (USE_MOCK) {
      const { password: _pw, ...safe } = input;
      mockUsers = mockUsers.map((u) => (u.id === id ? { ...u, ...safe } : u));
      return mockUsers.find((u) => u.id === id)!;
    }
    const { data } = await api.put<unknown>(`/api/users/${id}`, input);
    return toUser(data);
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
