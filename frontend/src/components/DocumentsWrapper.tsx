import { useState, useRef } from "react";
import DocumentManagement from "@/imports/09DocumentManagement/index";

interface Doc {
  id: string;
  name: string;
  type: "PDF" | "DOCX" | "CSV" | "XLSX";
  size: string;
  date: string;
  status: "Processed" | "Processing" | "Failed";
  pages: number | null;
}

const INITIAL_DOCS: Doc[] = [
  { id: "1", name: "Security Policy v2.3.pdf", type: "PDF", size: "2.4 MB", date: "Jan 15, 2024", status: "Processed", pages: 47 },
  { id: "2", name: "HR Handbook Q4 2024.docx", type: "DOCX", size: "5.1 MB", date: "Jan 12, 2024", status: "Processed", pages: 124 },
  { id: "3", name: "Finance Guidelines 2024.pdf", type: "PDF", size: "1.8 MB", date: "Jan 10, 2024", status: "Processing", pages: null },
  { id: "4", name: "IT Asset Inventory.csv", type: "CSV", size: "892 KB", date: "Jan 8, 2024", status: "Processed", pages: null },
  { id: "5", name: "Product Roadmap H1.pdf", type: "PDF", size: "3.2 MB", date: "Jan 5, 2024", status: "Failed", pages: null },
  { id: "6", name: "Employee Benefits Guide.docx", type: "DOCX", size: "1.2 MB", date: "Dec 28, 2023", status: "Processed", pages: 38 },
];

const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  PDF: { bg: "#fee2e2", text: "#dc2626" },
  DOCX: { bg: "#dbeafe", text: "#2563eb" },
  CSV: { bg: "#dcfce7", text: "#16a34a" },
  XLSX: { bg: "#fef3c7", text: "#d97706" },
};

const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  Processed: { bg: "#dcfce7", text: "#16a34a", dot: "#16a34a" },
  Processing: { bg: "#fef3c7", text: "#d97706", dot: "#d97706" },
  Failed: { bg: "#fee2e2", text: "#dc2626", dot: "#dc2626" },
};

export default function DocumentsWrapper({ navigate }: { navigate: (page: string) => void }) {
  const [docs, setDocs] = useState<Doc[]>(INITIAL_DOCS);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [dragOver, setDragOver] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const typeFilters = ["All", "PDF", "DOCX", "CSV", "XLSX"];

  const filtered = docs.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === "All" || d.type === filterType;
    return matchSearch && matchType;
  });

  const handleFileDrop = (files: FileList | null) => {
    if (!files) return;
    Array.from(files).forEach((file) => {
      const ext = file.name.split(".").pop()?.toUpperCase() as Doc["type"] | undefined;
      const type: Doc["type"] = (ext && ["PDF", "DOCX", "CSV", "XLSX"].includes(ext)) ? (ext as Doc["type"]) : "PDF";
      const newDoc: Doc = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        type,
        size: file.size > 1024 * 1024 ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`,
        date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
        status: "Processing",
        pages: null,
      };
      setDocs((prev) => [newDoc, ...prev]);
      setTimeout(() => {
        setDocs((prev) => prev.map((d) => d.id === newDoc.id ? { ...d, status: "Processed" } : d));
      }, 2500);
    });
    setShowUpload(false);
  };

  const deleteDoc = (id: string) => setDocs((prev) => prev.filter((d) => d.id !== id));

  return (
    <div className="size-full relative">
      <DocumentManagement />

      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Top bar */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[20px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">Document Management</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              {docs.filter((d) => d.status === "Processed").length} documents indexed
            </p>
          </div>
          <button
            onClick={() => setShowUpload(true)}
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
              <button onClick={() => setSearch("")} className="cursor-pointer border-none bg-transparent p-0 text-[#94a3b8] hover:text-[#475569]">
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
            <div className="grid border-b border-[#f1f5f9] px-[20px] py-[12px]" style={{ gridTemplateColumns: "1fr 80px 100px 120px 110px 100px" }}>
              {["File Name", "Type", "Size", "Uploaded", "Status", "Actions"].map((h) => (
                <p key={h} className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">{h}</p>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-[12px] py-[48px] text-center">
                <svg className="size-[36px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">No documents found</p>
              </div>
            ) : (
              filtered.map((doc) => {
                const typeStyle = TYPE_COLORS[doc.type] ?? { bg: "#f1f5f9", text: "#475569" };
                const statusStyle = STATUS_STYLES[doc.status];
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
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[14px] truncate">{doc.name}</p>
                    </div>
                    <span
                      className="px-[8px] py-[3px] rounded-full font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[11px] w-fit"
                      style={{ background: typeStyle.bg, color: typeStyle.text }}
                    >
                      {doc.type}
                    </span>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px]">{doc.size}</p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px]">{doc.date}</p>
                    <div className="flex items-center gap-[6px]">
                      <div className="size-[6px] rounded-full shrink-0" style={{ background: statusStyle.dot }} />
                      <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px]" style={{ color: statusStyle.text }}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => navigate("documentDetail")}
                        className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
                      >
                        View
                      </button>
                      <button
                        onClick={() => deleteDoc(doc.id)}
                        className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-red-500 text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Upload modal */}
      {showUpload && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          style={{ zIndex: 20 }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowUpload(false); }}
        >
          <div className="bg-white rounded-[16px] p-[32px] w-[480px] flex flex-col gap-[20px] shadow-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[18px]">Upload Document</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">Supported: PDF, DOCX, CSV, XLSX</p>
              </div>
              <button onClick={() => setShowUpload(false)} className="text-[#94a3b8] hover:text-[#475569] bg-transparent border-none p-0 cursor-pointer">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Drop zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFileDrop(e.dataTransfer.files); }}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-[12px] py-[40px] flex flex-col items-center gap-[12px] cursor-pointer transition-colors ${
                dragOver ? "border-[#4f46e5] bg-[#eef2ff]" : "border-[#e2e8f0] hover:border-[#4f46e5] hover:bg-[#f8fafc]"
              }`}
            >
              <div className="bg-[#eef2ff] rounded-full p-[16px]">
                <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v9" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[15px]">Drop files here or click to browse</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[4px]">Maximum file size: 50 MB</p>
              </div>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.docx,.csv,.xlsx"
              className="hidden"
              onChange={(e) => handleFileDrop(e.target.files)}
            />

            <div className="flex gap-[12px] justify-end">
              <button
                onClick={() => setShowUpload(false)}
                className="px-[16px] py-[10px] rounded-[8px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#475569] text-[14px] hover:border-[#cbd5e1] bg-white cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-[16px] py-[10px] rounded-[8px] bg-[#4f46e5] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[14px] hover:bg-[#4338ca] border-none cursor-pointer transition-colors"
              >
                Select Files
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
