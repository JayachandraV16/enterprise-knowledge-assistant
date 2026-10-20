import type { DocumentType } from '../types';

export const ALLOWED_TYPES: DocumentType[] = ['PDF', 'DOCX', 'CSV']; // SRS 1.3
export const MAX_FILE_MB = 25;
export const MAX_QUESTION_LENGTH = 1000;

/** Returns an error message, or null if the file is valid. */
export function validateDocument(file: File): string | null {
  const ext = (file.name.split('.').pop() ?? '').toUpperCase();
  if (!ALLOWED_TYPES.includes(ext as DocumentType)) {
    return `Unsupported file type. Allowed: ${ALLOWED_TYPES.join(', ')}`;
  }
  if (file.size > MAX_FILE_MB * 1024 * 1024) return `File exceeds ${MAX_FILE_MB} MB`;
  if (file.size === 0) return 'File is empty';
  return null;
}
