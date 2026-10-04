import { useState } from "react";
import ChatHistory from "@/imports/07ChatHistory/index";

interface Session {
  id: string;
  title: string;
  preview: string;
  date: string;
  tag: string;
  messages: number;
}

const ALL_SESSIONS: Session[] = [
  { id: "1", title: "Security Policy Compliance Check", preview: "What are the MFA requirements for corporate systems?", date: "Jan 15, 2024", tag: "Security", messages: 8 },
  { id: "2", title: "Annual Leave Policy", preview: "How many days of annual leave am I entitled to?", date: "Jan 12, 2024", tag: "HR", messages: 5 },
  { id: "3", title: "Expense Reimbursement Process", preview: "What receipts do I need to keep for expense claims?", date: "Jan 10, 2024", tag: "Finance", messages: 12 },
  { id: "4", title: "Software License Audit", preview: "List all approved software tools for the engineering team", date: "Jan 8, 2024", tag: "IT", messages: 6 },
  { id: "5", title: "Onboarding Checklist Q1", preview: "What are the required training modules for new employees?", date: "Jan 5, 2024", tag: "HR", messages: 9 },
  { id: "6", title: "Data Retention Guidelines", preview: "How long must customer data be retained per GDPR?", date: "Dec 28, 2023", tag: "Legal", messages: 4 },
  { id: "7", title: "Remote Work Policy Update", preview: "What are the updated guidelines for remote work in 2024?", date: "Dec 22, 2023", tag: "HR", messages: 7 },
];

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  Security: { bg: "#fee2e2", text: "#dc2626" },
  HR: { bg: "#dbeafe", text: "#2563eb" },
  Finance: { bg: "#dcfce7", text: "#16a34a" },
  IT: { bg: "#fef3c7", text: "#d97706" },
  Legal: { bg: "#f3e8ff", text: "#9333ea" },
};

function getTagStyle(tag: string) {
  return TAG_COLORS[tag] ?? { bg: "#f1f5f9", text: "#475569" };
}

export default function ChatHistoryWrapper({ navigate, chatPage = "chat", userName }: { navigate: (page: string) => void; chatPage?: string; userName?: string }) {
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());

  const tags = ["All", ...Array.from(new Set(ALL_SESSIONS.map((s) => s.tag)))];

  const filtered = ALL_SESSIONS.filter((s) => {
    if (deletedIds.has(s.id)) return false;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) || s.preview.toLowerCase().includes(search.toLowerCase());
    const matchTag = filterTag === "All" || s.tag === filterTag;
    return matchSearch && matchTag;
  });

  return (
    <div className="size-full relative">
      {/* Static import provides sidebar chrome */}
      <ChatHistory />

      {/* Interactive overlay for entire right content area */}
      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Top bar */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[20px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">Chat History</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              {ALL_SESSIONS.length - deletedIds.size} conversations
            </p>
          </div>
        </div>

        {/* Search + filters */}
        <div className="bg-white border-b border-[#e2e8f0] px-[32px] py-[16px] flex items-center gap-[16px] shrink-0">
          {/* Search */}
          <div className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center gap-[10px] px-[14px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
            <svg className="size-[16px] shrink-0 text-[#94a3b8]" fill="none" viewBox="0 0 20 20">
              <path d="M9 17A8 8 0 109 1a8 8 0 000 16zM17 17l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search keywords or documents..."
              className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
            />
            {search && (
              <button onClick={() => setSearch("")} className="cursor-pointer border-none bg-transparent p-0 text-[#94a3b8] hover:text-[#475569]">
                <svg className="size-[14px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          {/* Filter chips */}
          <div className="flex items-center gap-[6px]">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-[12px] py-[6px] rounded-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] border cursor-pointer transition-colors ${
                  filterTag === tag
                    ? "bg-[#4f46e5] text-white border-[#4f46e5]"
                    : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#4f46e5] hover:text-[#4f46e5]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions list */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[24px] flex flex-col gap-[12px]">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-[12px] py-[60px] text-center">
              <svg className="size-[40px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                <path d="M9 19l-7 2 2-7L15.5 2.5a2.121 2.121 0 013 3L9 19z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[15px]">No conversations found</p>
            </div>
          ) : (
            filtered.map((session) => {
              const tagStyle = getTagStyle(session.tag);
              return (
                <div
                  key={session.id}
                  className="bg-white border border-[#e2e8f0] rounded-[12px] px-[20px] py-[16px] flex items-center gap-[16px] hover:border-[#4f46e5] hover:shadow-sm transition-all group"
                >
                  <div className="bg-[#eef2ff] rounded-[10px] size-[44px] shrink-0 flex items-center justify-center">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[8px] mb-[4px]">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[15px] truncate">{session.title}</p>
                      <span
                        className="px-[8px] py-[2px] rounded-full font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[11px] shrink-0"
                        style={{ background: tagStyle.bg, color: tagStyle.text }}
                      >
                        {session.tag}
                      </span>
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] truncate">{session.preview}</p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#cbd5e1] text-[12px] mt-[4px]">
                      {session.date} · {session.messages} messages
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => navigate(chatPage)}
                      className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[14px] py-[7px] rounded-[7px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer"
                    >
                      Resume
                    </button>
                    <button
                      onClick={() => setDeletedIds((prev) => new Set([...prev, session.id]))}
                      className="border border-[#e2e8f0] text-[#94a3b8] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[14px] py-[7px] rounded-[7px] hover:border-red-300 hover:text-red-500 transition-colors bg-white cursor-pointer"
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
  );
}
