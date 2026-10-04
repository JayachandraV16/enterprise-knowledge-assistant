import svgPaths from "./svg-0eglxyxvnv";
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
        <g clipPath="url(#clip0_0_50)" id="icon">
          <path d={svgPaths.pea36900} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_50">
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
        <g clipPath="url(#clip0_0_58)" id="icon">
          <path d={svgPaths.p28c4aac0} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavHistory() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-History">
      <Icon1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">History</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_54)" id="icon">
          <path d={svgPaths.p2f7b5300} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_54">
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
      <Icon2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Settings</p>
    </div>
  );
}

function NavList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="nav-list">
      <NavChat />
      <NavHistory />
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
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px]">Sarah Jenkins</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] overflow-hidden relative shrink-0 text-[#94a3b8] text-[10px] text-ellipsis tracking-[-0.04px]">Support Specialist</p>
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
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">Welcome back, Sarah</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px]">Today is Monday, Jan 12, 2026. Query compliance materials or resume your workspace activities.</p>
    </div>
  );
}

function ActionIcon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="action-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_48)" id="action-icon">
          <path d={svgPaths.p2f5dd9f0} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_48">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrap() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="icon-wrap">
      <ActionIcon />
    </div>
  );
}

function IconHeader() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="icon-header">
      <IconWrap />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Start New Chat</p>
    </div>
  );
}

function ActionCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="action-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <IconHeader />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#475569] text-[14px] w-[min-content]">Initiate a clean, secure session with the RAG neural engine.</p>
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">New Chat</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Regular">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.0006" preserveAspectRatio="none" viewBox="0 0 12.0004 10.0006" width="12.0004">
                  <path d={svgPaths.p3a3d1b00} fill="#475569" id="Vector" stroke="#4F46E5" strokeWidth="0.0625" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
    </div>
  );
}

function ActionIcon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="action-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_43)" id="action-icon">
          <path d={svgPaths.p1ea8980} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrap1() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="icon-wrap">
      <ActionIcon1 />
    </div>
  );
}

function IconHeader1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="icon-header">
      <IconWrap1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Browse History</p>
    </div>
  );
}

function ActionCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="action-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <IconHeader1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#475569] text-[14px] w-[min-content]">Review your previous requests and audit compliance feedback.</p>
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">View History</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Regular">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.0006" preserveAspectRatio="none" viewBox="0 0 12.0004 10.0006" width="12.0004">
                  <path d={svgPaths.p3a3d1b00} fill="#475569" id="Vector" stroke="#4F46E5" strokeWidth="0.0625" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
    </div>
  );
}

function ActionIcon2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="action-icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_41)" id="action-icon">
          <path d={svgPaths.p109dab00} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_41">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconWrap2() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-start p-[8px] relative rounded-[8px] shrink-0" data-name="icon-wrap">
      <ActionIcon2 />
    </div>
  );
}

function IconHeader2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="icon-header">
      <IconWrap2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Public Security Guide</p>
    </div>
  );
}

function ActionCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="action-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <IconHeader2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-full relative shrink-0 text-[#475569] text-[14px] w-[min-content]">Read our verified corporate SOC2 isolation policy handbook.</p>
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">View Guide</p>
            <div className="relative shrink-0 size-[16px]" data-name="Format=Outline, Weight=Regular">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="10.0006" preserveAspectRatio="none" viewBox="0 0 12.0004 10.0006" width="12.0004">
                  <path d={svgPaths.p3a3d1b00} fill="#475569" id="Vector" stroke="#4F46E5" strokeWidth="0.0625" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
    </div>
  );
}

function ActionCards() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="action-cards">
      <ActionCard />
      <ActionCard1 />
      <ActionCard2 />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Quick-Actions">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] whitespace-nowrap">Quick Actions</p>
      <ActionCards />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[380px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px]">Department isolation compliance rules for RAG storage</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">2 hours ago • 8 messages</p>
    </div>
  );
}

function ChatItem() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="chat-item-0">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame1 />
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[380px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content]">Emergency incident response framework Q4 audit preparation</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">Yesterday • 14 messages</p>
    </div>
  );
}

function ChatItem1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="chat-item-1">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame2 />
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[380px] whitespace-nowrap" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] w-[min-content]">{`Database schema partition parameters & cluster architecture`}</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">Jan 08, 2026 • 22 messages</p>
    </div>
  );
}

function ChatItem2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-center justify-between p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="chat-item-2">
      <div aria-hidden className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame3 />
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConversationsList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="conversations-list">
      <ChatItem />
      <ChatItem1 />
      <ChatItem2 />
    </div>
  );
}

function RecentConversations() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[16px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="Recent-Conversations">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Recent Conversations</p>
      <ConversationsList />
    </div>
  );
}

function BadgeBullet() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="badge-bullet">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] whitespace-nowrap">Be Specific with Queries</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] min-w-full relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-[min-content]">Reference direct system protocols or policy document sections for maximum prompt match accuracy.</p>
    </div>
  );
}

function TipRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="tip-row">
      <BadgeBullet />
      <Frame4 />
    </div>
  );
}

function BadgeBullet1() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="badge-bullet">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] whitespace-nowrap">Review Referenced Pages</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] min-w-full relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-[min-content]">RAG verification links to pdf and word sections. Always double-check source snippets below responses.</p>
    </div>
  );
}

function TipRow1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="tip-row">
      <BadgeBullet1 />
      <Frame5 />
    </div>
  );
}

function BadgeBullet2() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="badge-bullet">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] whitespace-nowrap">Export Active Sessions</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] min-w-full relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-[min-content]">Save compliance checks directly to your workstation as markdown files for local records.</p>
    </div>
  );
}

function TipRow2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="tip-row">
      <BadgeBullet2 />
      <Frame6 />
    </div>
  );
}

function TipsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="tips-list">
      <TipRow />
      <TipRow1 />
      <TipRow2 />
    </div>
  );
}

function GettingStarted() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[380px]" data-name="Getting-Started">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Tips for Success</p>
      <TipsList />
    </div>
  );
}

function SplitSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px relative w-full" data-name="split-section">
      <RecentConversations />
      <GettingStarted />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px p-[40px] relative" data-name="Content-Area">
      <HeaderRow />
      <QuickActions />
      <SplitSection />
    </div>
  );
}

export default function Component04EmployeeDashboard() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="04 — Employee Dashboard">
      <Sidebar />
      <ContentArea />
    </div>
  );
}