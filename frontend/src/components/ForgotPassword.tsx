import { useState } from "react";
import svgPaths from "@/imports/03ForgotPassword/svg-eb04k4wam4";

function VisualPanel() {
  return (
    <div className="hidden lg:flex flex-col items-start justify-between p-[64px] self-stretch shrink-0 w-[45%] max-w-[600px] bg-gradient-to-br from-[#4f46e5] to-[#1e1b4b]">
      <div className="flex gap-[12px] items-center">
        <div className="bg-[rgba(255,255,255,0.2)] flex items-center justify-center rounded-[10px] size-[40px]">
          <div className="relative size-[22px]">
            <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 22 22">
              <path d={svgPaths.p285cac00} stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[18px] text-white tracking-[-0.144px]">AI Knowledge Assistant</p>
      </div>
      <div className="flex flex-col gap-[24px]">
        <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[56px] text-[48px] text-white">Enterprise Document Intelligence</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[#e2e8f0] text-[16px]">{"Instantly query your organization's entire knowledge base. RAG-driven answers backed with reliable page references and text snippets."}</p>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="relative size-[20px]">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3ad10700} stroke="#A5B4FC" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
        <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#a5b4fc] text-[14px]">SOC2 Compliant • JWT Authentication • Encrypted at rest</p>
      </div>
    </div>
  );
}

interface ForgotPasswordProps {
  onBackToLogin?: () => void;
}

export default function ForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your enterprise email.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="bg-[#f8fafc] flex items-stretch size-full">
      <VisualPanel />

      <div className="bg-white flex-1 overflow-y-auto flex flex-col items-center justify-center py-[40px] px-[32px]">
        {sent ? (
          <div className="flex flex-col gap-[16px] w-full max-w-[400px] items-center text-center">
            <div className="bg-[#eef2ff] rounded-full p-[16px]">
              <svg className="size-[32px]" fill="none" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[22px]">Check your email</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px] leading-[1.6]">
              We sent a password reset link to <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b]">{email}</span>. Check your inbox and follow the instructions.
            </p>
            <button
              onClick={onBackToLogin}
              className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] py-[12px] px-[24px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer w-full"
            >
              Back to Login
            </button>
            <button
              type="button"
              onClick={() => { setSent(false); setEmail(""); }}
              className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
            >
              Didn't receive it? Try again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full max-w-[400px]">
            {/* Header */}
            <div className="flex flex-col gap-[6px] mb-[4px]">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[24px] tracking-[-0.288px]">Reset your password</p>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px] leading-[1.5]">{"Enter your enterprise email and we'll send you a reset link."}</p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[6px]">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px] tracking-[-0.084px]">Enterprise Email</p>
              <div className="bg-white min-h-[46px] relative rounded-[8px] focus-within:ring-2 focus-within:ring-[#4f46e5] transition-shadow">
                <div className="flex items-center p-[12px] gap-[10px] size-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@enterprise.com"
                    autoFocus
                    className="flex-1 min-w-0 bg-transparent outline-none font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[15px] placeholder:text-[#94a3b8]"
                  />
                </div>
                <div aria-hidden className="absolute border border-[#cbd5e1] inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-red-500 -mt-[8px]">{error}</p>
            )}

            {/* CTA */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4f46e5] flex items-center justify-center py-[14px] px-[16px] rounded-[8px] w-full hover:bg-[#4338ca] active:bg-[#3730a3] transition-colors disabled:opacity-70 cursor-pointer border-none"
            >
              {loading ? (
                <span className="flex items-center gap-2 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] text-white">
                  <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending…
                </span>
              ) : (
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] text-white tracking-[-0.1px]">Send Reset Link</p>
              )}
            </button>

            {/* Back to login */}
            <p className="text-center">
              <button
                type="button"
                onClick={onBackToLogin}
                className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] text-[14px] hover:underline bg-transparent border-none p-0 cursor-pointer"
              >
                ← Back to login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
