import svgPaths from "./svg-gz15kh87ts";
import imgFrame from "./b8581a3a8f9a19b6eec05845c18e07081f487330.png";

function BrainCircuit() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="brain-circuit">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="brain-circuit">
          <path d={svgPaths.p1f5ec500} id="Vector" stroke="white" strokeLinecap="round" strokeWidth="2" />
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
        <g clipPath="url(#clip0_0_60)" id="message-circle">
          <path d={svgPaths.p16ccbb80} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_60">
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
          <path d={svgPaths.p3cc43580} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Dashboard">
      <ChartBar />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-px relative text-[#4f46e5] text-[14px] tracking-[-0.084px]">Dashboard</p>
    </div>
  );
}

function FolderOpen() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="folder-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="folder-open">
          <path d={svgPaths.p29ff9500} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
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
          <path d={svgPaths.p1f61bb80} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavSettings() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Settings">
      <Settings />
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
    <div className="bg-white content-stretch flex flex-col items-start justify-between px-[24px] py-[32px] relative self-stretch shrink-0 w-[280px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid inset-0 pointer-events-none" />
      <TopGroup />
      <UserFooter />
    </div>
  );
}

function HeaderLeft() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="header-left">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">Admin Dashboard</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px]">Monitor document synchronization, queries, and system events.</p>
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

function UploadNewCta() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Upload-New-CTA">
      <Plus1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Upload New</p>
    </div>
  );
}

function DashboardHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="dashboard-header">
      <HeaderLeft />
      <UploadNewCta />
    </div>
  );
}

function TrendContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trend-container">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] tracking-[-0.06px] whitespace-nowrap">+12.4%</p>
    </div>
  );
}

function Metrics() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="metrics">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#1e293b] text-[30px] tracking-[-0.39px] whitespace-nowrap">1,284</p>
      <TrendContainer />
    </div>
  );
}

function StatCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[12px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="stat-card-0">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.084px] whitespace-nowrap">Total Documents</p>
      <Metrics />
    </div>
  );
}

function TrendContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trend-container">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] tracking-[-0.06px] whitespace-nowrap">+4.8%</p>
    </div>
  );
}

function Metrics1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="metrics">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#1e293b] text-[30px] tracking-[-0.39px] whitespace-nowrap">3,412</p>
      <TrendContainer1 />
    </div>
  );
}

function StatCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[12px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="stat-card-1">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.084px] whitespace-nowrap">Total Users</p>
      <Metrics1 />
    </div>
  );
}

function TrendContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trend-container">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] tracking-[-0.06px] whitespace-nowrap">+18.2%</p>
    </div>
  );
}

function Metrics2() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="metrics">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#1e293b] text-[30px] tracking-[-0.39px] whitespace-nowrap">12.4K</p>
      <TrendContainer2 />
    </div>
  );
}

function StatCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[12px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="stat-card-2">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.084px] whitespace-nowrap">Queries Today</p>
      <Metrics2 />
    </div>
  );
}

function TrendContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="trend-container">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#ef4444] text-[12px] tracking-[-0.06px] whitespace-nowrap">-2.1%</p>
    </div>
  );
}

function Metrics3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="metrics">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#1e293b] text-[30px] tracking-[-0.39px] whitespace-nowrap">482</p>
      <TrendContainer3 />
    </div>
  );
}

function StatCard3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[12px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="stat-card-3">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[-0.084px] whitespace-nowrap">Active Sessions</p>
      <Metrics3 />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="stats-row">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
      <StatCard3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[260px]">File Name</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[100px]">Type</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[120px]">Upload Date</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-w-px relative text-[#94a3b8] text-[12px] tracking-[-0.06px]">Status</p>
    </div>
  );
}

function Dot() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Processed</p>
    </div>
  );
}

function StatusCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="status-col">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="row-0">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] w-[260px] whitespace-nowrap">2026_Marketing_Strategy.pdf</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">PDF</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[120px]">Jan 12, 2026</p>
      <StatusCol />
    </div>
  );
}

function Dot1() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot1 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Processed</p>
    </div>
  );
}

function StatusCol1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="status-col">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="row-1">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] w-[260px] whitespace-nowrap">Compliance_Standard_Guide.docx</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">DOCX</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[120px]">Jan 11, 2026</p>
      <StatusCol1 />
    </div>
  );
}

