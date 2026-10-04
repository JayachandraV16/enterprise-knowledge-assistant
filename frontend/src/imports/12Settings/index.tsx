import svgPaths from "./svg-bysavdf21t";
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

function MessageCircle() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="message-circle">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_109)" id="message-circle">
          <path d={svgPaths.pea36900} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_109">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavChat() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Chat">
      <MessageCircle />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Chat</p>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="chart-bar">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="chart-bar">
          <path d={svgPaths.p3cc43580} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Dashboard">
      <ChartBar />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Dashboard</p>
    </div>
  );
}

function FolderOpen() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="folder-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="folder-open">
          <path d={svgPaths.p66f6680} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavDocuments() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Documents">
      <FolderOpen />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Documents</p>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="user">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="user">
          <path d={svgPaths.p61d9400} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavUsers() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Users">
      <User />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Users</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="settings">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="settings">
          <path d={svgPaths.p1abf4580} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavSettings() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Settings">
      <Settings />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-px relative text-[#4f46e5] text-[14px] tracking-[-0.084px]">Settings</p>
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
    <div className="bg-white content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative self-stretch shrink-0 w-[280px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
      <TopGroup />
      <UserFooter />
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="header-row">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">Settings</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px]">Configure your profile, security options, preferences, and workspace parameters.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[64px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[64px]" data-name="avatar-container">
      <Frame1 />
    </div>
  );
}

function BtnRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="btn-row">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Upload Image</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
    </div>
  );
}

function AvatarActions() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="avatar-actions">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] whitespace-nowrap">Alex Carter</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] whitespace-nowrap">Optimal square size 400x400px</p>
      <BtnRow />
    </div>
  );
}

function AvatarUploaderRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="avatar-uploader-row">
      <AvatarContainer1 />
      <AvatarActions />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">Alex Carter</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Display Name</p>
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">Security Ops Lead</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Work Role</p>
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

function FormRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="form-row">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame2 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsRow() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="actions-row">
      <div className="bg-[#1e293b] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Update Profile</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsCardProfile() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="settings-card-profile">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Profile Information</p>
      <AvatarUploaderRow />
      <FormRow />
      <ActionsRow />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">••••••••</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Current Password</p>
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

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">••••••••</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">New Password</p>
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame9 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">••••••••</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-full">Confirm New Password</p>
      <div className="bg-white min-h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="_InputTextBase">
        <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] p-[12px] relative size-full">
            <Frame11 />
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
    </div>
  );
}

function FormRow1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="form-row">
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame6 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame8 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] min-w-px relative" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsRow1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="actions-row">
      <div className="bg-[#1e293b] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Update Password</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsCardSecurity() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="settings-card-security">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Security</p>
      <FormRow1 />
      <ActionsRow1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px]">Email Notifications</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">Receive daily summary of system operations and file synchronization errors.</p>
    </div>
  );
}

function Toggle() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="Toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 40 24" width="40">
        <g id="Toggle">
          <rect fill="#4F46E5" height="24" rx="12" width="40" />
          <circle cx="28" cy="12" fill="white" id="Ellipse" r="10" />
        </g>
      </svg>
    </div>
  );
}

function PrefRow() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-name="pref-row-0">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Frame12 />
      <Toggle />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px]">Chat History Auto-Save</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">Persist your conversations to database for compliance auditing.</p>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]" data-name="Toggle">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 40 24" width="40">
        <g id="Toggle">
          <rect fill="#4F46E5" height="24" rx="12" width="40" />
          <circle cx="28" cy="12" fill="white" id="Ellipse" r="10" />
        </g>
      </svg>
    </div>
  );
}

function PrefRow1() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[12px] relative shrink-0 w-full" data-name="pref-row-1">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Frame13 />
      <Toggle1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px]">Application Theme</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px]">Choose your visual workspace mode.</p>
    </div>
  );
}

function ChipLight() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-light">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[-0.06px] whitespace-nowrap">Light Mode</p>
    </div>
  );
}

function ChipDark() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-dark">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#475569] text-[12px] tracking-[-0.06px] whitespace-nowrap">Dark Mode</p>
    </div>
  );
}

function ThemeChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="theme-chips">
      <ChipLight />
      <ChipDark />
    </div>
  );
}

function ThemeRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="theme-row">
      <Frame14 />
      <ThemeChips />
    </div>
  );
}

function PreferencesList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="preferences-list">
      <PrefRow />
      <PrefRow1 />
      <ThemeRow />
    </div>
  );
}

function SettingsCardPreferences() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="settings-card-preferences">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Preferences</p>
      <PreferencesList />
    </div>
  );
}

function ActionsRow2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="actions-row">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsCardDanger() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="settings-card-danger">
      <div aria-hidden className="absolute border border-[#ffe4e6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#f43f5e] text-[18px] tracking-[-0.144px] whitespace-nowrap">Danger Zone</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#e11d48] text-[14px] whitespace-nowrap">Permanently delete your enterprise account and disconnect all active indexing tokens. This operation is irreversible.</p>
      <ActionsRow2 />
    </div>
  );
}

function SettingsStack() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="settings-stack">
      <SettingsCardProfile />
      <SettingsCardSecurity />
      <SettingsCardPreferences />
      <SettingsCardDanger />
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px p-[40px] relative self-stretch" data-name="Dashboard-Content">
      <HeaderRow />
      <SettingsStack />
    </div>
  );
}

export default function Component12Settings() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="12 — Settings">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}