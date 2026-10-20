import { api, delay, USE_MOCK } from './api';
import { toDocument, unwrapList } from './adapters';
import type { DocumentType, KnowledgeDocument } from '../types';

export const INITIAL_MOCK_DOCS: KnowledgeDocument[] = [
  { id: 'd1', fileName: 'Security_Policy.pdf', fileType: 'PDF', sizeBytes: 2_400_000, pageCount: 24, uploadedAt: '2026-08-01T10:00:00Z', status: 'PROCESSED' },
  { id: 'd2', fileName: 'HR_Handbook.docx', fileType: 'DOCX', sizeBytes: 1_100_000, pageCount: 40, uploadedAt: '2026-08-02T09:30:00Z', status: 'PROCESSED' },
];

const STORAGE_KEY = 'mock_documents';

let memoryDocs: KnowledgeDocument[] = JSON.parse(JSON.stringify(INITIAL_MOCK_DOCS));

function loadDocs(): KnowledgeDocument[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Auto-resolve any stuck PROCESSING docs after 2 seconds
          const now = Date.now();
          return parsed.map((d) => {
            if (d.status === 'PROCESSING') {
              const uploadTime = new Date(d.uploadedAt).getTime();
              if (isNaN(uploadTime) || now - uploadTime > 2000) {
                return { ...d, status: 'PROCESSED', pageCount: d.pageCount || 10 };
              }
            }
            return d;
          });
        }
      }
    }
  } catch {
    // ignore
  }
  return memoryDocs;
}

function saveDocs(docs: KnowledgeDocument[]): void {
  memoryDocs = docs;
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(docs));
    }
  } catch {
    // ignore
  }
}

let mockDocs: KnowledgeDocument[] = loadDocs();

export function _resetMockDocs(): void {
  memoryDocs = JSON.parse(JSON.stringify(INITIAL_MOCK_DOCS));
  mockDocs = JSON.parse(JSON.stringify(INITIAL_MOCK_DOCS));
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // ignore
  }
}

export const documentService = {
  async list(): Promise<KnowledgeDocument[]> {
    if (USE_MOCK) {
      await delay(300);
      mockDocs = loadDocs();
      return [...mockDocs];
    }
    const { data } = await api.get<unknown>('/api/documents');
    return unwrapList(data).map(toDocument);
  },

  // Admin only (SRS 2.3). Backend + AI service then parse, chunk, embed (SRS 3.2).
  async upload(file: File, onProgress?: (percent: number) => void): Promise<KnowledgeDocument> {
    if (USE_MOCK) {
      for (let p = 0; p <= 100; p += 25) {
        onProgress?.(p);
        await delay(100);
      }
      const ext = (file.name.split('.').pop() ?? '').toUpperCase() as DocumentType;
      const doc: KnowledgeDocument = {
        id: `d${Date.now()}`,
        fileName: file.name,
        fileType: ext,
        sizeBytes: file.size,
        uploadedAt: new Date().toISOString(),
        status: 'PROCESSING',
      };
      mockDocs = [doc, ...mockDocs];
      saveDocs(mockDocs);

      // Fast, reliable transition to PROCESSED (1.5 seconds)
      setTimeout(() => {
        mockDocs = loadDocs().map((d) =>
          d.id === doc.id
            ? { ...d, status: 'PROCESSED', pageCount: Math.max(1, Math.round(file.size / 50000) || 5) }
            : d
        );
        saveDocs(mockDocs);
      }, 1500);

      return doc;
    }
    const form = new FormData();
    form.append('file', file);
    const { data } = await api.post<unknown>('/api/documents/upload', form, {
      onUploadProgress: (e) => e.total && onProgress?.(Math.round((e.loaded * 100) / e.total)),
    });
    return toDocument(data);
  },

  async remove(id: string): Promise<void> {
    if (USE_MOCK) {
      await delay(300);
      mockDocs = mockDocs.filter((d) => d.id !== id);
      saveDocs(mockDocs);
      return;
    }
    await api.delete(`/api/documents/${id}`);
  },
};
