import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { documentService } from "../services/documentService";
import { getErrorMessage } from "../services/api";
import { validateDocument, ALLOWED_TYPES } from "../utils/validators";
import type { KnowledgeDocument, DocumentType, DocumentStatus } from "../types";
import DocumentManagement from "@/imports/09DocumentManagement/index";

const TYPE_COLORS: Record<DocumentType, { bg: string; text: string }> = {
  PDF: { bg: "#fee2e2", text: "#dc2626" },
  DOCX: { bg: "#dbeafe", text: "#2563eb" },
  CSV: { bg: "#dcfce7", text: "#16a34a" },
};

const STATUS_STYLES: Record<DocumentStatus, { bg: string; text: string; dot: string; label: string }> = {
  PROCESSED: { bg: "#dcfce7", text: "#16a34a", dot: "#16a34a", label: "Processed" },
  PROCESSING: { bg: "#fef3c7", text: "#d97706", dot: "#d97706", label: "Processing" },
  FAILED: { bg: "#fee2e2", text: "#dc2626", dot: "#dc2626", label: "Failed" },
};

function formatBytes(bytes: number): string {
  if (!bytes || bytes === 0) return "0 KB";
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

function formatDate(isoStr: string): string {
  try {
    const d = new Date(isoStr);
    if (isNaN(d.getTime())) return isoStr;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return isoStr;
  }
}

interface UploadProgressItem {
  fileName: string;
  percent: number;
}

export default function DocumentsWrapper({ navigate: propNavigate }: { navigate?: (page: string) => void }) {
  const routerNavigate = useNavigate();
  const navigate = propNavigate ?? routerNavigate;
  const { logout } = useAuth();

  const [docs, setDocs] = useState<KnowledgeDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"All" | DocumentType>("All");
  const [dragOver, setDragOver] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  // Uploading state
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadingFiles, setUploadingFiles] = useState<Record<string, number>>({});
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const typeFilters: ("All" | DocumentType)[] = ["All", "PDF", "DOCX", "CSV"];

  const loadDocs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await documentService.list();
      setDocs(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDocs();
  }, [loadDocs]);

  // Polling: While any document has status PROCESSING, re-fetch the list every 3 seconds
  useEffect(() => {
    const hasProcessing = docs.some((d) => d.status === "PROCESSING");
    if (!hasProcessing) return;

    const intervalId = setInterval(async () => {
      try {
        const updated = await documentService.list();
        setDocs(updated);
      } catch {
        // Silently keep polling
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [docs]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleFiles = async (files: FileList | File[] | null) => {
    if (!files || files.length === 0) return;
    setUploadError(null);

    const fileList = Array.from(files);

    // Validate all files first
    for (const file of fileList) {
      const validationError = validateDocument(file);
      if (validationError) {
        setUploadError(`${file.name}: ${validationError}`);
        return;
      }
    }

    // All files valid -> start uploading
    setIsUploading(true);
    const initialProgress: Record<string, number> = {};
    fileList.forEach((f) => {
      initialProgress[f.name] = 0;
    });
    setUploadingFiles(initialProgress);

    try {
      await Promise.all(
        fileList.map((file) =>
          documentService.upload(file, (percent) => {
            setUploadingFiles((prev) => ({ ...prev, [file.name]: percent }));
          })
        )
      );
      setShowUpload(false);
      setUploadingFiles({});
      // Refresh documents list
      const updated = await documentService.list();
      setDocs(updated);
    } catch (err) {
      setUploadError(getErrorMessage(err));
    } finally {
      setIsUploading(false);
    }
  };

  const deleteDoc = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) {
      return;
    }
    try {
      await documentService.remove(id);
      setDocs((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      setToast(getErrorMessage(err));
    }
  };

  const filtered = docs.filter((d) => {
    const matchSearch = d.fileName.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === "All" || d.fileType === filterType;
    return matchSearch && matchType;
  });

  return (
    <div className="size-full relative">
      <DocumentManagement />

      {/* Admin Sidebar Navigation Overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ width: 280, pointerEvents: "none", zIndex: 10 }}
      >
        {/* Brand / Logo -> Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          aria-label="Dashboard"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 24,
            left: 24,
            width: 160,
            height: 40,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* New Conversation button */}
        <button
          onClick={() => navigate("/chat")}
          aria-label="New Conversation"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 96,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Chat nav */}
        <button
          onClick={() => navigate("/chat")}
          aria-label="Chat"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 0,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Dashboard nav */}
        <button
          onClick={() => navigate("/dashboard")}
          aria-label="Dashboard"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 1,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Documents nav */}
        <button
          onClick={() => navigate("/documents")}
          aria-label="Documents"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 2,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Users nav */}
        <button
          onClick={() => navigate("/users")}
          aria-label="Users"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 3,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Settings nav */}
        <button
          onClick={() => navigate("/settings")}
          aria-label="Settings"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 4,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Logout button at bottom of sidebar */}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          aria-label="Logout"
          title="Logout"
          style={{
            pointerEvents: "all",
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 60,
            height: 36,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
      </div>

      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Toast notification */}
        {toast && (
          <div className="absolute top-[20px] right-[32px] z-50 bg-[#dc2626] text-white px-[16px] py-[10px] rounded-[8px] shadow-lg flex items-center gap-[10px] text-[13px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
            <span>{toast}</span>
            <button
              onClick={() => setToast(null)}
              className="text-white hover:opacity-80 bg-transparent border-none p-0 cursor-pointer ml-[6px]"
              title="Close"
            >
              ✕
            </button>
          </div>
        )}

        {/* Top bar */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[20px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">Document Management</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              {loading ? "Loading..." : `${docs.filter((d) => d.status === "PROCESSED").length} documents indexed`}
            </p>
          </div>
          <button
            onClick={() => {
              setUploadError(null);
              setUploadingFiles({});
              setShowUpload(true);
            }}
            className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-[16px] py-[10px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer flex items-center gap-[8px]"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 3v10M5 8l5-5 5 5M3 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Upload Document
          </button>
        </div>

        {/* Search + filters */}
        <div className="bg-white border-b border-[#e2e8f0] px-[32px] py-[14px] flex items-center gap-[16px] shrink-0">
          <div className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center gap-[10px] px-[14px] py-[9px] focus-within:border-[#4f46e5] transition-colors">
            <svg className="size-[15px] shrink-0 text-[#94a3b8]" fill="none" viewBox="0 0 20 20">
              <path d="M9 17A8 8 0 109 1a8 8 0 000 16zM17 17l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search files..."
              className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="cursor-pointer border-none bg-transparent p-0 text-[#94a3b8] hover:text-[#475569]"
                title="Clear search"
              >
                <svg className="size-[13px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          <div className="flex items-center gap-[6px]">
            {typeFilters.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-[12px] py-[6px] rounded-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] border cursor-pointer transition-colors ${
                  filterType === t
                    ? "bg-[#4f46e5] text-white border-[#4f46e5]"
                    : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#4f46e5] hover:text-[#4f46e5]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[24px]">
          <div className="bg-white border border-[#e2e8f0] rounded-[12px] overflow-hidden">
            {/* Table header */}
            <div
              className="grid border-b border-[#f1f5f9] px-[20px] py-[12px]"
              style={{ gridTemplateColumns: "1fr 80px 100px 120px 110px 100px" }}
            >
              {["File Name", "Type", "Size", "Uploaded", "Status", "Actions"].map((h) => (
                <p key={h} className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">{h}</p>
              ))}
            </div>

            {/* Skeleton Loading State */}
            {loading && (
              <div className="divide-y divide-[#f8fafc]">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="grid items-center px-[20px] py-[16px] animate-pulse"
                    style={{ gridTemplateColumns: "1fr 80px 100px 120px 110px 100px" }}
                  >
                    <div className="h-4 bg-[#f1f5f9] rounded w-2/3" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-12" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-16" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-20" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-16" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-12" />
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {!loading && error && (
              <div className="flex flex-col items-center justify-center gap-[12px] py-[48px] text-center">
                <div className="bg-[#fef2f2] text-[#dc2626] rounded-full p-3">
                  <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                    <path d="M12 9v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#dc2626] text-[14px]">
                  {error}
                </p>
                <button
                  type="button"
                  onClick={loadDocs}
                  className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[16px] py-[8px] rounded-[7px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-[12px] py-[48px] text-center">
                <svg className="size-[36px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
                  {docs.length === 0 ? "No documents uploaded yet" : "No documents found"}
                </p>
              </div>
            )}

            {/* Documents List */}
            {!loading &&
              !error &&
              filtered.map((doc) => {
                const typeStyle = TYPE_COLORS[doc.fileType] ?? { bg: "#f1f5f9", text: "#475569" };
                const statusStyle = STATUS_STYLES[doc.status] ?? STATUS_STYLES.PROCESSING;
                return (
                  <div
                    key={doc.id}
                    className="grid items-center px-[20px] py-[14px] border-b border-[#f8fafc] hover:bg-[#f8fafc] transition-colors group"
                    style={{ gridTemplateColumns: "1fr 80px 100px 120px 110px 100px" }}
                  >
                    <div className="flex items-center gap-[10px] min-w-0">
                      <div className="shrink-0 bg-[#f8fafc] rounded-[6px] size-[32px] flex items-center justify-center border border-[#e2e8f0]">
                        <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[14px] truncate" title={doc.fileName}>
                        {doc.fileName}
                      </p>
                    </div>
                    <span
                      className="px-[8px] py-[3px] rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[11px] w-fit"
                      style={{ background: typeStyle.bg, color: typeStyle.text }}
                    >
                      {doc.fileType}
                    </span>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px]">{formatBytes(doc.sizeBytes)}</p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px]">{formatDate(doc.uploadedAt)}</p>
                    <div className="flex items-center gap-[6px]">
                      <div className="size-[6px] rounded-full shrink-0" style={{ background: statusStyle.dot }} />
                      <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px]" style={{ color: statusStyle.text }}>
                        {statusStyle.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => deleteDoc(doc.id, doc.fileName)}
                        className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-red-500 text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Upload modal */}
      {showUpload && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          style={{ zIndex: 20 }}
          onClick={(e) => {
            if (e.target === e.currentTarget && !isUploading) setShowUpload(false);
          }}
        >
          <div className="bg-white rounded-[16px] p-[32px] w-[500px] flex flex-col gap-[20px] shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[18px]">Upload Document</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">Supported: PDF, DOCX, CSV</p>
              </div>
              <button
                disabled={isUploading}
                onClick={() => setShowUpload(false)}
                className="text-[#94a3b8] hover:text-[#475569] bg-transparent border-none p-0 cursor-pointer disabled:opacity-40"
              >
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Drop zone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                if (!isUploading) setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                if (!isUploading) handleFiles(e.dataTransfer.files);
              }}
              onClick={() => {
                if (!isUploading) fileInputRef.current?.click();
              }}
              className={`border-2 border-dashed rounded-[12px] py-[36px] px-[16px] flex flex-col items-center gap-[12px] cursor-pointer transition-colors ${
                dragOver ? "border-[#4f46e5] bg-[#eef2ff]" : "border-[#e2e8f0] hover:border-[#4f46e5] hover:bg-[#f8fafc]"
              } ${isUploading ? "opacity-50 pointer-events-none" : ""}`}
            >
              <div className="bg-[#eef2ff] rounded-full p-[14px]">
                <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v9" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[15px]">
                  Drop files here or click to browse
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[4px]">
                  PDF, DOCX, CSV up to 25 MB (multiple files supported)
                </p>
              </div>
            </div>

            {/* Validation error under the dropzone */}
            {uploadError && (
              <div className="bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] rounded-[8px] p-[10px] text-[13px] flex items-center gap-[8px]">
                <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d="M10 9v4m0 3h.01M10 2a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>{uploadError}</span>
              </div>
            )}

            {/* Per-file Upload Progress */}
            {isUploading && Object.keys(uploadingFiles).length > 0 && (
              <div className="flex flex-col gap-[10px] max-h-[160px] overflow-y-auto">
                {Object.entries(uploadingFiles).map(([fname, percent]) => (
                  <div key={fname} className="flex flex-col gap-[4px] bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] p-[10px]">
                    <div className="flex items-center justify-between text-[12px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                      <span className="text-[#1e293b] truncate max-w-[320px]">{fname}</span>
                      <span className="text-[#4f46e5] font-semibold">{percent}%</span>
                    </div>
                    <div className="w-full bg-[#e2e8f0] h-[6px] rounded-full overflow-hidden">
                      <div
                        className="bg-[#4f46e5] h-full transition-all duration-200"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.docx,.csv"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />

            <div className="flex gap-[12px] justify-end">
              <button
                disabled={isUploading}
                onClick={() => setShowUpload(false)}
                className="px-[16px] py-[10px] rounded-[8px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#475569] text-[14px] hover:border-[#cbd5e1] bg-white cursor-pointer transition-colors disabled:opacity-40"
              >
                Cancel
              </button>
              <button
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                className="px-[16px] py-[10px] rounded-[8px] bg-[#4f46e5] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[14px] hover:bg-[#4338ca] border-none cursor-pointer transition-colors disabled:opacity-40"
              >
                {isUploading ? "Uploading..." : "Select Files"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
