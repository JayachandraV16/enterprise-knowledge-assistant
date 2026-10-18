import { describe, it, expect, beforeEach } from 'vitest';
import { chatService, _resetMockHistory } from '../chatService';
import { MAX_QUESTION_LENGTH } from '../../utils/validators';
import { toConversationList } from '../adapters';

describe('Chat Service & Chat Logic', () => {
  beforeEach(() => {
    _resetMockHistory();
  });

  describe('chatService.ask in mock mode', () => {
    it('creates a new thread when conversationId is undefined', async () => {
      const question = 'What is the policy on password renewal?';
      const reply = await chatService.ask(question);

      expect(reply.conversationId).toBeDefined();
      expect(reply.message.role).toBe('assistant');
      expect(reply.message.content).toBeDefined();
      expect(reply.message.sources).toBeDefined();
      expect(reply.message.sources!.length).toBeGreaterThan(0);

      const history = await chatService.getHistory();
      const thread = history.find((c) => c.id === reply.conversationId);
      expect(thread).toBeDefined();
      expect(thread?.messages.length).toBe(2);
      expect(thread?.messages[0].content).toBe(question);
      expect(thread?.messages[0].role).toBe('user');
      expect(thread?.messages[1].role).toBe('assistant');
    });

    it('continues an existing thread when conversationId is provided', async () => {
      const historyBefore = await chatService.getHistory();
      const initialThread = historyBefore[0];
      const initialMsgCount = initialThread.messages.length;

      const followUp = 'Can I use an authenticator app?';
      const reply = await chatService.ask(followUp, initialThread.id);

      expect(reply.conversationId).toBe(initialThread.id);

      const historyAfter = await chatService.getHistory();
      const updatedThread = historyAfter.find((c) => c.id === initialThread.id);
      expect(updatedThread?.messages.length).toBe(initialMsgCount + 2);
      expect(updatedThread?.messages[updatedThread.messages.length - 2].content).toBe(followUp);
    });
  });

  describe('chatService.getHistory & deleteConversation in mock mode', () => {
    it('returns seeded conversations', async () => {
      const history = await chatService.getHistory();
      expect(history.length).toBeGreaterThanOrEqual(3);
      expect(history[0].id).toBe('c1');
      expect(history[0].tag).toBe('Security');
      expect(history[0].messages.length).toBeGreaterThan(0);
    });

    it('deletes a conversation by ID', async () => {
      const historyBefore = await chatService.getHistory();
      const idToDelete = historyBefore[0].id;

      await chatService.deleteConversation(idToDelete);

      const historyAfter = await chatService.getHistory();
      expect(historyAfter.find((c) => c.id === idToDelete)).toBeUndefined();
      expect(historyAfter.length).toBe(historyBefore.length - 1);
    });
  });

  describe('Input validation', () => {
    it('defines MAX_QUESTION_LENGTH as 1000', () => {
      expect(MAX_QUESTION_LENGTH).toBe(1000);
    });

    it('identifies questions that exceed MAX_QUESTION_LENGTH', () => {
      const validQuestion = 'a'.repeat(1000);
      const invalidQuestion = 'a'.repeat(1001);

      expect(validQuestion.length <= MAX_QUESTION_LENGTH).toBe(true);
      expect(invalidQuestion.length > MAX_QUESTION_LENGTH).toBe(true);
    });
  });

  describe('Flat Q&A records handling without conversation_id or sources', () => {
    it('normalizes flat records with no conversationId and no sources', () => {
      const flatRecords = [
        {
          id: 'qa-1',
          question: 'What are the core working hours?',
          response: 'Core working hours are 9 AM to 5 PM Monday through Friday.',
          timestamp: '2024-01-15T09:00:00Z',
        },
        {
          id: 'qa-2',
          question: 'How do I request software access?',
          response: 'Submit a ticket via the IT Service Portal.',
          timestamp: '2024-01-16T10:00:00Z',
        },
      ];

      const conversations = toConversationList(flatRecords);
      expect(conversations.length).toBe(2);

      const first = conversations[0];
      expect(first.title).toBe('What are the core working hours?');
      expect(first.messages.length).toBe(2);
      expect(first.messages[0].role).toBe('user');
      expect(first.messages[0].content).toBe('What are the core working hours?');
      expect(first.messages[1].role).toBe('assistant');
      expect(first.messages[1].content).toBe('Core working hours are 9 AM to 5 PM Monday through Friday.');
      expect(first.messages[1].sources).toBeUndefined();
    });
  });
});
