import svgPaths from "./svg-0ysdc4rwcd";

function BrainCircuit() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="brain-circuit">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="brain-circuit">
          <path d={svgPaths.p285cac00} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-name="logo-container">
      <BrainCircuit />
    </div>
  );
}

function BrandTop() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="brand-top">
      <LogoContainer />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] text-white tracking-[-0.144px] whitespace-nowrap">AI Knowledge Assistant</p>
    </div>
  );
}

function VisualCenter() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="visual-center">
      <p className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold leading-[56px] relative shrink-0 text-[48px] text-white w-full">Enterprise Document Intelligence</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#e2e8f0] text-[16px] w-full">{`Instantly query your organization's entire knowledge base. RAG-driven answers backed with reliable page references and text snippets.`}</p>
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="lock">
          <path d={svgPaths.p3ad10700} id="Vector" stroke="#A5B4FC" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SecurityBadge() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="security-badge">
      <Lock />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#a5b4fc] text-[14px] tracking-[-0.084px] whitespace-nowrap">SOC2 Compliant • JWT Authentication • Encrypted at rest</p>
    </div>
  );
}

function VisualPanel() {
  return (
    <div className="bg-gradient-to-r content-stretch flex flex-col from-[#4f46e5] items-start justify-between p-[64px] relative self-stretch shrink-0 to-[#1e1b4b] w-[720px]" data-name="visual-panel">
      <BrandTop />
      <VisualCenter />
      <SecurityBadge />
    </div>
  );
}

function FormHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="form-header">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">Create an account</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#94a3b8] text-[14px]">Register with your corporate email to get started.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">Sarah Jenkins</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Full Name</p>
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame1 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">s.jenkins@enterprise.com</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Enterprise Email</p>
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame3 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">••••••••••••</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Password</p>
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame5 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">••••••••••••</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Confirm Password</p>
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame7 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="chevron-down">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white content-stretch flex h-[48px] items-center justify-between p-[12px] relative rounded-[8px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Employee (RAG User)</p>
      <ChevronDown />
    </div>
  );
}

function RoleSelectorGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="role-selector-group">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] whitespace-nowrap">System Role</p>
      <Dropdown />
    </div>
  );
}

function FormFields() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="form-fields">
      <div className="relative shrink-0 w-full" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame4 />
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium h-[18px] leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-full">Must be at least 12 characters</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
      <RoleSelectorGroup />
    </div>
  );
}

function RegisterCta() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center p-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Register-CTA">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[16px] text-white tracking-[-0.112px] whitespace-nowrap">Create Account</p>
    </div>
  );
}

function LinkRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="link-row">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#475569] text-[0px] tracking-[-0.084px] whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">{`Already have an account? `}</span>
        <a className="cursor-pointer leading-[20px] text-[#4f46e5] text-[14px]" href="https://example.com/login" target="_blank">
          <span>
            Log in
          </span>
        </a>
      </p>
    </div>
  );
}

function FormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[400px]" data-name="form-container">
      <FormHeader />
      <FormFields />
      <RegisterCta />
      <LinkRow />
    </div>
  );
}

function FormPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[120px] relative self-stretch shrink-0 w-[720px]" data-name="form-panel">
      <FormContainer />
    </div>
  );
}

export default function Component02Register() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="02 — Register">
      <VisualPanel />
      <FormPanel />
    </div>
  );
}