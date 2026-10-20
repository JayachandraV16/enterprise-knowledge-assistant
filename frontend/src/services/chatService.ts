import { api, delay, USE_MOCK } from './api';
import { toChatReply, toConversationList } from './adapters';
import type { ChatReply, Conversation } from '../types';

export const INITIAL_MOCK_HISTORY: Conversation[] = [
  {
    id: 'c1',
    title: 'Security Policy Compliance Check',
    tag: 'Security',
    updatedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    messages: [
      {
        id: 'm1-1',
        role: 'user',
        content: 'What are the MFA requirements for corporate systems?',
        timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
      },
      {
        id: 'm1-2',
        role: 'assistant',
        content: 'Multi-factor authentication (MFA) is required for all employees accessing internal systems. Authenticator apps must be used rather than SMS-based OTPs.',
        sources: [
          {
            documentName: 'Security_Policy.pdf',
            page: 12,
            snippet: 'All employees must enable MFA for internal systems using approved authenticator apps.',
          },
        ],
        timestamp: new Date(Date.now() - 3600000 * 24 + 1000).toISOString(),
      },
    ],
  },
  {
    id: 'c2',
    title: 'Annual Leave Policy',
    tag: 'HR',
    updatedAt: new Date(Date.now() - 3600000 * 48).toISOString(),
    messages: [
      {
        id: 'm2-1',
        role: 'user',
        content: 'How many days of annual leave am I entitled to?',
        timestamp: new Date(Date.now() - 3600000 * 48).toISOString(),
      },
      {
        id: 'm2-2',
        role: 'assistant',
        content: 'Full-time employees are entitled to 25 days of annual leave per calendar year, accruing at 2.08 days per month. Leave must be approved by your line manager at least 2 weeks in advance.',
        sources: [
          {
            documentName: 'HR_Handbook.docx',
            page: 31,
            snippet: 'Annual leave entitlement: 25 days per calendar year for full-time employees.',
          },
        ],
        timestamp: new Date(Date.now() - 3600000 * 48 + 1000).toISOString(),
      },
    ],
  },
  {
    id: 'c3',
    title: 'Expense Reimbursement Process',
    tag: 'Finance',
    updatedAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    messages: [
      {
        id: 'm3-1',
        role: 'user',
        content: 'What receipts do I need to keep for expense claims?',
        timestamp: new Date(Date.now() - 3600000 * 72).toISOString(),
      },
      {
        id: 'm3-2',
        role: 'assistant',
        content: 'Original receipts are required for all expense claims exceeding £25. Expenses must be submitted within 30 days of the transaction date.',
        sources: [
          {
            documentName: 'Finance_Policy_2024.pdf',
            page: 8,
            snippet: 'Original itemized receipts are required for all claims above £25.',
          },
        ],
        timestamp: new Date(Date.now() - 3600000 * 72 + 1000).toISOString(),
      },
    ],
  },
];

export const INITIAL_EMPLOYEE_HISTORY: Conversation[] = [
  {
    id: 'emp-c1',
    title: 'Annual Leave & PTO Inquiry',
    tag: 'HR',
    updatedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    messages: [
      {
        id: 'emp-m1-1',
        role: 'user',
        content: 'How many days of annual leave am I entitled to this year?',
        timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
      },
      {
        id: 'emp-m1-2',
        role: 'assistant',
        content: 'Full-time employees are entitled to 25 days of annual leave per calendar year, accruing at 2.08 days per month. Leave must be approved by your line manager at least 2 weeks in advance.',
        sources: [
          {
            documentName: 'HR_Handbook.docx',
            page: 14,
            snippet: 'Annual leave entitlement: 25 days per calendar year for full-time employees.',
          },
        ],
        timestamp: new Date(Date.now() - 3600000 * 12 + 1000).toISOString(),
      },
    ],
  },
  {
    id: 'emp-c2',
    title: 'Health Insurance and Benefits',
    tag: 'HR',
    updatedAt: new Date(Date.now() - 3600000 * 36).toISOString(),
    messages: [
      {
        id: 'emp-m2-1',
        role: 'user',
        content: 'What dental coverage is included in the company health plan?',
        timestamp: new Date(Date.now() - 3600000 * 36).toISOString(),
      },
      {
        id: 'emp-m2-2',
        role: 'assistant',
        content: 'The comprehensive health plan covers routine dental check-ups twice a year at 100%, and major dental procedures up to £1,000 annually after a £50 deductible.',
        sources: [
          {
            documentName: 'HR_Handbook.docx',
            page: 28,
            snippet: 'Dental benefit coverage: Routine checkups 100%, major procedures up to £1,000.',
          },
        ],
        timestamp: new Date(Date.now() - 3600000 * 36 + 1000).toISOString(),
      },
    ],
  },
  {
    id: 'emp-c3',
    title: 'Travel Expense Claim Guidelines',
    tag: 'Finance',
    updatedAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    messages: [
      {
        id: 'emp-m3-1',
        role: 'user',
        content: 'Can I expense meals during local client meetings?',
        timestamp: new Date(Date.now() - 3600000 * 72).toISOString(),
      },
      {
        id: 'emp-m3-2',
        role: 'assistant',
        content: 'Client meeting meals are reimbursable up to £35 per person with prior manager pre-approval and detailed receipts showing items purchased.',
        sources: [
          {
            documentName: 'HR_Handbook.docx',
            page: 35,
            snippet: 'Client entertainment and meals: Reimbursable up to £35/head with itemized receipts.',
          },
        ],
        timestamp: new Date(Date.now() - 3600000 * 72 + 1000).toISOString(),
      },
    ],
  },
];

