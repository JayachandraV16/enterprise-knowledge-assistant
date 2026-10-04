import { useState } from "react";
import svgPaths from "@/imports/01Login/svg-k8ilpwcooh";

function BrainCircuit() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g>
          <path d={svgPaths.p231b100} stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[40px]">
      <BrainCircuit />
    </div>
  );
}

function BrandTop() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <LogoContainer />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white tracking-[-0.144px] whitespace-nowrap">AI Knowledge Assistant</p>
    </div>
  );
}

function VisualCenter() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[56px] relative shrink-0 text-[48px] text-white w-full">Enterprise Document Intelligence</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#e2e8f0] text-[16px] w-full">{`Instantly query your organization's entire knowledge base. RAG-driven answers backed with reliable page references and text snippets.`}</p>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g>
          <path d={svgPaths.p3ad10700} stroke="#A5B4FC" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SecurityBadge() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Lock />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#a5b4fc] text-[14px] tracking-[-0.084px] whitespace-nowrap">SOC2 Compliant • JWT Authentication • Encrypted at rest</p>
    </div>
  );
}

function VisualPanel() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#4f46e5] items-start justify-between p-[64px] relative self-stretch shrink-0 to-[#1e1b4b] w-[720px]">
      <BrandTop />
      <VisualCenter />
      <SecurityBadge />
    </div>
  );
}

interface LoginProps {
  onLogin?: (
    email: string,
    password: string,
    role: "admin" | "employee"
  ) => { ok: boolean; error?: string } | undefined;
  onForgotPassword?: () => void;
  onRegister?: () => void;
}

// Demo credential hints shown below the form
const DEMO_HINTS = [
  { role: "Administrator", email: "admin@enterprise.com", password: "Admin@123" },
  { role: "Employee", email: "employee@enterprise.com", password: "Emp@123" },
];

export default function Login({ onLogin, onForgotPassword, onRegister }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "employee">("employee");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    const result = onLogin?.(email, password, role);
    if (result && !result.ok) {
      setError(result.error ?? "Login failed.");
    }
  };

  return (
    <div className="bg-[#f8fafc] flex items-stretch relative size-full">
      {/* Left visual panel */}
      <div className="hidden lg:flex flex-col items-start justify-between p-[64px] self-stretch shrink-0 w-[45%] max-w-[600px] bg-gradient-to-br from-[#4f46e5] to-[#1e1b4b]">
        <BrandTop />
        <VisualCenter />
        <SecurityBadge />
      </div>

      {/* Right form panel — scrollable so nothing clips */}
      <div className="bg-white flex-1 overflow-y-auto flex flex-col items-center justify-center py-[40px] px-[32px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[16px] w-full max-w-[400px]"
        >
          {/* Header */}
          <div className="flex flex-col gap-[6px] mb-[4px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] text-[#1e293b] text-[24px] tracking-[-0.288px]">Welcome back</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[14px] leading-[1.5]">Sign in to your enterprise RAG account to continue.</p>
          </div>

          {/* Role selector */}
          <div className="bg-[#f1f5f9] flex rounded-[8px] p-[4px] w-full">
            {(["employee", "admin"] as const).map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className={`flex-1 py-[8px] rounded-[6px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[13px] tracking-[-0.06px] transition-all cursor-pointer border-none ${
                  role === r ? "bg-white text-[#4f46e5] shadow-sm" : "bg-transparent text-[#94a3b8]"
                }`}
              >
                {r === "employee" ? "Employee" : "Administrator"}
              </button>
            ))}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px] tracking-[-0.084px]">Enterprise Email</p>
            <div className="bg-white min-h-[46px] relative rounded-[8px] focus-within:ring-2 focus-within:ring-[#4f46e5] transition-shadow">
              <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="flex gap-[10px] items-center p-[12px] w-full">
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-[9.36%_9.34%_12.43%_9.34%]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="15.6414" preserveAspectRatio="none" viewBox="0 0 16.2657 15.6414" width="16.2657">
                        <path d={svgPaths.p16626080} fill="#475569" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@enterprise.com"
                    className="flex-1 min-w-0 bg-transparent outline-none font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[15px] placeholder:text-[#94a3b8]"
                  />
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-[6px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px] tracking-[-0.084px]">Password</p>
            <div className="bg-white min-h-[46px] relative rounded-[8px] focus-within:ring-2 focus-within:ring-[#4f46e5] transition-shadow">
              <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
                <div className="flex gap-[10px] items-center p-[12px] w-full">
                  <div className="relative shrink-0 size-[18px]">
                    <div className="absolute inset-[9.36%_9.34%_12.43%_9.34%]">
                      <svg className="absolute block inset-0 size-full" fill="none" height="15.6414" preserveAspectRatio="none" viewBox="0 0 16.2657 15.6414" width="16.2657">
                        <path d={svgPaths.p16626080} fill="#475569" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="flex-1 min-w-0 bg-transparent outline-none font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#1e293b] text-[15px] placeholder:text-[#94a3b8]"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="shrink-0 size-[18px] flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity border-none bg-transparent p-0 cursor-pointer">
                    <svg className="size-full" fill="none" viewBox="0 0 16.25 16.25">
                      <path d={svgPaths.p3f760680} fill={showPassword ? "#4f46e5" : "#94a3b8"} />
                    </svg>
                  </button>
                </div>
              </div>
              <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex gap-[8px] items-center cursor-pointer select-none">
              <div
                onClick={() => setRemember(!remember)}
                className={`relative rounded-[4px] shrink-0 size-[16px] flex items-center justify-center cursor-pointer transition-colors ${remember ? "bg-[#4f46e5]" : "bg-white"}`}
              >
                {remember && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div aria-hidden className="absolute border border-[#cbd5e1] inset-0 pointer-events-none rounded-[4px]" />
              </div>
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#475569] text-[13px] whitespace-nowrap">Remember session</p>
            </label>
            <button type="button" onClick={onForgotPassword} className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] text-[13px] whitespace-nowrap hover:underline bg-transparent border-none p-0 cursor-pointer">
              Forgot password?
            </button>
          </div>

          {/* Demo credentials — above Login button */}
          <div className="w-full rounded-[8px] border border-[#e2e8f0] bg-[#f8fafc] p-[10px] flex flex-col gap-[4px]">
            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[10px] text-[#64748b] tracking-[0.5px] uppercase mb-[2px]">Demo Credentials — click to fill</p>
            {DEMO_HINTS.map((h) => (
              <button
                key={h.role}
                type="button"
                onClick={() => {
                  setEmail(h.email);
                  setPassword(h.password);
                  setRole(h.role === "Administrator" ? "admin" : "employee");
                }}
                className="text-left rounded-[6px] px-[8px] py-[5px] hover:bg-[#eef2ff] transition-colors cursor-pointer border-none bg-transparent w-full"
              >
                <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4f46e5]">{h.role}:</span>
                <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[11px] text-[#475569] ml-[6px]">{h.email} / {h.password}</span>
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-red-500">{error}</p>
          )}

          {/* Log In button */}
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
                Signing in…
              </span>
            ) : (
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[15px] text-white tracking-[-0.1px]">Log In</p>
            )}
          </button>

          {/* Create account — below Log In, as in Figma */}
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#475569] text-center w-full">
            {"Don't have an account? "}
            <button type="button" onClick={onRegister} className="text-[#4f46e5] hover:underline bg-transparent border-none p-0 cursor-pointer font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold">
              Create account
            </button>
          </p>

          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[10px] text-center tracking-[-0.04px]">Authorized access only. Unauthorized attempts are logged.</p>
        </form>
      </div>
    </div>
  );
}
