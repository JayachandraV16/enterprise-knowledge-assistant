import svgPaths from "@/imports/04EmployeeDashboard/svg-0eglxyxvnv";
import imgFrame from "@/imports/04EmployeeDashboard/b8581a3a8f9a19b6eec05845c18e07081f487330.png";

type ActivePage = "employeeChat" | "history" | "settings" | string;

interface Props {
  navigate: (page: string) => void;
  activePage: ActivePage;
  userName?: string;
}

function NavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex gap-[12px] items-center px-[16px] py-[12px] rounded-[8px] border-none cursor-pointer transition-colors text-left ${
        active ? "bg-[#eef2ff]" : "bg-transparent hover:bg-[#f8fafc]"
      }`}
    >
      {icon}
      <p
        className={`flex-1 min-w-0 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20px] text-[14px] tracking-[-0.084px] ${
          active ? "text-[#4f46e5]" : "text-[#475569]"
        }`}
      >
        {label}
      </p>
    </button>
  );
}

export default function EmployeeSidebarOverlay({ navigate, activePage, userName }: Props) {
  return (
    <div
      className="absolute inset-y-0 left-0 bg-white flex flex-col justify-between"
      style={{ width: 280, zIndex: 8, borderRight: "1px solid #e2e8f0" }}
    >
      <div className="flex flex-col gap-[32px] p-[24px]">
        {/* Logo — click to go to dashboard */}
        <div className="flex gap-[12px] items-center cursor-pointer" onClick={() => navigate("employeeDashboard")}>
          <div className="bg-[#4f46e5] flex items-center justify-center rounded-[8px] size-[32px] shrink-0">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
              <path d={svgPaths.p39039880} stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] text-[#1e293b] text-[14px] tracking-[-0.084px]">AI Knowledge</p>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] text-[#94a3b8] text-[10px] tracking-[-0.04px]">RAG ASSISTANT</p>
          </div>
        </div>

        {/* New Conversation button */}
        <button
          onClick={() => navigate("employeeChat")}
          className="bg-[#4f46e5] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[8px] w-full border-none cursor-pointer hover:bg-[#4338ca] transition-colors"
        >
          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p1529f7e0} stroke="white" strokeLinecap="round" strokeWidth="2" />
          </svg>
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-white tracking-[-0.084px]">New Conversation</p>
        </button>

        {/* Nav list */}
        <div className="flex flex-col gap-[4px]">
          <NavItem
            active={activePage === "employeeChat" || activePage === "employeeDashboard"}
            onClick={() => navigate("employeeChat")}
            label="Chat"
            icon={
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.pea36900} stroke={activePage === "employeeChat" || activePage === "employeeDashboard" ? "#4F46E5" : "#475569"} strokeLinecap="round" strokeWidth="2" />
              </svg>
            }
          />
          <NavItem
            active={activePage === "history"}
            onClick={() => navigate("history")}
            label="History"
            icon={
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p28c4aac0} stroke={activePage === "history" ? "#4F46E5" : "#475569"} strokeLinecap="round" strokeWidth="2" />
              </svg>
            }
          />
          <NavItem
            active={activePage === "settings"}
            onClick={() => navigate("settings")}
            label="Settings"
            icon={
              <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18">
                <path d={svgPaths.p2f7b5300} stroke={activePage === "settings" ? "#4F46E5" : "#475569"} strokeLinecap="round" strokeWidth="2" />
              </svg>
            }
          />
        </div>
      </div>

      {/* User footer */}
      <div className="px-[24px] pb-[24px] pt-[20px] border-t border-[#e2e8f0] flex gap-[12px] items-center">
        <div className="relative size-[40px] shrink-0">
          <img alt="User avatar" className="rounded-full size-full object-cover" src={imgFrame} />
          <div className="absolute bottom-0 right-0 size-[10px] bg-[#22c55e] rounded-full border-[1.5px] border-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[20px] text-[#1e293b] text-[14px] tracking-[-0.084px] truncate">{userName || "Employee"}</p>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium leading-[14px] text-[#94a3b8] text-[10px] tracking-[-0.04px] truncate">Employee</p>
        </div>
      </div>
    </div>
  );
}