function getCurrentRole(): 'admin' | 'employee' {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem('user');
      if (raw) {
        const u = JSON.parse(raw);
        if (u?.role === 'EMPLOYEE' || u?.role === 'employee') {
          return 'employee';
        }
      }
    }
  } catch {
    // ignore
  }
  return 'admin';
}

function getRoleKey(role?: string): 'admin' | 'employee' {
  const r = role ?? getCurrentRole();
  return r === 'employee' ? 'employee' : 'admin';
}

function loadHistory(role?: string): Conversation[] {
  const r = getRoleKey(role);
  const storageKey = `mock_history_${r}`;
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch {
    // ignore
  }
  return JSON.parse(JSON.stringify(r === 'employee' ? INITIAL_EMPLOYEE_HISTORY : INITIAL_MOCK_HISTORY));
}

function saveHistory(role: string, history: Conversation[]): void {
  const r = getRoleKey(role);
  const storageKey = `mock_history_${r}`;
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(storageKey, JSON.stringify(history));
    }
  } catch {
    // ignore
  }
}

let mockHistoryAdmin: Conversation[] = loadHistory('admin');
let mockHistoryEmployee: Conversation[] = loadHistory('employee');

export function _resetMockHistory(): void {
  mockHistoryAdmin = JSON.parse(JSON.stringify(INITIAL_MOCK_HISTORY));
  mockHistoryEmployee = JSON.parse(JSON.stringify(INITIAL_EMPLOYEE_HISTORY));
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem('mock_history_admin');
      window.localStorage.removeItem('mock_history_employee');
    }
  } catch {
    // ignore
  }
}

export const chatService = {
  // SRS 3.3: question -> RAG -> answer + source references
  async ask(question: string, conversationId?: string, roleOverride?: 'admin' | 'employee'): Promise<ChatReply> {
    const r = getRoleKey(roleOverride);
    if (USE_MOCK) {
      await delay(1200);
      const id = conversationId ?? `c${Date.now()}`;
      const now = new Date().toISOString();
      const reply: ChatReply = {
        conversationId: id,
        message: {
          id: `m${Date.now()}`,
          role: 'assistant',
          timestamp: now,
          content: 'Multi-factor authentication is required for all employees accessing internal systems.',
          sources: [
            {
              documentName: 'Security_Policy.pdf',
              page: 12,
              snippet: 'All employees must enable MFA for internal systems.',
            },
          ],
        },
      };
      const userMsg = {
        id: `u${Date.now()}`,
        role: 'user' as const,
        content: question,
        timestamp: now,
      };

      if (r === 'employee') {
        const existing = mockHistoryEmployee.find((c) => c.id === id);
        if (existing) {
          existing.messages.push(userMsg, reply.message);
          existing.updatedAt = now;
        } else {
          mockHistoryEmployee = [
            {
              id,
              title: question.slice(0, 60),
              updatedAt: now,
              messages: [userMsg, reply.message],
            },
            ...mockHistoryEmployee,
          ];
        }
        saveHistory('employee', mockHistoryEmployee);
      } else {
        const existing = mockHistoryAdmin.find((c) => c.id === id);
        if (existing) {
          existing.messages.push(userMsg, reply.message);
          existing.updatedAt = now;
        } else {
          mockHistoryAdmin = [
            {
              id,
              title: question.slice(0, 60),
              updatedAt: now,
              messages: [userMsg, reply.message],
            },
            ...mockHistoryAdmin,
          ];
        }
        saveHistory('admin', mockHistoryAdmin);
      }
      return reply;
    }
    const { data } = await api.post<unknown>('/api/chat', { question, conversationId });
    return toChatReply(data);
  },

  async getHistory(roleOverride?: 'admin' | 'employee'): Promise<Conversation[]> {
    const r = getRoleKey(roleOverride);
    if (USE_MOCK) {
      await delay(300);
      return [...(r === 'employee' ? mockHistoryEmployee : mockHistoryAdmin)];
    }
    const { data } = await api.get<unknown>('/api/chat/history');
    return toConversationList(data);
  },

  async deleteConversation(id: string, roleOverride?: 'admin' | 'employee'): Promise<void> {
    const r = getRoleKey(roleOverride);
    if (USE_MOCK) {
      if (r === 'employee') {
        mockHistoryEmployee = mockHistoryEmployee.filter((c) => c.id !== id);
        saveHistory('employee', mockHistoryEmployee);
      } else {
        mockHistoryAdmin = mockHistoryAdmin.filter((c) => c.id !== id);
        saveHistory('admin', mockHistoryAdmin);
      }
      return;
    }
    await api.delete(`/api/chat/history/${id}`);
  },
};
