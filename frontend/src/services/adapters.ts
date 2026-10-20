import type {
  AuthResponse,
  ChatMessage,
  ChatReply,
  Conversation,
  DocumentStatus,
  DocumentType,
  KnowledgeDocument,
  Role,
  Source,
  User,
} from '../types';

/**
 * Unwraps array payloads from standard arrays or envelope structures
 * like Spring Boot pagination (`{ content: [...] }`) or ApiResponse (`{ data: [...] }`, `{ items: [...] }`).
 */
export function unwrapList<T = unknown>(raw: unknown): T[] {
  if (Array.isArray(raw)) return raw as T[];
  if (raw && typeof raw === 'object') {
    const record = raw as Record<string, unknown>;
    if (Array.isArray(record.data)) return record.data as T[];
    if (Array.isArray(record.content)) return record.content as T[];
    if (Array.isArray(record.items)) return record.items as T[];
  }
  return [];
}

/**
 * Normalizes user data into standard User shape.
 * - Handles numeric or string IDs.
 * - Handles role string variants (e.g. "ROLE_ADMIN", "Administrator", "admin", "Employee").
 * - Handles active/enabled/status flags.
 */
export function toUser(raw: unknown): User {
  const record = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;

  // ID normalization
  const id = String(record.id ?? record.userId ?? record.sub ?? '');

  // Role normalization
  let role: Role = 'EMPLOYEE';
  const rawRole = record.role ?? record.userRole ?? (Array.isArray(record.roles) ? record.roles[0] : undefined);
  if (typeof rawRole === 'string') {
    const normalized = rawRole.trim().toUpperCase();
    if (normalized.includes('ADMIN')) {
      role = 'ADMIN';
    } else {
      role = 'EMPLOYEE';
    }
  }

  // Active status normalization
  let active = true;
  if (typeof record.active === 'boolean') {
    active = record.active;
  } else if (typeof record.enabled === 'boolean') {
    active = record.enabled;
  } else if (typeof record.status === 'string') {
    active = record.status.trim().toUpperCase() === 'ACTIVE';
  }

  const name = String(record.name ?? record.fullName ?? record.username ?? 'User');
  const email = String(record.email ?? '');

  return { id, name, email, role, active };
}

/**
 * Normalizes authentication response payloads.
 * - Accepts tokens under `token`, `accessToken`, `jwt`, or `access_token`.
 * - Accepts user object nested under `user` or flat on the root.
 */
export function toAuthResponse(raw: unknown): AuthResponse {
  const record = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const token = String(record.token ?? record.accessToken ?? record.jwt ?? record.access_token ?? '');

  const userSource = record.user && typeof record.user === 'object' ? record.user : record;
  const user = toUser(userSource);

  return { token, user };
}

/**
 * Normalizes ISO date string or falls back to current ISO date.
 */
function toIsoDate(val: unknown): string {
  if (typeof val === 'string' && val.trim()) {
    const d = new Date(val);
    if (!isNaN(d.getTime())) return d.toISOString();
    return val;
  }
  if (typeof val === 'number' && !isNaN(val)) {
    const d = new Date(val);
    if (!isNaN(d.getTime())) return d.toISOString();
  }
  return new Date().toISOString();
}

/**
 * Normalizes document status from common backend representations.
 */
function toDocumentStatus(val: unknown): DocumentStatus {
  if (typeof val === 'string') {
    const s = val.trim().toUpperCase();
    if (['PROCESSED', 'COMPLETED', 'READY', 'INDEXED'].includes(s)) return 'PROCESSED';
    if (['PROCESSING', 'PENDING', 'UPLOADED'].includes(s)) return 'PROCESSING';
    if (['FAILED', 'ERROR'].includes(s)) return 'FAILED';
  }
  return 'PROCESSING';
}

/**
 * Normalizes knowledge document representation.
 * - Extracts filename and derives fileType from extension if missing.
 * - Normalizes sizeBytes and ISO uploadedAt.
 */
