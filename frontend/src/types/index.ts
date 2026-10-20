// Shapes mirror API_CONTRACT.md (SRS: Users, Documents, Chat History).
export type Role = 'ADMIN' | 'EMPLOYEE';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  active: boolean;
}

export interface AuthResponse {
  token: string; // JWT issued by Spring Boot
  user: User;
}

export type DocumentStatus = 'PROCESSING' | 'PROCESSED' | 'FAILED';
export type DocumentType = 'PDF' | 'DOCX' | 'CSV'; // SRS 1.3: only these formats

export interface KnowledgeDocument {
  id: string;
  fileName: string;
  fileType: DocumentType;
  sizeBytes: number;
  pageCount?: number;
  uploadedAt: string; // ISO date
  status: DocumentStatus;
}

// SRS 3.5: document name, page number (if available), relevant snippet
export interface Source {
  documentName: string;
  page?: number;
  snippet: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  timestamp: string;
}

export interface ChatReply {
  conversationId: string;
  message: ChatMessage;
}

export interface Conversation {
  id: string;
  title: string;
  tag?: string;
  updatedAt: string;
  messages: ChatMessage[];
}

export interface UserInput {
  name: string;
  email: string;
  password?: string;
  role: Role;
}