function Dot2() {
  return <div className="absolute bg-[#f59e0b] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot2 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f59e0b] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Processing</p>
    </div>
  );
}

function StatusCol2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="status-col">
      <div className="bg-[#fffbeb] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="row-2">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] w-[260px] whitespace-nowrap">Q4_Accounting_Dataset.csv</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">CSV</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[120px]">Jan 10, 2026</p>
      <StatusCol2 />
    </div>
  );
}

function Dot3() {
  return <div className="absolute bg-[#f43f5e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot3 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#f43f5e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Failed</p>
    </div>
  );
}

function StatusCol3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="status-col">
      <div className="bg-[#fff1f2] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="row-3">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] w-[260px] whitespace-nowrap">Legacy_Archive_Notes.pdf</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">PDF</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[120px]">Jan 09, 2026</p>
      <StatusCol3 />
    </div>
  );
}

function TableContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table-content">
      <TableHeader />
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function UploadsTableContainer() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_50px] flex-col gap-[20px] items-start min-w-px p-[24px] relative rounded-[16px]" data-name="uploads-table-container">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Recent Document Uploads</p>
      <TableContent />
    </div>
  );
}

function CloudLightning() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="cloud-lightning">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_45)" id="cloud-lightning">
          <path d={svgPaths.p341c1500} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_45">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActivityIcon() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="activity-icon">
      <CloudLightning />
    </div>
  );
}

function DetailsCol() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="details-col">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] w-full">User emma.w@company.com</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-full">searched SOC2 Compliance Guidelines</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] w-full">5m ago</p>
    </div>
  );
}

function Activity() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pb-[12px] relative shrink-0 w-full" data-name="activity-0">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <ActivityIcon />
      <DetailsCol />
    </div>
  );
}

function CloudLightning1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="cloud-lightning">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_45)" id="cloud-lightning">
          <path d={svgPaths.p341c1500} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_45">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActivityIcon1() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="activity-icon">
      <CloudLightning1 />
    </div>
  );
}

function DetailsCol1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="details-col">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] w-full">System Agent</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-full">processed Q4_Accounting_Dataset.csv successfully</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] w-full">12m ago</p>
    </div>
  );
}

function Activity1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pb-[12px] relative shrink-0 w-full" data-name="activity-1">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <ActivityIcon1 />
      <DetailsCol1 />
    </div>
  );
}

function CloudLightning2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="cloud-lightning">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_45)" id="cloud-lightning">
          <path d={svgPaths.p341c1500} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_45">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActivityIcon2() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="activity-icon">
      <CloudLightning2 />
    </div>
  );
}

function DetailsCol2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="details-col">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] w-full">User john.d@company.com</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-full">downloaded referenced doc 2026_SOC2_Audit.pdf</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] w-full">1h ago</p>
    </div>
  );
}

function Activity2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pb-[12px] relative shrink-0 w-full" data-name="activity-2">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <ActivityIcon2 />
      <DetailsCol2 />
    </div>
  );
}

function CloudLightning3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="cloud-lightning">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g clipPath="url(#clip0_0_45)" id="cloud-lightning">
          <path d={svgPaths.p341c1500} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_45">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ActivityIcon3() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="activity-icon">
      <CloudLightning3 />
    </div>
  );
}

function DetailsCol3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative" data-name="details-col">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#1e293b] text-[12px] tracking-[-0.06px] w-full">System Agent</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#475569] text-[10px] tracking-[-0.04px] w-full">failed indexing legacy_archive_corrupted.zip</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] w-full">2h ago</p>
    </div>
  );
}

function Activity3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pb-[12px] relative shrink-0 w-full" data-name="activity-3">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <ActivityIcon3 />
      <DetailsCol3 />
    </div>
  );
}

function ActivityFeedList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="activity-feed-list">
      <Activity />
      <Activity1 />
      <Activity2 />
      <Activity3 />
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[380px]" data-name="recent-activity">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">System Activity</p>
      <ActivityFeedList />
    </div>
  );
}

function DetailsSplit() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="details-split">
      <UploadsTableContainer />
      <RecentActivity />
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px p-[40px] relative self-stretch" data-name="Dashboard-Content">
      <DashboardHeader />
      <StatsRow />
      <DetailsSplit />
    </div>
  );
}

export default function Component08AdminDashboard() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="08 — Admin Dashboard">
      <Sidebar />
      <DashboardContent />
    </div>
  );
}