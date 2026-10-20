import { useState, useRef, useEffect, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { chatService } from "../services/chatService";
import { getErrorMessage } from "../services/api";
import { MAX_QUESTION_LENGTH } from "../utils/validators";
import type { ChatMessage } from "../types";
import AiChatbot from "@/imports/05AiChatbot/index";
import EmployeeDashboard from "@/imports/04EmployeeDashboard/index";
import { documentService } from "../services/documentService";
import svgPaths from "@/imports/05AiChatbot/svg-deu720djhi";

// Helper to ensure sources block is only rendered when sources exist and has at least one item
export function hasSources(msg?: { role?: string; sources?: unknown[] } | null): boolean {
  return Boolean(msg && msg.role === "assistant" && Array.isArray(msg.sources) && msg.sources.length > 0);
}
// variant="admin" uses AiChatbot import (admin sidebar) and preserves the Figma topbar (overlay starts at 64px).
// variant="employee" uses EmployeeDashboard import (employee sidebar) and includes its own topbar (overlay starts at 0).
export default function ChatWrapper({
  variant: propVariant,
  userName: propUserName,
}: {
  variant?: "admin" | "employee";
  userName?: string;
}) {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const variant = propVariant ?? (isAdmin ? "admin" : "employee");
  const userName = propUserName ?? user?.name;
  const BaseImport = variant === "employee" ? EmployeeDashboard : AiChatbot;
  const overlayTop = 0;

  const [searchParams, setSearchParams] = useSearchParams();
  const urlConvId = searchParams.get("conversation");

  const [conversationId, setConversationId] = useState<string | undefined>(
    urlConvId ?? undefined
  );
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleCopyChat = () => {
    if (messages.length === 0) {
      setToast("No messages to copy");
      setTimeout(() => setToast(null), 3000);
      return;
    }
    const text = messages
      .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n\n");
    navigator.clipboard.writeText(text);
    setToast("Conversation copied to clipboard!");
    setTimeout(() => setToast(null), 3000);
  };
  const [failedQuestion, setFailedQuestion] = useState<string | null>(null);
  const [collapsedSources, setCollapsedSources] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  // Resume thread when /chat?conversation=<id> is provided
  useEffect(() => {
    if (urlConvId) {
      setConversationId(urlConvId);
      chatService
        .getHistory()
        .then((history) => {
          const found = history.find((c) => c.id === urlConvId);
          if (found && found.messages) {
            setMessages(found.messages);
          }
        })
        .catch((err) => {
          setError(getErrorMessage(err));
        });
    } else {
      setConversationId(undefined);
      setMessages([]);
    }
  }, [urlConvId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = useCallback(
    async (overrideText?: string) => {
      const text = (overrideText ?? input).trim();
      if (!text || typing) return;

      if (text.length > MAX_QUESTION_LENGTH) {
        setError(`Question exceeds maximum length of ${MAX_QUESTION_LENGTH} characters.`);
        return;
      }

      setError(null);
      setFailedQuestion(null);

      if (!overrideText) {
        setInput("");
        if (textareaRef.current) textareaRef.current.style.height = "auto";
      }

      const userMsg: ChatMessage = {
        id: `u-${Date.now()}`,
        role: "user",
        content: text,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setTyping(true);

      try {
        const role = isAdmin ? "admin" : "employee";
        const reply = await chatService.ask(text, conversationId, role);
        setConversationId(reply.conversationId);
        setMessages((prev) => [...prev, reply.message]);
      } catch (err) {
        setError(getErrorMessage(err));
        setFailedQuestion(text);
      } finally {
        setTyping(false);
      }
    },
    [input, typing, conversationId]
  );
  const handleFileUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    e.target.value = "";

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setUploadStatus("Please select a PDF file.");
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    setUploadStatus("");

    try {
      await documentService.upload(file, setUploadProgress);
      setUploadStatus(`Uploaded successfully: ${file.name}`);
    } catch (err) {
      setUploadStatus(`Upload failed: ${getErrorMessage(err)}`);
    } finally {
      setUploading(false);
    }
  };
  const handleRetry = async () => {
    if (!failedQuestion || typing) return;
    const textToRetry = failedQuestion;
    setError(null);
    setTyping(true);

    try {
      const role = isAdmin ? "admin" : "employee";
      const reply = await chatService.ask(textToRetry, conversationId, role);
      setConversationId(reply.conversationId);
      setMessages((prev) => [...prev, reply.message]);
      setFailedQuestion(null);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setTyping(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
  };

  const toggleSources = (msgId: string) => {
    setCollapsedSources((prev) => ({
      ...prev,
      [msgId]: !prev[msgId],
    }));
  };

  const handleCopy = async (content: string, id: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = content;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const resetChat = () => {
    setConversationId(undefined);
    setMessages([]);
    setSearchParams({});
    setInput("");
    setError(null);
  };

  return (
    <div className="size-full relative">
      {/* Static import provides sidebar chrome; admin uses AiChatbot, employee uses EmployeeDashboard */}
      <BaseImport />

      {/* Sidebar navigation overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ display: "none" }}
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
          onClick={resetChat}
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
          onClick={resetChat}
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
            {/* Settings nav for admin */}
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

      {/* Interactive overlay: for admin starts below topbar (64px), for employee covers full right side */}
      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: overlayTop, bottom: 0, zIndex: 5 }}
      >
        {/* Interactive Topbar for both Admin and Employee */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[16px] shrink-0">
          <div className="flex flex-col gap-[2px] min-w-0">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[18px] tracking-[-0.18px] truncate">
              {messages.length > 0 ? (messages[0]?.content ? messages[0].content.slice(0, 50) : "AI Knowledge Chat") : "AI Knowledge Chat"}
            </p>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[12px] tracking-[-0.06px]">
              {messages.length > 0 ? `Active conversation • ${messages.length} ${messages.length === 1 ? "message" : "messages"}` : "Ask anything about your organization's documents"}
            </p>
          </div>

          {/* Topbar Right Action Buttons */}
          <div className="flex items-center gap-[12px] shrink-0">
            <button
              type="button"
              onClick={handleCopyChat}
              title="Copy conversation"
              aria-label="Copy conversation"
              className="size-[40px] rounded-full border border-[#cbd5e1] flex items-center justify-center bg-white text-[#475569] hover:bg-[#f8fafc] hover:text-[#4f46e5] hover:border-[#4f46e5] transition-colors cursor-pointer"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p15634280} fill="currentColor" />
              </svg>
            </button>


          </div>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div className="absolute top-[72px] right-[32px] z-50 bg-[#1e293b] text-white px-[16px] py-[10px] rounded-[8px] shadow-lg flex items-center gap-[10px] text-[13px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
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

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[24px] flex flex-col gap-[16px]">
          {messages.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center gap-[20px] text-center py-[48px]">
              <div className="bg-[#eef2ff] rounded-[20px] p-[24px]">
                <svg className="size-[48px] mx-auto" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    stroke="#4f46e5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[22px]">
                  {userName ? `Hello, ${userName.split(" ")[0]}! Ask anything about your documents` : "Ask anything about your documents"}
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px] max-w-[400px] leading-[1.6]">
                  Your question will be answered with source references from your knowledge base.
                </p>
              </div>
              <div className="flex flex-wrap gap-[8px] justify-center max-w-[480px]">
                {["What is the MFA policy?", "How many annual leave days?", "Expense reimbursement rules?"].map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => {
                      setInput(q);
                      textareaRef.current?.focus();
                    }}
                    className="bg-white border border-[#e2e8f0] rounded-[8px] px-[12px] py-[8px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#475569] text-[13px] hover:border-[#4f46e5] hover:text-[#4f46e5] transition-colors cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-[12px] ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="bg-[#4f46e5] rounded-full size-[32px] shrink-0 flex items-center justify-center mt-[2px]">
                  <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
                    <path d="M10 2C6.5 2 4 4.5 4 7.5c0 2 1.2 3.8 3 4.7l-.5 3.3 2.8-2c.2 0 .5.01.7.01 3.5 0 6-2.5 6-5.5S13.5 2 10 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <div className="flex flex-col gap-[8px] max-w-[68%]">
                <div
                  className={`px-[16px] py-[12px] rounded-[12px] ${
                    msg.role === "user"
                      ? "bg-[#4f46e5] rounded-br-[4px]"
                      : "bg-white border border-[#e2e8f0] rounded-bl-[4px]"
                  }`}
                >
                  <p
                    className={`font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[14px] leading-[1.65] whitespace-pre-wrap ${
                      msg.role === "user" ? "text-white" : "text-[#1e293b]"
                    }`}
                  >
                    {msg.content}
                  </p>
                </div>

                {/* Assistant Copy Answer Button */}
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-[6px]">
                    <button
                      type="button"
                      onClick={() => handleCopy(msg.content, msg.id)}
                      className="inline-flex items-center gap-[4px] text-[11px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] hover:text-[#4f46e5] transition-colors bg-transparent border-none p-0 cursor-pointer"
                      title="Copy answer"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <svg className="size-[13px] text-[#16a34a]" fill="none" viewBox="0 0 20 20">
                            <path d="M4 10l4 4L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="text-[#16a34a]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg className="size-[13px]" fill="none" viewBox="0 0 20 20">
                            <rect x="6" y="6" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M4 12V4a2 2 0 012-2h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          <span>Copy answer</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Collapsible sources: only render if sources exist and are non-empty */}
                {hasSources(msg) && (
                  <div className="flex flex-col gap-[6px]">
                    <button
                      type="button"
                      onClick={() => toggleSources(msg.id)}
                      className="inline-flex items-center gap-[6px] text-[12px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] hover:text-[#4338ca] transition-colors cursor-pointer w-fit bg-transparent border-none p-0"
                    >
                      <svg
                        className={`size-[13px] transition-transform duration-200 ${
                          collapsedSources[msg.id] ? "-rotate-90" : "rotate-0"
                        }`}
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>
                        {msg.sources.length} {msg.sources.length === 1 ? "source reference" : "source references"}
                      </span>
                    </button>

                    {!collapsedSources[msg.id] && (
                      <div className="flex flex-col gap-[6px]">
                        {msg.sources.map((src, i) => (
                          <div
                            key={i}
                            className="bg-[#eef2ff] border border-[#c7d2fe] rounded-[8px] px-[12px] py-[10px] flex items-start gap-[8px]"
                          >
                            <svg className="size-[14px] shrink-0 mt-[1px]" fill="none" viewBox="0 0 20 20">
                              <path d="M7 4H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-2M7 4a2 2 0 012-2h2a2 2 0 012 2M7 4h6" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div>
                              <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#4f46e5] text-[12px]">
                                {src.documentName}
                                {src.page != null ? ` · Page ${src.page}` : ""}
                              </p>
                              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[11px] leading-[1.5] mt-[2px]">
                                "{src.snippet}"
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {typing && (
            <div className="flex gap-[12px] justify-start">
              <div className="bg-[#4f46e5] rounded-full size-[32px] shrink-0 flex items-center justify-center">
                <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
                  <path d="M10 2C6.5 2 4 4.5 4 7.5c0 2 1.2 3.8 3 4.7l-.5 3.3 2.8-2c.2 0 .5.01.7.01 3.5 0 6-2.5 6-5.5S13.5 2 10 2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="bg-white border border-[#e2e8f0] rounded-[12px] rounded-bl-[4px] px-[16px] py-[14px] flex items-center gap-[4px]">
                {[0, 150, 300].map((delay) => (
                  <div
                    key={delay}
                    className="size-[6px] rounded-full bg-[#94a3b8] animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Inline Error Message with Retry */}
          {error && (
            <div className="bg-[#fef2f2] border border-[#fecaca] rounded-[10px] px-[16px] py-[12px] flex items-center justify-between gap-[12px] text-[#dc2626]">
              <div className="flex items-center gap-[8px] text-[13px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
                <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d="M10 9v4m0 3h.01M10 2a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>{error}</span>
              </div>
              {failedQuestion && (
                <button
                  type="button"
                  onClick={handleRetry}
                  disabled={typing}
                  className="px-[12px] py-[4px] bg-[#dc2626] text-white rounded-[6px] text-[12px] font-['Plus_Jakarta_Sans:Medium',sans-serif] hover:bg-[#b91c1c] transition-colors border-none cursor-pointer disabled:opacity-50"
                >
                  Retry
                </button>
              )}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="bg-white border-t border-[#e2e8f0] px-[24px] py-[20px] shrink-0">
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-[12px] flex items-end gap-[12px] px-[16px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="shrink-0 rounded-lg border border-[#cbd5e1] px-3 py-2 text-sm text-[#475569] hover:border-[#4f46e5] disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "Attach PDF"}
            </button>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={autoResize}
              onKeyDown={handleKey}
              placeholder="Ask about your enterprise documents..."
              rows={1}
              maxLength={MAX_QUESTION_LENGTH}
              className="flex-1 resize-none bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8] leading-[1.6] overflow-hidden"
              style={{ maxHeight: 120 }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || input.trim().length > MAX_QUESTION_LENGTH || typing}
              className="bg-[#4f46e5] rounded-full size-[40px] shrink-0 flex items-center justify-center hover:bg-[#4338ca] active:bg-[#3730a3] transition-colors disabled:opacity-40 cursor-pointer border-none mb-[1px]"
              title="Send question"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                <path d="M3 10l14-7-7 14V10H3z" fill="white" />
              </svg>
            </button>
          </div>
          {(uploading || uploadStatus) && (
            <p
              className={`mb-2 text-xs ${
                uploadStatus.startsWith("Upload failed")
                  ? "text-red-600"
                  : "text-[#4f46e5]"
              }`}
            >
              {uploading
                ? `Uploading PDF... ${uploadProgress}%`
                : uploadStatus}
            </p>
          )}
          <div className="flex items-center justify-between mt-[8px] px-[4px]">
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[11px]">
              Responses grounded in your organization&apos;s document library
            </p>
            {input.length > 800 && (
              <span
                className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] text-[11px] ${
                  input.length > MAX_QUESTION_LENGTH ? "text-red-500" : "text-[#94a3b8]"
                }`}
              >
                {input.length}/{MAX_QUESTION_LENGTH}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
