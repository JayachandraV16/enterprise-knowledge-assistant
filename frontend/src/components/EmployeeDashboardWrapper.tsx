import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { chatService } from "@/services/chatService";
import { getErrorMessage } from "@/services/api";
import type { Conversation } from "@/types";
import EmployeeDashboard from "@/imports/04EmployeeDashboard/index";

interface Props {
  navigate?: (page: string) => void;
  userName?: string;
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

export default function EmployeeDashboardWrapper({ navigate: propNavigate, userName: propUserName }: Props) {
  const routerNavigate = useNavigate();
  const navigate = propNavigate ?? routerNavigate;
  const { user, logout } = useAuth();
  const userName = propUserName ?? user?.name ?? "Employee";

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadHistory = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await chatService.getHistory("employee");
      setConversations(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleNav = (target: string) => {
    if (propNavigate) {
      propNavigate(target);
    } else {
      if (target === "employeeChat" || target === "chat") {
        routerNavigate("/chat");
      } else if (target === "history") {
        routerNavigate("/history");
      } else if (target === "settings") {
        routerNavigate("/settings");
      } else if (target === "dashboard" || target === "employeeDashboard") {
        routerNavigate("/dashboard");
      } else {
        routerNavigate(target.startsWith("/") ? target : `/${target}`);
      }
    }
  };

  // Latest 3 conversations from service data
  const latestConversations = conversations.slice(0, 3);

  return (
    <div className="size-full relative">
      <EmployeeDashboard />

      {/* Sidebar nav overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ display: "none" }}
      >
        {/* Brand / Logo -> Dashboard */}
        <button
          onClick={() => handleNav("dashboard")}
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
          onClick={() => handleNav("chat")}
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
          onClick={() => handleNav("chat")}
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

        {/* History nav */}
        <button
          onClick={() => handleNav("history")}
          aria-label="History"
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

        {/* Settings nav */}
        <button
          onClick={() => handleNav("settings")}
          aria-label="Settings"
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

        {/* Logout button at bottom of sidebar */}
        <button
          onClick={() => {
            logout();
            routerNavigate("/login");
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

      {/* Dynamic Content Overlay */}
      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Topbar */}
        <div className="bg-white border-b border-[#e2e8f0] px-[32px] py-[24px] flex items-center justify-between shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[22px] tracking-[-0.22px]">
              Hello, {userName.split(" ")[0]}!
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              Search your enterprise knowledge base with offline AI assistance
            </p>
          </div>
          <button
            onClick={() => handleNav("chat")}
            className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-[18px] py-[10px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer flex items-center gap-[8px]"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 2C6.5 2 4 4.5 4 7.5c0 2 1.2 3.8 3 4.7l-.5 3.3 2.8-2c.2 0 .5.01.7.01 3.5 0 6-2.5 6-5.5S13.5 2 10 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Ask AI Assistant
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[28px] flex flex-col gap-[28px]">
          {/* Quick Actions Row: "New Chat" -> /chat, "View History" -> /history */}
          <div className="flex flex-col gap-[16px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px] tracking-[-0.16px]">
              Quick Actions
            </p>
            <div className="grid grid-cols-3 gap-[20px]">
              {/* "New Chat" -> /chat */}
              <div
                onClick={() => handleNav("chat")}
                className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col justify-between gap-[16px] hover:border-[#4f46e5] hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex flex-col gap-[12px]">
                  <div className="bg-[#eef2ff] rounded-[8px] size-[36px] flex items-center justify-center">
                    <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                      <path d="M10 2C6.5 2 4 4.5 4 7.5c0 2 1.2 3.8 3 4.7l-.5 3.3 2.8-2c.2 0 .5.01.7.01 3.5 0 6-2.5 6-5.5S13.5 2 10 2z" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px]">
                      New Chat
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px] leading-[1.6] mt-[4px]">
                      Ask any question grounded in your organization's documents.
                    </p>
                  </div>
                </div>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#4f46e5] text-[13px] group-hover:underline flex items-center gap-[4px]">
                  Start conversation →
                </span>
              </div>

              {/* "View History" -> /history */}
              <div
                onClick={() => handleNav("history")}
                className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col justify-between gap-[16px] hover:border-[#4f46e5] hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex flex-col gap-[12px]">
                  <div className="bg-[#eef2ff] rounded-[8px] size-[36px] flex items-center justify-center">
                    <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 6v4l3 3" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px]">
                      View History
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px] leading-[1.6] mt-[4px]">
                      Review previous conversations, answers, and source citations.
                    </p>
                  </div>
                </div>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#4f46e5] text-[13px] group-hover:underline flex items-center gap-[4px]">
                  Browse history ({conversations.length}) →
                </span>
              </div>

              {/* Knowledge Base */}
              <div
                onClick={() => handleNav("chat")}
                className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col justify-between gap-[16px] hover:border-[#4f46e5] hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex flex-col gap-[12px]">
                  <div className="bg-[#eef2ff] rounded-[8px] size-[36px] flex items-center justify-center">
                    <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                      <path d="M4 4h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM4 9h12" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px]">
                      Document Topics
                    </p>
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px] leading-[1.6] mt-[4px]">
                      Quickly search Security, HR, and Financial policy manuals.
                    </p>
                  </div>
                </div>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#4f46e5] text-[13px] group-hover:underline flex items-center gap-[4px]">
                  Explore topics →
                </span>
              </div>
            </div>
          </div>

          {/* Recent Conversations from chatService.getHistory(): latest 3 */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px] tracking-[-0.16px]">
                Recent Conversations
              </p>
              {conversations.length > 0 && (
                <button
                  onClick={() => handleNav("history")}
                  className="text-[#4f46e5] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
                >
                  View all ({conversations.length})
                </button>
              )}
            </div>

            {/* Error state with Retry */}
            {error && (
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-[10px] p-[16px] flex items-center justify-between text-[#dc2626]">
                <span className="text-[14px]">{error}</span>
                <button
                  onClick={loadHistory}
                  className="px-[12px] py-[4px] bg-[#dc2626] text-white rounded-[6px] text-[12px] font-medium border-none cursor-pointer"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Loading Skeleton */}
            {loading && (
              <div className="flex flex-col gap-[12px]">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-white border border-[#e2e8f0] rounded-[12px] p-[20px] flex items-center justify-between animate-pulse">
                    <div className="space-y-2 w-1/2">
                      <div className="h-4 bg-[#f1f5f9] rounded w-3/4" />
                      <div className="h-3 bg-[#f1f5f9] rounded w-1/3" />
                    </div>
                    <div className="h-8 bg-[#f1f5f9] rounded w-20" />
                  </div>
                ))}
              </div>
            )}

            {/* Empty State when none */}
            {!loading && !error && latestConversations.length === 0 && (
              <div className="bg-white border border-[#e2e8f0] rounded-[16px] py-[48px] px-[24px] flex flex-col items-center justify-center gap-[12px] text-center">
                <svg className="size-[40px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[15px]">
                  No conversations yet
                </p>
                <button
                  onClick={() => handleNav("chat")}
                  className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[13px] px-[16px] py-[8px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer mt-[4px]"
                >
                  Start your first conversation
                </button>
              </div>
            )}

            {/* Conversations list: each linking to /chat?conversation=<id> */}
            {!loading &&
              !error &&
              latestConversations.map((conv) => {
                const msgCount = conv.messages?.length ?? 0;
                return (
                  <div
                    key={conv.id}
                    onClick={() => routerNavigate(`/chat?conversation=${encodeURIComponent(conv.id)}`)}
                    className="bg-white border border-[#e2e8f0] rounded-[12px] px-[20px] py-[16px] flex items-center justify-between gap-[16px] hover:border-[#4f46e5] hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-[8px] mb-[4px]">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[15px] truncate">
                          {conv.title}
                        </p>
                        {conv.tag && (
                          <span className="bg-[#eef2ff] text-[#4f46e5] text-[11px] font-medium px-[8px] py-[2px] rounded-full shrink-0">
                            {conv.tag}
                          </span>
                        )}
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[12px]">
                        {formatDate(conv.updatedAt)} • {msgCount} {msgCount === 1 ? "message" : "messages"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        routerNavigate(`/chat?conversation=${encodeURIComponent(conv.id)}`);
                      }}
                      className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[14px] py-[7px] rounded-[7px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer shrink-0"
                    >
                      Resume
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
