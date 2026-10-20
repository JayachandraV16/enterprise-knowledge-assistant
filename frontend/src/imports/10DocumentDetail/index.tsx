import svgPaths from "./svg-v1ewrhxva0";
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
        <g clipPath="url(#clip0_0_70)" id="message-circle">
          <path d={svgPaths.pea36900} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_70">
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
          <path d={svgPaths.p66f6680} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavDocuments() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-full" data-name="nav-Documents">
      <FolderOpen />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-px relative text-[#4f46e5] text-[14px] tracking-[-0.084px]">Documents</p>
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
          <path d={svgPaths.p1abf4580} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
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

function TitleGroup() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="title-group">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px] whitespace-nowrap">Compliance_Standard_Guide.docx</p>
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

function HeaderLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="header-left">
      <TitleGroup />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px] whitespace-nowrap">Document index status, processing pipeline metadata and extracted embedding slices.</p>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="header-actions">
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Re-process Document</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
      <div className="bg-[#f43f5e] relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white tracking-[-0.084px] whitespace-nowrap">Delete Document</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header-row">
      <HeaderLeft />
      <HeaderActions />
    </div>
  );
}

function MetadataCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_42px] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="metadata-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] whitespace-nowrap">FILE SIZE</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">1.8 MB</p>
    </div>
  );
}

function MetadataCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_42px] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="metadata-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] whitespace-nowrap">UPLOAD DATE</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Jan 11, 2026</p>
    </div>
  );
}

function MetadataCard2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_42px] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="metadata-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] whitespace-nowrap">UPLOADED BY</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">Alex Carter</p>
    </div>
  );
}

function MetadataCard3() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_42px] flex-col gap-[8px] items-start min-w-px p-[20px] relative rounded-[12px]" data-name="metadata-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] whitespace-nowrap">PROCESSING TIME</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#1e293b] text-[16px] tracking-[-0.112px] whitespace-nowrap">4.2 seconds</p>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="stats-row">
      <MetadataCard />
      <MetadataCard1 />
      <MetadataCard2 />
      <MetadataCard3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="table-header">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[120px]">Chunk ID</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[540px]">Preview Snippet Text</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[160px]">Character Count</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[160px]">Embedding Status</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-w-px relative text-[#94a3b8] text-[12px] text-right tracking-[-0.06px]">Dimensions</p>
    </div>
  );
}

function Dot1() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot1 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Generated</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function FileRow() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="file-row-0">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-[120px]">CHUNK-01</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[540px] whitespace-nowrap">{`"RAG architectures require proper boundary isolation between organizational departments to enforce granular document level ACLs."`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[160px]">128 chars</p>
      <Frame2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] text-right tracking-[-0.084px]">1536-dim</p>
    </div>
  );
}

function Dot2() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot2 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Generated</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function FileRow1() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="file-row-1">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-[120px]">CHUNK-02</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[540px] whitespace-nowrap">{`"Background worker queues process security standard manuals in background, parsing chunks into vectors and syncing with Postgres pgvector store."`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[160px]">144 chars</p>
      <Frame4 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] text-right tracking-[-0.084px]">1536-dim</p>
    </div>
  );
}

function Dot3() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot3 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Generated</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[160px]" data-name="Frame">
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

function FileRow2() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="file-row-2">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px] w-[120px]">CHUNK-03</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] overflow-hidden relative shrink-0 text-[#475569] text-[14px] text-ellipsis w-[540px] whitespace-nowrap">{`"Encryption guidelines state that all user session JWT tokens should have a maximum TTL of 24 hours to enforce optimal protection thresholds."`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[160px]">138 chars</p>
      <Frame6 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-px relative text-[#475569] text-[14px] text-right tracking-[-0.084px]">1536-dim</p>
    </div>
  );
}

function DocumentsTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="documents-table">
      <TableHeader />
      <FileRow />
      <FileRow1 />
      <FileRow2 />
    </div>
  );
}

function LibrarySection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-name="Library-Section">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px] whitespace-nowrap">Extracted Content Chunks (RAG Pipeline Slices)</p>
      <DocumentsTable />
    </div>
  );
}

function DocumentsContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px p-[40px] relative self-stretch" data-name="Documents-Content">
      <HeaderRow />
      <StatsRow />
      <LibrarySection />
    </div>
  );
}

export default function Component10DocumentDetail() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="10 — Document Detail">
      <Sidebar />
      <DocumentsContent />
    </div>
  );
}