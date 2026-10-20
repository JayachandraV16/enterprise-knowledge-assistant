import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { documentService } from "@/services/documentService";
import { userService } from "@/services/userService";
import { chatService } from "@/services/chatService";
import { getErrorMessage } from "@/services/api";
import type { KnowledgeDocument, User, Conversation } from "@/types";
import AdminDashboard from "@/imports/08AdminDashboard/index";

export default function AdminDashboardWrapper({ navigate: propNavigate }: { navigate?: (page: string) => void }) {
  const routerNavigate = useNavigate();
  const navigate = propNavigate ?? routerNavigate;
  const { logout } = useAuth();

  const [docs, setDocs] = useState<KnowledgeDocument[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [docsData, usersData] = await Promise.all([
        documentService.list(),
        userService.list(),
      ]);
      setDocs(docsData);
      setUsers(usersData);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleNav = (target: string) => {
    if (propNavigate) {
      propNavigate(target);
    } else {
      routerNavigate(target.startsWith("/") ? target : `/${target}`);
    }
  };

  // Metrics computed dynamically from service data
  const totalDocs = docs.length;
  const processedDocs = docs.filter((d) => d.status === "PROCESSED").length;
  const processingDocs = docs.filter((d) => d.status === "PROCESSING").length;
  const failedDocs = docs.filter((d) => d.status === "FAILED").length;

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.active).length;

  return (
    <div className="size-full relative">
      <AdminDashboard />

      {/* Sidebar nav overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ display: "none" }}
      >
        {/* Brand / Logo -> Dashboard */}
        <button
          onClick={() => handleNav("/dashboard")}
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
          onClick={() => handleNav("/chat")}
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
          onClick={() => handleNav("/chat")}
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
          onClick={() => handleNav("/dashboard")}
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
          onClick={() => handleNav("/documents")}
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
          onClick={() => handleNav("/users")}
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
          onClick={() => handleNav("/settings")}
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

        {/* Logout button */}
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

      {/* Real Dynamic Content Overlay */}
      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Topbar / Header */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[24px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[24px] tracking-[-0.288px]">
              Admin Dashboard
            </p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[14px] mt-[2px]">
              Monitor document synchronization, queries, and system events.
            </p>
          </div>
          {/* Upload CTA navigates to /documents */}
          <button
            onClick={() => handleNav("/documents")}
            className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] px-[20px] py-[12px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer flex items-center gap-[8px]"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Upload New
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[28px] flex flex-col gap-[24px]">
          {/* Error State with Retry */}
          {error && (
            <div className="bg-[#fef2f2] border border-[#fecaca] rounded-[10px] p-[16px] flex items-center justify-between text-[#dc2626]">
              <div className="flex items-center gap-[8px] text-[14px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                  <path d="M10 9v4m0 3h.01M10 2a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>{error}</span>
              </div>
              <button
                onClick={loadData}
                className="px-[14px] py-[6px] bg-[#dc2626] text-white rounded-[6px] text-[13px] font-medium border-none cursor-pointer hover:bg-[#b91c1c]"
              >
                Retry
              </button>
            </div>
          )}

          {/* Stats Cards Row: Document and User counts from services */}
          <div className="grid grid-cols-4 gap-[20px]">
            {/* Total Documents */}
            <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
                Total Documents
              </p>
              <div className="flex items-end justify-between">
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[30px] leading-[38px]">
                  {loading ? "..." : totalDocs}
                </p>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#22c55e]">
                  {processedDocs} ready
                </span>
              </div>
            </div>

            {/* Document Processing Status */}
            <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
                Processing / Failed
              </p>
              <div className="flex items-end justify-between">
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[30px] leading-[38px]">
                  {loading ? "..." : `${processingDocs} / ${failedDocs}`}
                </p>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#d97706]">
                  {processingDocs > 0 ? "indexing" : "idle"}
                </span>
              </div>
            </div>

            {/* Total Users */}
            <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
                Total Users
              </p>
              <div className="flex items-end justify-between">
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[30px] leading-[38px]">
                  {loading ? "..." : totalUsers}
                </p>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4f46e5]">
                  accounts
                </span>
              </div>
            </div>

            {/* Active Users */}
            <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col gap-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
                Active Users
              </p>
              <div className="flex items-end justify-between">
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[30px] leading-[38px]">
                  {loading ? "..." : activeUsers}
                </p>
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#22c55e]">
                  enabled
                </span>
              </div>
            </div>
          </div>

          {/* Recent Knowledge Base Documents Table */}
          <div className="bg-white border border-[#e2e8f0] rounded-[16px] p-[24px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px]">
                Knowledge Documents Overview
              </p>
              <button
                onClick={() => handleNav("/documents")}
                className="text-[#4f46e5] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                View all ({docs.length})
              </button>
            </div>

            {loading ? (
              <div className="space-y-3 py-4 animate-pulse">
                <div className="h-6 bg-[#f1f5f9] rounded w-full" />
                <div className="h-6 bg-[#f1f5f9] rounded w-full" />
              </div>
            ) : docs.length === 0 ? (
              <div className="py-[32px] text-center text-[#94a3b8] text-[14px]">
                No documents uploaded yet.
              </div>
            ) : (
              <div className="divide-y divide-[#f1f5f9]">
                {docs.slice(0, 5).map((doc) => (
                  <div key={doc.id} className="py-[12px] flex items-center justify-between">
                    <div className="flex items-center gap-[10px] min-w-0">
                      <div className="bg-[#eef2ff] text-[#4f46e5] text-[11px] font-bold px-[8px] py-[3px] rounded">
                        {doc.fileType}
                      </div>
                      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[14px] truncate">
                        {doc.fileName}
                      </p>
                    </div>
                    <div className="flex items-center gap-[12px] shrink-0">
                      <span
                        className={`text-[12px] font-semibold px-[8px] py-[2px] rounded-full ${
                          doc.status === "PROCESSED"
                            ? "bg-[#dcfce7] text-[#16a34a]"
                            : doc.status === "PROCESSING"
                            ? "bg-[#fef3c7] text-[#d97706]"
                            : "bg-[#fee2e2] text-[#dc2626]"
                        }`}
                      >
                        {doc.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
