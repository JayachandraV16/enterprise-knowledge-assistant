import svgPaths from "./svg-5x6i2msxys";
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
        <g clipPath="url(#clip0_0_191)" id="icon">
          <path d={svgPaths.pea36900} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_191">
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
      <Icon />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] tracking-[-0.084px]">Chat</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_196)" id="icon">
          <path d={svgPaths.p28c4aac0} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_196">
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
        <g clipPath="url(#clip0_0_201)" id="icon">
          <path d={svgPaths.p29f98300} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_201">
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
        <g clipPath="url(#clip0_0_198)" id="icon">
          <path d={svgPaths.p2948bc80} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_198">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavUsers() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Users">
      <Icon3 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-px relative text-[#4f46e5] text-[14px] tracking-[-0.084px]">Users</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_189)" id="icon">
          <path d={svgPaths.p2f7b5300} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_189">
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

function HeaderRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative whitespace-nowrap" data-name="header-row">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">User Management</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px]">Provision corporate accounts, configure access privileges, and monitor workspace security parameters.</p>
    </div>
  );
}

function Plus1() {
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

function AddUserCta() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Add-User-CTA">
      <Plus1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Add New User</p>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header-Row">
      <HeaderRow1 />
      <AddUserCta />
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-0">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[-0.06px] whitespace-nowrap">All Roles</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-1">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#475569] text-[12px] tracking-[-0.06px] whitespace-nowrap">Administrator</p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-2">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#475569] text-[12px] tracking-[-0.06px] whitespace-nowrap">Employee</p>
    </div>
  );
}

function FilterChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="filter-chips">
      <Chip />
      <Chip1 />
      <Chip2 />
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">Search user database...</p>
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

function FiltersBar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="filters-bar">
      <FilterChips />
      <div className="h-[48px] relative shrink-0 w-[240px]" data-name="Input Text">
        <div className="flex flex-col items-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[280px]">User</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[240px]">Email Address</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[160px]">Role</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[140px]">Status</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[140px]">Last Active</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-w-px relative text-[#94a3b8] text-[12px] text-right tracking-[-0.06px]">Actions</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarContainer1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="avatar-container">
      <Frame3 />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[280px]" data-name="user-profile">
      <AvatarContainer1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Alex Carter</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Admin</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="Frame">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Edit</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Deactivate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserRow() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="user-row-0">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <UserProfile />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis tracking-[-0.084px] w-[240px] whitespace-nowrap">a.carter@enterprise.com</p>
      <Frame4 />
      <Frame6 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 12, 2026</p>
      <ActionsCol />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarContainer2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="avatar-container">
      <Frame8 />
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[280px]" data-name="user-profile">
      <AvatarContainer2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Sarah Jenkins</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#475569] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Employee</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#f8fafc] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot1() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot1 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="Frame">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsCol1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Edit</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Deactivate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserRow1() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="user-row-1">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <UserProfile1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis tracking-[-0.084px] w-[240px] whitespace-nowrap">s.jenkins@enterprise.com</p>
      <Frame9 />
      <Frame11 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 12, 2026</p>
      <ActionsCol1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarContainer3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="avatar-container">
      <Frame13 />
    </div>
  );
}

function UserProfile2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[280px]" data-name="user-profile">
      <AvatarContainer3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Michael Vance</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#475569] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Employee</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#f8fafc] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot2() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot2 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="Frame">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame17 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsCol2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Edit</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Deactivate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserRow2() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="user-row-2">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <UserProfile2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis tracking-[-0.084px] w-[240px] whitespace-nowrap">m.vance@enterprise.com</p>
      <Frame14 />
      <Frame16 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 11, 2026</p>
      <ActionsCol2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarContainer4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="avatar-container">
      <Frame18 />
    </div>
  );
}

function UserProfile3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[280px]" data-name="user-profile">
      <AvatarContainer4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Elena Rostova</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Admin</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame20 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot3() {
  return <div className="absolute bg-[#475569] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot3 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#475569] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Inactive</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="Frame">
      <div className="bg-[#f8fafc] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsCol3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Edit</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Activate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserRow3() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="user-row-3">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <UserProfile3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis tracking-[-0.084px] w-[240px] whitespace-nowrap">e.rostova@enterprise.com</p>
      <Frame19 />
      <Frame21 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 08, 2026</p>
      <ActionsCol3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Frame">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgFrame} />
    </div>
  );
}

function AvatarContainer5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="avatar-container">
      <Frame23 />
    </div>
  );
}

function UserProfile4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[280px]" data-name="user-profile">
      <AvatarContainer5 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">David Kross</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#475569] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Employee</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#f8fafc] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame25 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot4() {
  return <div className="absolute bg-[#f43f5e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot4 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f43f5e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Suspended</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="Frame">
      <div className="bg-[#fff1f2] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame27 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionsCol4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">Edit</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Activate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserRow4() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="user-row-4">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <UserProfile4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis tracking-[-0.084px] w-[240px] whitespace-nowrap">d.kross@enterprise.com</p>
      <Frame24 />
      <Frame26 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 04, 2026</p>
      <ActionsCol4 />
    </div>
  );
}

function DocumentsTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="documents-table">
      <TableHeader />
      <UserRow />
      <UserRow1 />
      <UserRow2 />
      <UserRow3 />
      <UserRow4 />
    </div>
  );
}

function LibrarySection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Library-Section">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <FiltersBar />
      <DocumentsTable />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px p-[40px] relative" data-name="Content-Area">
      <HeaderRow />
      <LibrarySection />
    </div>
  );
}

export default function Component11UserManagement() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="11 — User Management">
      <Sidebar />
      <ContentArea />
    </div>
  );
}