export function toDocument(raw: unknown): KnowledgeDocument {
  const record = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const id = String(record.id ?? record.docId ?? record.documentId ?? '');
  const fileName = String(record.fileName ?? record.filename ?? record.name ?? 'document');

  // File type: from property or derived from filename extension
  const rawType = String(record.fileType ?? record.type ?? '').trim().toUpperCase();
  let fileType: DocumentType = 'PDF';
  if (rawType === 'PDF' || rawType === 'DOCX' || rawType === 'CSV') {
    fileType = rawType;
  } else {
    const ext = (fileName.split('.').pop() ?? '').toUpperCase();
    if (ext === 'DOCX' || ext === 'CSV' || ext === 'PDF') {
      fileType = ext;
    }
  }

  // Size in bytes
  let sizeBytes = 0;
  const rawSize = record.sizeBytes ?? record.size ?? record.fileSize;
  if (typeof rawSize === 'number') {
    sizeBytes = rawSize;
  } else if (typeof rawSize === 'string') {
    const parsed = parseInt(rawSize, 10);
    if (!isNaN(parsed)) sizeBytes = parsed;
  }

  // Page count
  const rawPages = record.pageCount ?? record.pages ?? record.totalPageCount;
  const pageCount = typeof rawPages === 'number' && !isNaN(rawPages) ? rawPages : undefined;

  // Upload date
  const uploadedAt = toIsoDate(record.uploadedAt ?? record.uploadDate ?? record.createdAt);

  // Status
  const status = toDocumentStatus(record.status ?? record.documentStatus);

  return { id, fileName, fileType, sizeBytes, pageCount, uploadedAt, status };
}

/**
 * Normalizes a retrieved RAG source reference.
 */
export function toSource(raw: unknown): Source {
  const record = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const documentName = String(record.documentName ?? record.document ?? record.fileName ?? record.filename ?? record.name ?? 'Document');
  const page = typeof record.page === 'number' ? record.page : (typeof record.pageNumber === 'number' ? record.pageNumber : undefined);
  const snippet = String(record.snippet ?? record.text ?? record.chunk ?? record.content ?? '');

  return { documentName, page, snippet };
}

/**
 * Normalizes chat reply responses.
 * Accepts `{ conversationId, message: {...} }` OR `{ answer, sources, conversationId? }`.
 * Sources default to `[]`.
 */
export function toChatReply(raw: unknown): ChatReply {
  const record = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const conversationId = String(record.conversationId ?? record.id ?? `c-${Date.now()}`);

  if (record.message && typeof record.message === 'object') {
    const msg = record.message as Record<string, unknown>;
    const rawSources = Array.isArray(msg.sources) ? msg.sources : (Array.isArray(record.sources) ? record.sources : []);
    const sources = rawSources.map(toSource);
    const content = String(msg.content ?? msg.text ?? msg.answer ?? '');
    const timestamp = toIsoDate(msg.timestamp ?? record.timestamp);

    return {
      conversationId,
      message: {
        id: String(msg.id ?? `m-${Date.now()}`),
        role: 'assistant',
        content,
        sources,
        timestamp,
      },
    };
  }

  // Alternate shape: { answer / response / content, sources?, conversationId? }
  const content = String(record.answer ?? record.response ?? record.content ?? record.text ?? '');
  const sources = Array.isArray(record.sources) ? record.sources.map(toSource) : [];
  const timestamp = toIsoDate(record.timestamp ?? record.createdAt);

  return {
    conversationId,
    message: {
      id: String(record.id ?? `m-${Date.now()}`),
      role: 'assistant',
      content,
      sources,
      timestamp,
    },
  };
}

/**
 * Normalizes chat message records.
 */
