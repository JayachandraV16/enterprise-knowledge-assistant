import svgPaths from "./svg-5ucqmeqdg1";
import imgFrame from "./b8581a3a8f9a19b6eec05845c18e07081f487330.png";

function BrainCircuit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="brain-circuit">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="brain-circuit">
          <path d={svgPaths.p39039880} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="logo-container">
      <BrainCircuit />
    </div>
  );
}

function TextGroup() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="text-group">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px]">AI Knowledge</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">RAG ASSISTANT</p>
    </div>
  );
}

function LogoGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Logo-Group">
      <LogoContainer />
      <TextGroup />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="plus">
          <path d={svgPaths.p1529f7e0} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NewChatButton() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="New-Chat-Button">
      <Plus />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">New Conversation</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_129)" id="icon">
          <path d={svgPaths.pea36900} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_129">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavChat() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Chat">
      <Icon />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-px relative text-[#4f46e5] text-[14px] tracking-[-0.084px]">Chat</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_141)" id="icon">
          <path d={svgPaths.p28c4aac0} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_141">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Dashboard">
      <Icon1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Dashboard</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_132)" id="icon">
          <path d={svgPaths.p29f98300} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_132">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavDocuments() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Documents">
      <Icon2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Documents</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_121)" id="icon">
          <path d={svgPaths.p2948bc80} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_121">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavUsers() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Users">
      <Icon3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Users</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_143)" id="icon">
          <path d={svgPaths.p2f7b5300} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_143">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavSettings() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Settings">
      <Icon4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Settings</p>
    </div>
  );
}

function NavList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="nav-list">
      <NavChat />
      <NavDashboard />
      <NavDocuments />
      <NavUsers />
      <NavSettings />
    </div>
  );
}

function TopGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="top-group">
      <LogoGroup />
      <NewChatButton />
      <NavList />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarIndicator() {
  return (
    <div className="absolute bg-[#22c55e] bottom-0 right-0 rounded-[9999px] size-[10px]" data-name="avatar-indicator">
      <div aria-hidden className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[40px]" data-name="avatar-container">
      <Frame />
      <AvatarIndicator />
    </div>
  );
}

function ProfileDetails() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative whitespace-nowrap" data-name="profile-details">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px]">Alex Carter</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] overflow-hidden relative shrink-0 text-[#94a3b8] text-[10px] text-ellipsis tracking-[-0.04px]">Security Ops Lead</p>
    </div>
  );
}

function UserFooter() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pt-[20px] relative shrink-0 w-full" data-name="user-footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <AvatarContainer />
      <ProfileDetails />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start justify-between px-[24px] py-[32px] relative shrink-0 w-[280px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
      <TopGroup />
      <UserFooter />
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="header-row">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">Conversation History</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px]">Review, resume, or manage your previous AI Knowledge Assistant sessions.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Icon">
        <div className="absolute inset-[9.36%_9.34%_12.43%_9.34%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.6414" preserveAspectRatio="none" viewBox="0 0 16.2657 15.6414" width="16.2657">
            <path d={svgPaths.p16626080} fill="#475569" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">Search keywords or documents...</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame2 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="absolute inset-[8.3%]" data-name="calendar">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.344" preserveAspectRatio="none" viewBox="0 0 13.344 13.344" width="13.344">
        <g clipPath="url(#clip0_0_135)" id="calendar">
          <path d={svgPaths.p2bf24000} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_135">
            <rect fill="white" height="13.344" width="13.344" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Calendar() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="calendar">
      <Calendar1 />
    </div>
  );
}

function DateFilter() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0" data-name="Date-Filter">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Calendar />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Last 30 Days</p>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Filter-Bar">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
      <DateFilter />
    </div>
  );
}

function Dot() {
  return <div className="absolute bg-[#4f46e5] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">8 messages</p>
    </div>
  );
}

function FileIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="file-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="file-icon">
          <path d={svgPaths.p14096400} id="Vector" stroke="#4F46E5" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DocReference() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="doc-reference">
      <FileIcon />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">2026_SOC2_Audit.pdf</p>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="meta-row">
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame3 />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] whitespace-nowrap">Today, 10:24 AM</p>
      <DocReference />
    </div>
  );
}

function LeftDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[640px]" data-name="left-details">
      <MetaRow />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Department isolation compliance rules for RAG storage</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">Enforcement of role-based credentials mapped to specific index keys ensures absolute partition isolation...</p>
    </div>
  );
}

function RightActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="right-actions">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
      <div className="bg-[#1e293b] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Resume Conversation</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Bold">
              <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.5032" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032" width="12.5022">
                  <path d={svgPaths.p2d03eb00} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionRow() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="session-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <LeftDetails />
      <RightActions />
    </div>
  );
}

function Dot1() {
  return <div className="absolute bg-[#4f46e5] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot1 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">14 messages</p>
    </div>
  );
}

function FileIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="file-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="file-icon">
          <path d={svgPaths.p14096400} id="Vector" stroke="#4F46E5" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DocReference1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="doc-reference">
      <FileIcon1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">Incident_Framework_v2.docx</p>
    </div>
  );
}

function MetaRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="meta-row">
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] whitespace-nowrap">Yesterday, 4:15 PM</p>
      <DocReference1 />
    </div>
  );
}

function LeftDetails1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[640px]" data-name="left-details">
      <MetaRow1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Emergency incident response framework Q4 audit preparation</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">System alert latency metrics must maintain sub-second response parameters for all Class 1 outages...</p>
    </div>
  );
}

function RightActions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="right-actions">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
      <div className="bg-[#1e293b] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Resume Conversation</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Bold">
              <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.5032" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032" width="12.5022">
                  <path d={svgPaths.p2d03eb00} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionRow1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="session-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <LeftDetails1 />
      <RightActions1 />
    </div>
  );
}

function Dot2() {
  return <div className="absolute bg-[#4f46e5] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot2 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">4 messages</p>
    </div>
  );
}

function FileIcon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="file-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="file-icon">
          <path d={svgPaths.p14096400} id="Vector" stroke="#4F46E5" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DocReference2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="doc-reference">
      <FileIcon2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">Vendor_Assessment.xlsx</p>
    </div>
  );
}

function MetaRow2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="meta-row">
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] whitespace-nowrap">Jan 10, 2026, 2:30 PM</p>
      <DocReference2 />
    </div>
  );
}

function LeftDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[640px]" data-name="left-details">
      <MetaRow2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">{`Vendor accessibility verification criteria & onboarding guide`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">Security clearance protocols for third-party endpoints must adhere fully to SOC2 trust services criteria...</p>
    </div>
  );
}

function RightActions2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="right-actions">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
      <div className="bg-[#1e293b] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Resume Conversation</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Bold">
              <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.5032" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032" width="12.5022">
                  <path d={svgPaths.p2d03eb00} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionRow2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="session-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <LeftDetails2 />
      <RightActions2 />
    </div>
  );
}

function Dot3() {
  return <div className="absolute bg-[#4f46e5] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot3 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">22 messages</p>
    </div>
  );
}

function FileIcon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="file-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="file-icon">
          <path d={svgPaths.p14096400} id="Vector" stroke="#4F46E5" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function DocReference3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="doc-reference">
      <FileIcon3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">DB_Setup_Instructions.md</p>
    </div>
  );
}

function MetaRow3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="meta-row">
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] whitespace-nowrap">Jan 08, 2026, 11:12 AM</p>
      <DocReference3 />
    </div>
  );
}

function LeftDetails3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[640px]" data-name="left-details">
      <MetaRow3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">{`Database schema partition parameters & cluster architecture`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[min-content] whitespace-nowrap">Active-active primary partitions configured with multi-region backup replication layers across EU-West...</p>
    </div>
  );
}

function RightActions3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="right-actions">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
      <div className="bg-[#1e293b] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Resume Conversation</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Bold">
              <div className="absolute inset-[17.17%_10.92%_17.18%_10.94%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.5032" preserveAspectRatio="none" viewBox="0 0 12.5022 10.5032" width="12.5022">
                  <path d={svgPaths.p2d03eb00} fill="white" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionRow3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="session-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <LeftDetails3 />
      <RightActions3 />
    </div>
  );
}

function HistoryList() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-name="History-List">
      <SessionRow />
      <SessionRow1 />
      <SessionRow2 />
      <SessionRow3 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="buttons">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Previous</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Next</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Pagination">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Showing 1-4 of 28 conversations</p>
      <Buttons />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px p-[40px] relative" data-name="Content-Area">
      <HeaderRow />
      <FilterBar />
      <HistoryList />
      <Pagination />
    </div>
  );
}

export default function Component07ChatHistory() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="07 — Chat History">
      <Sidebar />
      <ContentArea />
    </div>
  );
}