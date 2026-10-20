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
            documentName: 'HR_Handbook_Q4_2024.docx',
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

let mockHistory: Conversation[] = [...INITIAL_MOCK_HISTORY];

export function _resetMockHistory(): void {
  mockHistory = JSON.parse(JSON.stringify(INITIAL_MOCK_HISTORY));
}

export const chatService = {
  // SRS 3.3: question -> RAG -> answer + source references
  async ask(question: string, conversationId?: string): Promise<ChatReply> {
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
      const existing = mockHistory.find((c) => c.id === id);
      if (existing) {
        existing.messages.push(userMsg, reply.message);
        existing.updatedAt = now;
      } else {
        mockHistory = [
          {
            id,
            title: question.slice(0, 60),
            updatedAt: now,
            messages: [userMsg, reply.message],
          },
          ...mockHistory,
        ];
      }
      return reply;
    }
    const { data } = await api.post<unknown>('/api/chat', { question, conversationId });
    return toChatReply(data);
  },

  async getHistory(): Promise<Conversation[]> {
    if (USE_MOCK) {
      await delay(300);
      return [...mockHistory];
    }
    const { data } = await api.get<unknown>('/api/chat/history');
    return toConversationList(data);
  },

  async deleteConversation(id: string): Promise<void> {
    if (USE_MOCK) {
      mockHistory = mockHistory.filter((c) => c.id !== id);
      return;
    }
    await api.delete(`/api/chat/history/${id}`);
  },
};