function toChatMessage(raw: unknown, defaultRole: 'user' | 'assistant' = 'assistant'): ChatMessage {
  const record = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const id = String(record.id ?? `m-${Date.now()}`);
  const role = record.role === 'user' ? 'user' : defaultRole;
  const content = String(record.content ?? record.text ?? record.message ?? record.answer ?? record.question ?? '');
  const sources = Array.isArray(record.sources) ? record.sources.map(toSource) : undefined;
  const timestamp = toIsoDate(record.timestamp ?? record.createdAt);

  return { id, role, content, sources, timestamp };
}

/**
 * Normalizes conversation history lists.
 * Accepts EITHER:
 * 1. An array of conversations with nested messages: `[{ id, title, messages: [...] }]`
 * 2. A flat array of Q&A records: `[{ id, question, response, timestamp, conversationId?, sources? }]`
 *    Grouped by `conversationId` if present, otherwise one conversation per record (title = first 60 chars of question).
 * Handles Spring pagination / data envelope wrappers.
 */
export function toConversationList(raw: unknown): Conversation[] {
  const list = unwrapList(raw);
  if (list.length === 0) return [];

  // Check if first item is a conversation with a messages array
  const first = list[0] as Record<string, unknown>;
  if (first && Array.isArray(first.messages)) {
    return list.map((item) => {
      const rec = (item && typeof item === 'object' ? item : {}) as Record<string, unknown>;
      const id = String(rec.id ?? `c-${Date.now()}`);
      const title = String(rec.title ?? 'Conversation');
      const tag = rec.tag ? String(rec.tag) : undefined;
      const updatedAt = toIsoDate(rec.updatedAt ?? rec.timestamp);
      const messages = Array.isArray(rec.messages) ? rec.messages.map((m) => toChatMessage(m)) : [];

      return { id, title, tag, updatedAt, messages };
    });
  }

  // Otherwise, handle flat Q&A records: { id, question, response/answer, timestamp, conversationId?, sources? }
  type FlatRecord = {
    id: string;
    question: string;
    response: string;
    timestamp: string;
    conversationId?: string;
    sources?: Source[];
  };

  const flatRecords: FlatRecord[] = list.map((item) => {
    const rec = (item && typeof item === 'object' ? item : {}) as Record<string, unknown>;
    return {
      id: String(rec.id ?? `qa-${Date.now()}`),
      question: String(rec.question ?? rec.query ?? ''),
      response: String(rec.response ?? rec.answer ?? rec.content ?? ''),
      timestamp: toIsoDate(rec.timestamp ?? rec.createdAt),
      conversationId: rec.conversationId ? String(rec.conversationId) : undefined,
      sources: Array.isArray(rec.sources) ? rec.sources.map(toSource) : undefined,
    };
  });

  // Group by conversationId if provided; otherwise unique per record
  const groups = new Map<string, FlatRecord[]>();

  flatRecords.forEach((rec, idx) => {
    const key = rec.conversationId ?? `single-${rec.id || idx}`;
    const group = groups.get(key) ?? [];
    group.push(rec);
    groups.set(key, group);
  });

  const conversations: Conversation[] = [];

  groups.forEach((recs, convId) => {
    const firstRec = recs[0];
    const title = firstRec.question.slice(0, 60).trim() || 'Conversation';
    const latestTimestamp = recs.reduce((latest, r) => (r.timestamp > latest ? r.timestamp : latest), firstRec.timestamp);

    const messages: ChatMessage[] = [];
    recs.forEach((r) => {
      if (r.question) {
        messages.push({
          id: `u-${r.id}`,
          role: 'user',
          content: r.question,
          timestamp: r.timestamp,
        });
      }
      messages.push({
        id: `a-${r.id}`,
        role: 'assistant',
        content: r.response,
        sources: r.sources,
        timestamp: r.timestamp,
      });
    });

    conversations.push({
      id: convId,
      title,
      updatedAt: latestTimestamp,
      messages,
    });
  });

  return conversations;
}
