import { useState } from "react";
import svgPaths from "@/imports/04EmployeeDashboard/svg-0eglxyxvnv";
import imgFrame from "@/imports/04EmployeeDashboard/b8581a3a8f9a19b6eec05845c18e07081f487330.png";

interface Props {
  navigate: (page: string) => void;
  userName?: string;
  userEmail?: string;
  role?: "admin" | "employee";
}

function Toggle({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative inline-flex h-[24px] w-[40px] shrink-0 items-center rounded-full transition-colors border-none cursor-pointer ${value ? "bg-[#4f46e5]" : "bg-[#e2e8f0]"}`}
    >
      <span className={`inline-block size-[18px] transform rounded-full bg-white shadow-sm transition-transform ${value ? "translate-x-[18px]" : "translate-x-[3px]"}`} />
    </button>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-[12px] overflow-hidden">
      <div className="px-[24px] py-[20px] border-b border-[#f1f5f9]">
        <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[16px]">{title}</p>
        {subtitle && <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">{subtitle}</p>}
      </div>
      <div className="px-[24px] py-[20px] flex flex-col gap-[16px]">{children}</div>
    </div>
  );
}

function Field({ label, type = "text", value, onChange, placeholder, hint, showToggle, showValue, onToggle, readOnly }: {
  label: string; type?: string; value: string; onChange: (v: string) => void;
  placeholder?: string; hint?: string; showToggle?: boolean; showValue?: boolean; onToggle?: () => void; readOnly?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">{label}</p>
      <div className={`border rounded-[8px] flex items-center px-[12px] py-[10px] gap-[10px] transition-colors ${readOnly ? "bg-[#f1f5f9] border-[#e2e8f0]" : "bg-[#f8fafc] border-[#e2e8f0] focus-within:border-[#4f46e5]"}`}>
        <input
          type={showToggle ? (showValue ? "text" : type) : type}
          value={value}
          onChange={(e) => !readOnly && onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
        />
        {showToggle && onToggle && (
          <button type="button" onClick={onToggle} className="shrink-0 border-none bg-transparent p-0 cursor-pointer text-[#94a3b8] hover:text-[#475569]">
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              {showValue ? (
                <><path d="M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" /></>
              ) : (
                <><path d="M3 3l14 14M11.5 11.5A2.5 2.5 0 017.5 7.5M2 10c1.5-3 4-5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M18 10c-1.5 3-4 5-8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
              )}
            </svg>
          </button>
        )}
      </div>
      {hint && <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[12px]">{hint}</p>}
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex gap-[12px] items-center px-[16px] py-[12px] rounded-[8px] border-none cursor-pointer transition-colors text-left ${active ? "bg-[#eef2ff]" : "bg-transparent hover:bg-[#f8fafc]"}`}
    >
      {icon}
      <p className={`flex-1 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] ${active ? "text-[#4f46e5]" : "text-[#475569]"}`}>{label}</p>
    </button>
  );
}

