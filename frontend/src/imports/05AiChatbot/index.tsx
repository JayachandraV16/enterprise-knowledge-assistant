import svgPaths from "./svg-deu720djhi";
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
        <g clipPath="url(#clip0_0_50)" id="message-circle">
          <path d={svgPaths.p16ccbb80} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
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
      <MessageCircle />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] min-w-px relative text-[#4f46e5] text-[14px] tracking-[-0.084px]">Chat</p>
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

function TopbarLeft() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 whitespace-nowrap" data-name="topbar-left">
      <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1e293b] text-[18px] tracking-[-0.144px]">Security Policy Compliance Check</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#94a3b8] text-[12px] tracking-[-0.06px]">Active conversation • Updated 2 mins ago</p>
    </div>
  );
}

function TopbarRight() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="topbar-right">
      <div className="relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
                  <path d={svgPaths.p15634280} fill="#475569" id="Vector" stroke="#475569" strokeWidth="0.09375" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[123px]" />
      </div>
      <div className="relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
              <div className="absolute inset-[9.37%_6.25%_9.37%_6.24%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="19.504" preserveAspectRatio="none" viewBox="0 0 21.0015 19.504" width="21.0015">
                  <g id="Vector">
                    <mask fill="white" id="path-1-inside-1_0_48">
                      <path d={svgPaths.p1d642d40} />
                    </mask>
                    <path d={svgPaths.p1d642d40} fill="#475569" mask="url(#path-1-inside-1_0_48)" stroke="#475569" strokeWidth="0.1875" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[123px]" />
      </div>
    </div>
  );
}

function ChatTopBar() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[32px] py-[20px] relative shrink-0 w-full" data-name="Chat-TopBar">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <TopbarLeft />
      <TopbarRight />
    </div>
  );
}

function UserBubble() {
  return (
    <div className="[word-break:break-word] bg-[#4f46e5] content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-bl-[16px] rounded-br-[2px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[560px]" data-name="user-bubble">
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-white w-full">Explain the department isolation guidelines for customer data storage according to our SOC2 compliance standard.</p>
      <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#c7d2fe] text-[10px] text-right tracking-[-0.04px] w-full">10:24 AM</p>
    </div>
  );
}

function UserBubbleRow() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full" data-name="user-bubble-row">
      <UserBubble />
    </div>
  );
}

function BrainCircuit1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="brain-circuit">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="brain-circuit">
          <path d={svgPaths.p44f9d80} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function AssistantAvatar() {
  return (
    <div className="bg-[#eef2ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="assistant-avatar">
      <BrainCircuit1 />
    </div>
  );
}

function AiBubble() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px] shrink-0 w-full" data-name="ai-bubble">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tl-[2px] rounded-tr-[16px]" />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#475569] text-[14px] w-full">{`According to our SOC2 guidelines, department isolation is enforced by mapping RAG index keys directly to the user's role-based credentials. Granular document-level access lists (ACLs) are verified before document chunks are retrieved during any database lookup. Background worker queues compute 1536-dimensional embeddings for verified files only.`}</p>
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#94a3b8] text-[10px] tracking-[-0.04px] w-full">10:24 AM</p>
    </div>
  );
}

function BookOpen() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="book-open">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="book-open">
          <path d={svgPaths.p169b6b80} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SourcesHeader() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="sources-header">
      <BookOpen />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] tracking-[-0.06px] whitespace-nowrap">REFERENCED SOURCES (2)</p>
    </div>
  );
}

function File() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="file">
          <path d={svgPaths.p155dd80} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FileMeta() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="file-meta">
      <File />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">2026_SOC2_Audit.pdf</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">p. 12</p>
    </div>
  );
}

function CardTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <FileMeta />
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SourceCard() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px]" data-name="source-card-0">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] overflow-hidden relative shrink-0 text-[#475569] text-[10px] text-ellipsis tracking-[-0.04px] w-full">{`"RAG architectures require proper boundary isolation between organizational departments to enforce granular document level ACLs."`}</p>
    </div>
  );
}

function File1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="file">
          <path d={svgPaths.p155dd80} id="Vector" stroke="#4F46E5" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FileMeta1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="file-meta">
      <File1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] overflow-hidden relative shrink-0 text-[#1e293b] text-[14px] text-ellipsis tracking-[-0.084px] whitespace-nowrap">Enterprise_Sec_Ops_v4.docx</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#4f46e5] text-[12px] text-center tracking-[-0.06px] whitespace-nowrap">p. 44</p>
    </div>
  );
}

function CardTop1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-top">
      <FileMeta1 />
      <div className="bg-[#eef2ff] relative rounded-[1234px] shrink-0" data-name="Badge Text">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative size-full">
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SourceCard1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_34px] flex-col gap-[8px] items-start min-w-px p-[16px] relative rounded-[12px]" data-name="source-card-1">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardTop1 />
      <p className="[word-break:break-word] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] overflow-hidden relative shrink-0 text-[#475569] text-[10px] text-ellipsis tracking-[-0.04px] w-full">{`"Employee-uploaded files are processed by our background worker queue which parses document chunks and computes 1536-dim vectors."`}</p>
    </div>
  );
}

function SourcesRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="sources-row">
      <SourceCard />
      <SourceCard1 />
    </div>
  );
}

function RagSources() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="rag-sources">
      <SourcesHeader />
      <SourcesRow />
    </div>
  );
}

function AssistantContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start max-w-[720px] min-w-px relative" data-name="assistant-content">
      <AiBubble />
      <RagSources />
    </div>
  );
}

function AssistantResponseRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="assistant-response-row">
      <AssistantAvatar />
      <AssistantContent />
    </div>
  );
}

function ChatFeed() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px p-[32px] relative w-full" data-name="Chat-Feed">
      <UserBubbleRow />
      <AssistantResponseRow />
    </div>
  );
}

function InputBox() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="input-box">
      <div aria-hidden className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
              <div className="absolute inset-[9.37%_15.63%_9.35%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="19.506" preserveAspectRatio="none" viewBox="0 0 17.2481 19.506" width="17.2481">
                  <path d={svgPaths.p3dd26700} fill="#475569" id="Vector" stroke="#475569" strokeWidth="0.09375" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] flex-[1_0_0] font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.6] min-w-px relative text-[#94a3b8] text-[14px]">Ask about your documents...</p>
      <div className="bg-[#4f46e5] relative rounded-[123px] shrink-0 size-[40px]" data-name="Button Icon">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[16px] relative size-full">
            <div className="relative shrink-0 size-[24px]" data-name="Monotone add">
              <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" height="15.0008" preserveAspectRatio="none" viewBox="0 0 18.0006 15.0008" width="18.0006">
                  <path d={svgPaths.p1134d80} fill="white" id="Vector" stroke="white" strokeWidth="0.09375" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputBarSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative shrink-0 w-full" data-name="Input-Bar-Section">
      <div aria-hidden className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <InputBox />
    </div>
  );
}

function ChatWindow() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Chat-Window">
      <ChatTopBar />
      <ChatFeed />
      <InputBarSection />
    </div>
  );
}

export default function Component05AiChatbot() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start relative size-full" data-name="05 — AI Chatbot">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}