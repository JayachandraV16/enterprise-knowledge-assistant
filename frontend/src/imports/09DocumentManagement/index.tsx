import svgPaths from "./svg-g1zdsq2d4h";
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
        <g clipPath="url(#clip0_0_161)" id="message-circle">
          <path d={svgPaths.p16ccbb80} id="Vector" stroke="#475569" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_161">
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
          <path d={svgPaths.p29ff9500} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
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

function HeaderText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="header-text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#1e293b] text-[24px] tracking-[-0.288px]">Document Intelligence Library</p>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px]">Upload, sync, and configure accessibility settings for corporate document indexes.</p>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header-row">
      <HeaderText />
    </div>
  );
}

function CloudUpload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="cloud-upload">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="cloud-upload">
          <path d={svgPaths.p305fc240} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CloudIconContainer() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="cloud-icon-container">
      <CloudUpload />
    </div>
  );
}

function UploadHelperText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center relative shrink-0 whitespace-nowrap" data-name="upload-helper-text">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.084px]">Drop PDF, DOCX, or CSV files here</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px]">Maximum file size: 50MB per document</p>
    </div>
  );
}

function DragDropZone() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center p-[48px] relative rounded-[16px] shrink-0 w-full" data-name="Drag-Drop-Zone">
      <div aria-hidden className="absolute border border-[#4f46e5] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <CloudIconContainer />
      <UploadHelperText />
      <div className="relative rounded-[1234px] shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] whitespace-nowrap">Browse Files</p>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[1234px]" />
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#4f46e5] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-0">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[-0.06px] whitespace-nowrap">All Files</p>
    </div>
  );
}

function Chip1() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-1">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#475569] text-[12px] tracking-[-0.06px] whitespace-nowrap">PDF</p>
    </div>
  );
}

function Chip2() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-2">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#475569] text-[12px] tracking-[-0.06px] whitespace-nowrap">DOCX</p>
    </div>
  );
}

function Chip3() {
  return (
    <div className="bg-[#f1f5f9] content-stretch flex items-start px-[16px] py-[6px] relative rounded-[9999px] shrink-0" data-name="chip-3">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#475569] text-[12px] tracking-[-0.06px] whitespace-nowrap">CSV</p>
    </div>
  );
}

function FilterChips() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="filter-chips">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[22px] min-w-px relative text-[#475569] text-[16px] tracking-[-0.112px]">Search files...</p>
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
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[340px]">Document Name</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[100px]">File Type</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[140px]">Upload Date</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[100px]">File Size</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px] w-[140px]">Status</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] min-w-px relative text-[#94a3b8] text-[12px] text-right tracking-[-0.06px]">Actions</p>
    </div>
  );
}

function File() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file">
          <path d={svgPaths.p17947300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NameCol() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[340px]" data-name="name-col">
      <File />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">2026_SOC2_Audit.pdf</p>
    </div>
  );
}

function Dot() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame3() {
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
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="status-col">
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

function ActionsCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
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
      <NameCol />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">PDF</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 12, 2026</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">4.2 MB</p>
      <StatusCol />
      <ActionsCol />
    </div>
  );
}

function File1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file">
          <path d={svgPaths.p17947300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NameCol1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[340px]" data-name="name-col">
      <File1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Enterprise_Sec_Ops_v4.docx</p>
    </div>
  );
}

function Dot1() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame4() {
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
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="status-col">
      <div className="bg-[#f0fdf4] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame4 />
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
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
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
      <NameCol1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">DOCX</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 11, 2026</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">1.8 MB</p>
      <StatusCol1 />
      <ActionsCol1 />
    </div>
  );
}

function File2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file">
          <path d={svgPaths.p17947300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NameCol2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[340px]" data-name="name-col">
      <File2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Vendor_Security_Review_Q4.xlsx</p>
    </div>
  );
}

function Dot2() {
  return <div className="absolute bg-[#f59e0b] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame5() {
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
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="status-col">
      <div className="bg-[#fffbeb] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame5 />
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
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
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
      <NameCol2 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">CSV</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 10, 2026</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">12.4 MB</p>
      <StatusCol2 />
      <ActionsCol2 />
    </div>
  );
}

function File3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file">
          <path d={svgPaths.p17947300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NameCol3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[340px]" data-name="name-col">
      <File3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">legacy_system_logs_archive.zip</p>
    </div>
  );
}

function Dot3() {
  return <div className="absolute bg-[#f43f5e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame6() {
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
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="status-col">
      <div className="bg-[#fff1f2] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame6 />
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
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileRow3() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="file-row-3">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <NameCol3 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">PDF</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 09, 2026</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">44.1 MB</p>
      <StatusCol3 />
      <ActionsCol3 />
    </div>
  );
}

function File4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="file">
          <path d={svgPaths.p17947300} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NameCol4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[340px]" data-name="name-col">
      <File4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Onboarding_Manual_HR.docx</p>
    </div>
  );
}

function Dot4() {
  return <div className="absolute bg-[#22c55e] inset-[12.5%] rounded-[9999px]" data-name="Dot" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="_Dot">
        <Dot4 />
      </div>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#22c55e] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">Processed</p>
    </div>
  );
}

function StatusCol4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[140px]" data-name="status-col">
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

function ActionsCol4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start justify-end min-w-px relative" data-name="actions-col">
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#4f46e5] text-[14px] tracking-[-0.084px] whitespace-nowrap">View</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
            <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f43f5e] text-[14px] tracking-[-0.084px] whitespace-nowrap">Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileRow4() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="file-row-4">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <NameCol4 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">DOCX</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[140px]">Jan 08, 2026</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475569] text-[14px] tracking-[-0.084px] w-[100px]">2.1 MB</p>
      <StatusCol4 />
      <ActionsCol4 />
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
      <FileRow3 />
      <FileRow4 />
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

function DocumentsContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px p-[40px] relative self-stretch" data-name="Documents-Content">
      <HeaderRow />
      <DragDropZone />
      <LibrarySection />
    </div>
  );
}

export default function Component09DocumentManagement() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="09 — Document Management">
      <Sidebar />
      <DocumentsContent />
    </div>
  );
}