function AdminSidebar({ navigate, activePage }: { navigate: (p: string) => void; activePage: string }) {
  const items = [
    { label: "Chat", page: "chat", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
    { label: "Dashboard", page: "dashboard", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" /></svg> },
    { label: "Documents", page: "documents", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> },
    { label: "Users", page: "users", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg> },
    { label: "Settings", page: "settings", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" /></svg> },
  ];
  return (
    <div className="flex flex-col justify-between bg-white border-r border-[#e2e8f0] overflow-hidden" style={{ width: 280, flexShrink: 0 }}>
      <div className="flex flex-col gap-[32px] p-[24px]">
        <div className="flex gap-[12px] items-center cursor-pointer" onClick={() => navigate("dashboard")}>
          <div className="bg-[#4f46e5] flex items-center justify-center rounded-[8px] size-[32px] shrink-0">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18"><path d={svgPaths.p39039880} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px]">AI Knowledge</p>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[10px]">RAG ASSISTANT</p>
          </div>
        </div>
        <button onClick={() => navigate("chat")} className="bg-[#4f46e5] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[8px] w-full border-none cursor-pointer hover:bg-[#4338ca] transition-colors">
          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p1529f7e0} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] text-white">New Conversation</p>
        </button>
        <div className="flex flex-col gap-[4px]">
          {items.map(({ label, page, icon }) => (
            <NavItem key={page} label={label} active={activePage === page} onClick={() => navigate(page)}
              icon={<span style={{ color: activePage === page ? "#4f46e5" : "#475569" }}>{icon}</span>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function EmployeeSidebar({ navigate, activePage, userName }: { navigate: (p: string) => void; activePage: string; userName?: string }) {
  const items = [
    { label: "Chat", page: "employeeChat", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18"><path d={svgPaths.pea36900} stroke="currentColor" strokeLinecap="round" strokeWidth="2" /></svg> },
    { label: "History", page: "history", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18"><path d={svgPaths.p28c4aac0} stroke="currentColor" strokeLinecap="round" strokeWidth="2" /></svg> },
    { label: "Settings", page: "settings", icon: <svg className="size-[18px] shrink-0" fill="none" viewBox="0 0 18 18"><path d={svgPaths.p2f7b5300} stroke="currentColor" strokeLinecap="round" strokeWidth="2" /></svg> },
  ];
  return (
    <div className="flex flex-col justify-between bg-white border-r border-[#e2e8f0] overflow-hidden" style={{ width: 280, flexShrink: 0 }}>
      <div className="flex flex-col gap-[32px] p-[24px]">
        <div className="flex gap-[12px] items-center cursor-pointer" onClick={() => navigate("employeeDashboard")}>
          <div className="bg-[#4f46e5] flex items-center justify-center rounded-[8px] size-[32px] shrink-0">
            <svg className="size-[18px]" fill="none" viewBox="0 0 18 18"><path d={svgPaths.p39039880} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px]">AI Knowledge</p>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[10px]">RAG ASSISTANT</p>
          </div>
        </div>
        <button onClick={() => navigate("employeeChat")} className="bg-[#4f46e5] flex gap-[8px] items-center justify-center px-[16px] py-[12px] rounded-[8px] w-full border-none cursor-pointer hover:bg-[#4338ca] transition-colors">
          <svg className="size-[16px] shrink-0" fill="none" viewBox="0 0 16 16"><path d={svgPaths.p1529f7e0} stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] text-white">New Conversation</p>
        </button>
        <div className="flex flex-col gap-[4px]">
          {items.map(({ label, page, icon }) => (
            <NavItem key={page} label={label} active={activePage === page} onClick={() => navigate(page)}
              icon={<span style={{ color: activePage === page ? "#4f46e5" : "#475569" }}>{icon}</span>}
            />
          ))}
        </div>
      </div>
      <div className="px-[24px] pb-[24px] pt-[20px] border-t border-[#e2e8f0] flex gap-[12px] items-center">
        <div className="relative size-[40px] shrink-0">
          <img alt="User avatar" className="rounded-full size-full object-cover" src={imgFrame} />
          <div className="absolute bottom-0 right-0 size-[10px] bg-[#22c55e] rounded-full border-[1.5px] border-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[14px] truncate">{userName || "Employee"}</p>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[10px] truncate">Employee</p>
        </div>
      </div>
    </div>
  );
}

export default function SettingsWrapper({ navigate, userName, userEmail, role = "admin" }: Props) {
  const [displayName, setDisplayName] = useState(userName || "");
  const [workRole, setWorkRole] = useState("");
  const [profileSaved, setProfileSaved] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwError, setPwError] = useState("");
  const [pwSaved, setPwSaved] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [compactView, setCompactView] = useState(false);
  const [prefSaved, setPrefSaved] = useState(false);

  const saveProfile = () => { setProfileSaved(true); setTimeout(() => setProfileSaved(false), 2500); };
  const savePreferences = () => { setPrefSaved(true); setTimeout(() => setPrefSaved(false), 2500); };
  const savePassword = () => {
    setPwError("");
    if (!currentPw || !newPw || !confirmPw) { setPwError("All password fields are required."); return; }
    if (newPw.length < 8) { setPwError("New password must be at least 8 characters."); return; }
    if (newPw !== confirmPw) { setPwError("New passwords do not match."); return; }
    setCurrentPw(""); setNewPw(""); setConfirmPw("");
    setPwSaved(true); setTimeout(() => setPwSaved(false), 2500);
  };

  const checkIcon = <svg className="size-[16px]" fill="none" viewBox="0 0 20 20"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;

  return (
    <div className="size-full flex bg-[#f8fafc] overflow-hidden">
      {role === "employee"
        ? <EmployeeSidebar navigate={navigate} activePage="settings" userName={userName} />
        : <AdminSidebar navigate={navigate} activePage="settings" />}

      <div className="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
        <div className="bg-white border-b border-[#e2e8f0] flex items-center px-[32px] py-[20px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">Settings</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">Manage your account and preferences</p>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-[32px] py-[28px] flex flex-col gap-[20px]">
          <Card title="Profile" subtitle="Update your display name and role">
            <Field label="Display Name" value={displayName} onChange={setDisplayName} placeholder="Your name" />
            <Field label="Email" value={userEmail || ""} onChange={() => {}} placeholder="your@email.com" hint="Email cannot be changed" readOnly />
            <Field label="Work Role" value={workRole} onChange={setWorkRole} placeholder="e.g. Senior Analyst" />
            <div className="flex items-center gap-[12px]">
              <button onClick={saveProfile} className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-[16px] py-[10px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer">Save Changes</button>
              {profileSaved && <span className="flex items-center gap-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#16a34a] text-[13px]">{checkIcon} Profile updated</span>}
            </div>
          </Card>
          <Card title="Security" subtitle="Change your account password">
            <Field label="Current Password" type="password" value={currentPw} onChange={setCurrentPw} placeholder="••••••••" showToggle showValue={showCurrent} onToggle={() => setShowCurrent(!showCurrent)} />
            <Field label="New Password" type="password" value={newPw} onChange={setNewPw} placeholder="••••••••" hint="Minimum 8 characters" showToggle showValue={showNew} onToggle={() => setShowNew(!showNew)} />
            <Field label="Confirm New Password" type="password" value={confirmPw} onChange={setConfirmPw} placeholder="••••••••" showToggle showValue={showConfirm} onToggle={() => setShowConfirm(!showConfirm)} />
            {pwError && <p className="text-red-500 text-[13px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium">{pwError}</p>}
            <div className="flex items-center gap-[12px]">
              <button onClick={savePassword} className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-[16px] py-[10px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer">Update Password</button>
              {pwSaved && <span className="flex items-center gap-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#16a34a] text-[13px]">{checkIcon} Password updated</span>}
            </div>
          </Card>
          <Card title="Preferences" subtitle="Notification and display preferences">
            {[
              { label: "Email Notifications", desc: "Receive email alerts for important updates", value: emailNotifs, onChange: setEmailNotifs },
              { label: "Dark Mode", desc: "Switch to a darker interface theme", value: darkMode, onChange: setDarkMode },
              { label: "Compact View", desc: "Reduce spacing for a denser layout", value: compactView, onChange: setCompactView },
            ].map(({ label, desc, value, onChange }) => (
              <div key={label} className="flex items-center justify-between gap-[16px]">
                <div>
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">{label}</p>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[1px]">{desc}</p>
                </div>
                <Toggle value={value} onChange={onChange} />
              </div>
            ))}
            <div className="flex items-center gap-[12px] pt-[4px]">
              <button onClick={savePreferences} className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-[16px] py-[10px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer">Save Preferences</button>
              {prefSaved && <span className="flex items-center gap-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#16a34a] text-[13px]">{checkIcon} Preferences saved</span>}
            </div>
          </Card>
          <Card title="Danger Zone" subtitle="Irreversible account actions">
            <div className="flex items-center justify-between gap-[16px] border border-red-100 rounded-[8px] bg-red-50 px-[16px] py-[14px]">
              <div>
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-red-700 text-[14px]">Deactivate Account</p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-red-400 text-[13px] mt-[1px]">This will suspend your access. Contact an admin to reactivate.</p>
              </div>
              <button className="border border-red-300 bg-white text-red-600 font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[13px] px-[14px] py-[8px] rounded-[7px] hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap">Deactivate</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
