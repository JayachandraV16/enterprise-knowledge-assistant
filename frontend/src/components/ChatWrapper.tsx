import { useState, useRef, useEffect } from "react";
import AiChatbot from "@/imports/05AiChatbot/index";
import EmployeeDashboard from "@/imports/04EmployeeDashboard/index";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: { title: string; page: number; snippet: string }[];
}

const AI_RESPONSES: { content: string; sources: { title: string; page: number; snippet: string }[] }[] = [
  {
    content: "Based on the Security Policy v2.3, all employees must enable multi-factor authentication (MFA) within 30 days of account creation. The policy mandates the use of authenticator apps rather than SMS-based OTPs for enhanced security.",
    sources: [{ title: "Security Policy v2.3", page: 14, snippet: "Multi-factor authentication must be enabled within 30 days of account creation..." }],
  },
  {
    content: "According to the HR Handbook Q4 2024, full-time employees are entitled to 25 days of annual leave per calendar year, accruing at 2.08 days per month. Leave must be approved by your line manager at least 2 weeks in advance for periods exceeding 5 consecutive days.",
    sources: [{ title: "HR Handbook Q4 2024", page: 31, snippet: "Annual leave entitlement: 25 days per calendar year for full-time employees..." }],
  },
  {
    content: "The Expense Reimbursement Policy requires original receipts for all claims above £25. Expenses must be submitted within 30 days of the transaction. Reimbursement is processed in the next payroll cycle following manager approval.",
    sources: [{ title: "Finance Policy 2024", page: 8, snippet: "Receipts required for all expenses exceeding £25. Submit within 30 days..." }],
  },
  {
    content: "Per the IT Asset Management Policy, all software must appear in the approved software catalog before installation on corporate devices. Unauthorized software installations are subject to disciplinary action under the Code of Conduct.",
    sources: [{ title: "IT Policy Manual", page: 22, snippet: "Only approved software from the organizational catalog may be installed on corporate devices..." }],
  },
  {
    content: "The Onboarding Guide specifies that new employees must complete: (1) IT security training in week 1, (2) compliance and ethics training in week 2, (3) role-specific training within 30 days, and a 30-day check-in with their line manager.",
    sources: [{ title: "Onboarding Guide v3", page: 3, snippet: "New hire training schedule — IT security, compliance, and role-specific modules required within first month..." }],
  },
];

let aiIdx = 0;

// variant="admin" uses AiChatbot import (admin sidebar) and preserves the Figma topbar (overlay starts at 64px).
// variant="employee" uses EmployeeDashboard import (employee sidebar) and includes its own topbar (overlay starts at 0).
export default function ChatWrapper({ variant = "admin", userName }: { variant?: "admin" | "employee"; userName?: string }) {
  const BaseImport = variant === "employee" ? EmployeeDashboard : AiChatbot;
  const overlayTop = variant === "employee" ? 0 : 64;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const send = async () => {
    const text = input.trim();
    if (!text || typing) return;
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setTyping(true);

    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 800));

    const resp = AI_RESPONSES[aiIdx % AI_RESPONSES.length];
    aiIdx++;
    setMessages((prev) => [...prev, { id: `a-${Date.now()}`, role: "assistant", ...resp }]);
    setTyping(false);
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

  return (
    <div className="size-full relative">
      {/* Static import provides sidebar chrome; admin uses AiChatbot, employee uses EmployeeDashboard */}
      <BaseImport />

      {/* Interactive overlay: for admin starts below topbar (64px), for employee covers full right side */}
      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: overlayTop, bottom: 0, zIndex: 5 }}
      >
        {/* Employee variant: custom topbar replacing the dashboard topbar */}
        {variant === "employee" && (
          <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[20px] shrink-0">
            <div className="flex flex-col gap-[2px]">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[18px] tracking-[-0.18px]">AI Chat</p>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px]">Ask anything about your organization's documents</p>
            </div>
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
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[22px]">{userName ? `Hello, ${userName.split(" ")[0]}! Ask anything about your documents` : "Ask anything about your documents"}</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px] max-w-[400px] leading-[1.6]">
                  Your question will be answered with source references from your knowledge base.
                </p>
              </div>
              <div className="flex flex-wrap gap-[8px] justify-center max-w-[480px]">
                {["What is the MFA policy?", "How many annual leave days?", "Expense reimbursement rules?"].map((q) => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); textareaRef.current?.focus(); }}
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

                {msg.role === "assistant" && msg.sources && msg.sources.length > 0 && (
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
                            {src.title} · Page {src.page}
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
            </div>
          ))}

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

          <div ref={bottomRef} />
        </div>

        {/* Input bar */}
        <div className="bg-white border-t border-[#e2e8f0] px-[24px] py-[20px] shrink-0">
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-[12px] flex items-end gap-[12px] px-[16px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={autoResize}
              onKeyDown={handleKey}
              placeholder="Ask about your enterprise documents..."
              rows={1}
              className="flex-1 resize-none bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8] leading-[1.6] overflow-hidden"
              style={{ maxHeight: 120 }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || typing}
              className="bg-[#4f46e5] rounded-full size-[40px] shrink-0 flex items-center justify-center hover:bg-[#4338ca] active:bg-[#3730a3] transition-colors disabled:opacity-40 cursor-pointer border-none mb-[1px]"
            >
              <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                <path d="M3 10l14-7-7 14V10H3z" fill="white" />
              </svg>
            </button>
          </div>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[11px] text-center mt-[8px]">
            Responses grounded in your organization&apos;s document library
          </p>
        </div>
      </div>
    </div>
  );
}
