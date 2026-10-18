import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { chatService } from "../services/chatService";
import { getErrorMessage } from "../services/api";
import type { Conversation } from "../types";
import ChatHistory from "@/imports/07ChatHistory/index";

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

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export default function ChatHistoryWrapper({
  navigate: propNavigate,
  chatPage = "/chat",
}: {
  navigate?: (page: string) => void;
  chatPage?: string;
  userName?: string;
}) {
  const routerNavigate = useNavigate();
  const navigate = propNavigate ?? routerNavigate;
  const { isAdmin, logout } = useAuth();

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filterTag, setFilterTag] = useState("All");
  const [toast, setToast] = useState<string | null>(null);

  const fetchHistory = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await chatService.getHistory();
      setConversations(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Tag list: only show tags if at least one conversation has a tag
  const availableTags = Array.from(
    new Set(conversations.map((c) => c.tag).filter((t): t is string => Boolean(t)))
  );
  const hasTags = availableTags.length > 0;
  const tags = hasTags ? ["All", ...availableTags] : [];

  const filtered = conversations.filter((c) => {
    const preview = c.messages?.[0]?.content ?? "";
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      preview.toLowerCase().includes(search.toLowerCase());
    const matchTag = filterTag === "All" || c.tag === filterTag;
    return matchSearch && matchTag;
  });

  const openChat = (id: string) => {
    const base = chatPage.startsWith("/") ? chatPage : `/${chatPage}`;
    navigate(`${base}?conversation=${encodeURIComponent(id)}`);
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to delete this conversation?")) {
      return;
    }
    try {
      await chatService.deleteConversation(id);
      setConversations((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      setToast(getErrorMessage(err));
    }
  };

  return (
    <div className="size-full relative">
      {/* Static import provides sidebar chrome */}
      <ChatHistory />

      {/* Sidebar navigation overlay */}
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

        {/* History nav (or Dashboard for admin) */}
        <button
          onClick={() => navigate(isAdmin ? "/dashboard" : "/history")}
          aria-label={isAdmin ? "Dashboard" : "History"}
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

        {/* Settings nav (or Documents for admin) */}
        <button
          onClick={() => navigate(isAdmin ? "/documents" : "/settings")}
          aria-label={isAdmin ? "Documents" : "Settings"}
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

        {isAdmin && (
          <>
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
          </>
        )}

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

      {/* Interactive overlay for entire right content area */}
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
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">Chat History</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              {loading ? "Loading..." : `${conversations.length} ${conversations.length === 1 ? "conversation" : "conversations"}`}
            </p>
          </div>
        </div>

        {/* Search + optional tag filters */}
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
              <button
                onClick={() => setSearch("")}
                className="cursor-pointer border-none bg-transparent p-0 text-[#94a3b8] hover:text-[#475569]"
                title="Clear search"
              >
                <svg className="size-[14px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* Filter chips: only rendered if at least one conversation has a tag */}
          {hasTags && (
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
          )}
        </div>

        {/* Sessions list */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[24px] flex flex-col gap-[12px]">
          {/* Skeleton loader while loading */}
          {loading && (
            <div className="flex flex-col gap-[12px]">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-white border border-[#e2e8f0] rounded-[12px] px-[20px] py-[16px] flex items-center gap-[16px] animate-pulse"
                >
                  <div className="bg-[#f1f5f9] rounded-[10px] size-[44px] shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-[#f1f5f9] rounded w-1/3" />
                    <div className="h-3 bg-[#f1f5f9] rounded w-2/3" />
                    <div className="h-3 bg-[#f1f5f9] rounded w-1/4" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error state with Retry */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center gap-[12px] py-[60px] text-center">
              <div className="bg-[#fef2f2] text-[#dc2626] rounded-full p-3">
                <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                  <path d="M12 9v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#dc2626] text-[15px]">
                {error}
              </p>
              <button
                type="button"
                onClick={fetchHistory}
                className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[16px] py-[8px] rounded-[7px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty state: No conversations yet */}
          {!loading && !error && conversations.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-[12px] py-[60px] text-center">
              <svg className="size-[40px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[15px]">
                No conversations yet
              </p>
            </div>
          )}

          {/* Search/filter yielded no results */}
          {!loading && !error && conversations.length > 0 && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-[12px] py-[60px] text-center">
              <svg className="size-[40px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                <path d="M9 19l-7 2 2-7L15.5 2.5a2.121 2.121 0 013 3L9 19z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[15px]">
                No conversations found
              </p>
            </div>
          )}

          {/* Sessions list */}
          {!loading &&
            !error &&
            filtered.map((session) => {
              const tagStyle = session.tag ? getTagStyle(session.tag) : null;
              const preview = session.messages?.[0]?.content ?? session.title;
              const dateText = formatDate(session.updatedAt);
              const msgCount = session.messages?.length ?? 0;

              return (
                <div
                  key={session.id}
                  onClick={() => openChat(session.id)}
                  className="bg-white border border-[#e2e8f0] rounded-[12px] px-[20px] py-[16px] flex items-center gap-[16px] hover:border-[#4f46e5] hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="bg-[#eef2ff] rounded-[10px] size-[44px] shrink-0 flex items-center justify-center">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 24 24">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-[8px] mb-[4px]">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[15px] truncate">
                        {session.title}
                      </p>
                      {session.tag && tagStyle && (
                        <span
                          className="px-[8px] py-[2px] rounded-full font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[11px] shrink-0"
                          style={{ background: tagStyle.bg, color: tagStyle.text }}
                        >
                          {session.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] truncate">
                      {preview}
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#cbd5e1] text-[12px] mt-[4px]">
                      {dateText} · {msgCount} {msgCount === 1 ? "message" : "messages"}
                    </p>
                  </div>
                  <div className="flex items-center gap-[8px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openChat(session.id);
                      }}
                      className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[14px] py-[7px] rounded-[7px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer"
                    >
                      Resume
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleDelete(session.id, e)}
                      className="border border-[#e2e8f0] text-[#94a3b8] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[14px] py-[7px] rounded-[7px] hover:border-red-300 hover:text-red-500 transition-colors bg-white cursor-pointer"
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
  );
}
