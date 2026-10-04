import { useState } from "react";
import svgPaths from "@/imports/02Register/svg-0ysdc4rwcd";

function VisualPanel() {
  return (
    <div className="hidden lg:flex flex-col items-start justify-between p-[64px] self-stretch shrink-0 w-[45%] max-w-[600px] bg-gradient-to-br from-[#4f46e5] to-[#1e1b4b]">
      {/* Brand */}
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
      {/* Center */}
      <div className="flex flex-col gap-[24px]">
        <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[56px] text-[48px] text-white">Enterprise Document Intelligence</p>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] text-[#e2e8f0] text-[16px]">{"Instantly query your organization's entire knowledge base. RAG-driven answers backed with reliable page references and text snippets."}</p>
      </div>
      {/* Badge */}
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

function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  hint,
  rightSlot,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  hint?: string;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px] tracking-[-0.084px]">{label}</p>
      <div className="bg-white min-h-[46px] relative rounded-[8px] focus-within:ring-2 focus-within:ring-[#4f46e5] transition-shadow">
        <div className="flex items-center p-[12px] gap-[10px] min-h-[inherit] size-full">
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="flex-1 min-w-0 bg-transparent outline-none font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[15px] placeholder:text-[#94a3b8]"
          />
          {rightSlot}
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] inset-0 pointer-events-none rounded-[8px]" />
      </div>
      {hint && <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[12px]">{hint}</p>}
    </div>
  );
}

interface RegisterProps {
  onLogin?: () => void;
  onRegister?: (name: string, email: string, password: string, role: string) => void;
}

export default function Register({ onLogin, onRegister }: RegisterProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const EyeIcon = ({ active }: { active: boolean }) => (
    <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
      <path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke={active ? "#4f46e5" : "#94a3b8"} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="10" r="2.5" stroke={active ? "#4f46e5" : "#94a3b8"} strokeWidth="1.5" />
    </svg>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password.length < 12) {
      setError("Password must be at least 12 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setSuccess(true);
    onRegister?.(name, email, password, role);
  };

  return (
    <div className="bg-[#f8fafc] flex items-stretch size-full">
      <VisualPanel />

      <div className="bg-white flex-1 overflow-y-auto flex flex-col items-center justify-center py-[40px] px-[32px]">
        {success ? (
          <div className="flex flex-col gap-[16px] w-full max-w-[400px] items-center text-center">
            <div className="bg-[#eef2ff] rounded-full p-[16px]">
              <svg className="size-[32px]" fill="none" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[22px]">Account Created!</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px]">Your account has been registered. An administrator will activate it shortly.</p>
            <button
              onClick={onLogin}
              className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] py-[12px] px-[24px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer w-full"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-[14px] w-full max-w-[400px]">
            {/* Header */}
            <div className="flex flex-col gap-[6px] mb-[4px]">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[24px] tracking-[-0.288px]">Create an account</p>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px] leading-[1.5]">Register with your corporate email to get started.</p>
            </div>

            {/* Full Name */}
            <InputField
              label="Full Name"
              type="text"
              value={name}
              onChange={setName}
              placeholder="Sarah Jenkins"
            />

            {/* Email */}
            <InputField
              label="Enterprise Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="you@enterprise.com"
            />

            {/* Password */}
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={setPassword}
              placeholder="••••••••••••"
              hint="Must be at least 12 characters"
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="shrink-0 border-none bg-transparent p-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                >
                  <EyeIcon active={showPassword} />
                </button>
              }
            />

            {/* Confirm Password */}
            <InputField
              label="Confirm Password"
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={setConfirmPassword}
              placeholder="••••••••••••"
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="shrink-0 border-none bg-transparent p-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
                >
                  <EyeIcon active={showConfirm} />
                </button>
              }
            />

            {/* System Role */}
            <div className="flex flex-col gap-[6px]">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px] tracking-[-0.084px]">System Role</p>
              <div className="bg-white min-h-[46px] relative rounded-[8px] focus-within:ring-2 focus-within:ring-[#4f46e5] transition-shadow">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-[46px] px-[12px] bg-transparent outline-none font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[15px] appearance-none cursor-pointer rounded-[8px]"
                >
                  <option value="employee">Employee (RAG User)</option>
                  <option value="admin">Administrator</option>
                </select>
                <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
                  <svg className="size-[18px]" fill="none" viewBox="0 0 20 20">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <div aria-hidden className="absolute border border-[#cbd5e1] inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-red-500">{error}</p>
            )}

            {/* CTA */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4f46e5] flex items-center justify-center py-[14px] px-[16px] rounded-[8px] w-full hover:bg-[#4338ca] active:bg-[#3730a3] transition-colors disabled:opacity-70 cursor-pointer border-none mt-[4px]"
            >
              {loading ? (
                <span className="flex items-center gap-2 font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] text-white">
                  <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Creating account…
                </span>
              ) : (
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] text-white tracking-[-0.1px]">Create Account</p>
              )}
            </button>

            {/* Sign in link */}
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#475569] text-center w-full">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onLogin}
                className="text-[#4f46e5] hover:underline bg-transparent border-none p-0 cursor-pointer font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold"
              >
                Log in
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
