import { api, delay, USE_MOCK } from './api';
import { toChatReply, toConversationList } from './adapters';
import type { ChatReply, Conversation } from '../types';

let mockHistory: Conversation[] = [];

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
          id: `m${Date.now()}`, role: 'assistant', timestamp: now,
          content: 'Multi-factor authentication is required for all employees accessing internal systems.',
          sources: [{ documentName: 'Security_Policy.pdf', page: 12, snippet: 'All employees must enable MFA for internal systems.' }],
        },
      };
      const userMsg = { id: `u${Date.now()}`, role: 'user' as const, content: question, timestamp: now };
      const existing = mockHistory.find((c) => c.id === id);
      if (existing) {
        existing.messages.push(userMsg, reply.message);
        existing.updatedAt = now;
      } else {
        mockHistory = [{ id, title: question.slice(0, 60), updatedAt: now, messages: [userMsg, reply.message] }, ...mockHistory];
      }
      return reply;
    }
    const { data } = await api.post<unknown>('/api/chat', { question, conversationId });
    return toChatReply(data);
  },

  async getHistory(): Promise<Conversation[]> {
    if (USE_MOCK) { await delay(300); return [...mockHistory]; }
    const { data } = await api.get<unknown>('/api/chat/history');
    return toConversationList(data);
  },

  async deleteConversation(id: string): Promise<void> {
    if (USE_MOCK) { mockHistory = mockHistory.filter((c) => c.id !== id); return; }
    await api.delete(`/api/chat/history/${id}`);
  },
};
