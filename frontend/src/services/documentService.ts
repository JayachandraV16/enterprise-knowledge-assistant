import { api, delay, USE_MOCK } from './api';
import { toDocument, unwrapList } from './adapters';
import type { DocumentType, KnowledgeDocument } from '../types';

let mockDocs: KnowledgeDocument[] = [
  { id: 'd1', fileName: 'Security_Policy.pdf', fileType: 'PDF', sizeBytes: 2_400_000, pageCount: 24, uploadedAt: '2026-08-01T10:00:00Z', status: 'PROCESSED' },
  { id: 'd2', fileName: 'HR_Handbook.docx', fileType: 'DOCX', sizeBytes: 1_100_000, pageCount: 40, uploadedAt: '2026-08-02T09:30:00Z', status: 'PROCESSED' },
];

export const documentService = {
  async list(): Promise<KnowledgeDocument[]> {
    if (USE_MOCK) { await delay(300); return [...mockDocs]; }
    const { data } = await api.get<unknown>('/api/documents');
    return unwrapList(data).map(toDocument);
  },

  // Admin only (SRS 2.3). Backend + AI service then parse, chunk, embed (SRS 3.2).
  async upload(file: File, onProgress?: (percent: number) => void): Promise<KnowledgeDocument> {
    if (USE_MOCK) {
      for (let p = 0; p <= 100; p += 25) { onProgress?.(p); await delay(150); }
      const ext = (file.name.split('.').pop() ?? '').toUpperCase() as DocumentType;
      const doc: KnowledgeDocument = {
        id: `d${Date.now()}`, fileName: file.name, fileType: ext, sizeBytes: file.size,
        uploadedAt: new Date().toISOString(), status: 'PROCESSING',
      };
      mockDocs = [doc, ...mockDocs];
      setTimeout(() => {
        mockDocs = mockDocs.map((d) => (d.id === doc.id ? { ...d, status: 'PROCESSED', pageCount: 10 } : d));
      }, 4000);
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
    if (USE_MOCK) { await delay(300); mockDocs = mockDocs.filter((d) => d.id !== id); return; }
    await api.delete(`/api/documents/${id}`);
  },
};
