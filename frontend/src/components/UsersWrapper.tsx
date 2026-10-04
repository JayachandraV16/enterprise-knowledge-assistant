import { useState } from "react";
import UserManagement from "@/imports/11UserManagement/index";

type UserRole = "Admin" | "Employee";
type UserStatus = "Active" | "Inactive";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  lastActive: string;
  initials: string;
  color: string;
}

const INITIAL_USERS: User[] = [
  { id: "1", name: "Sarah Jenkins", email: "sarah.jenkins@enterprise.com", role: "Admin", status: "Active", lastActive: "2 hours ago", initials: "SJ", color: "#4f46e5" },
  { id: "2", name: "Michael Chen", email: "michael.chen@enterprise.com", role: "Employee", status: "Active", lastActive: "1 day ago", initials: "MC", color: "#0891b2" },
  { id: "3", name: "Lisa Rodriguez", email: "lisa.rodriguez@enterprise.com", role: "Employee", status: "Active", lastActive: "3 days ago", initials: "LR", color: "#d97706" },
  { id: "4", name: "David Park", email: "david.park@enterprise.com", role: "Employee", status: "Inactive", lastActive: "2 weeks ago", initials: "DP", color: "#94a3b8" },
  { id: "5", name: "Emma Thompson", email: "emma.thompson@enterprise.com", role: "Admin", status: "Active", lastActive: "5 hours ago", initials: "ET", color: "#16a34a" },
  { id: "6", name: "James Wilson", email: "james.wilson@enterprise.com", role: "Employee", status: "Active", lastActive: "Yesterday", initials: "JW", color: "#9333ea" },
];

export default function UsersWrapper() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [form, setForm] = useState({ name: "", email: "", role: "Employee" as UserRole });
  const [formError, setFormError] = useState("");

  const roleFilters: ("All" | UserRole)[] = ["All", "Admin", "Employee"];

  const filtered = users.filter((u) => {
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = filterRole === "All" || u.role === filterRole;
    return matchSearch && matchRole;
  });

  const openAdd = () => {
    setEditUser(null);
    setForm({ name: "", email: "", role: "Employee" });
    setFormError("");
    setShowModal(true);
  };

  const openEdit = (user: User) => {
    setEditUser(user);
    setForm({ name: user.name, email: user.email, role: user.role });
    setFormError("");
    setShowModal(true);
  };

  const saveUser = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setFormError("Name and email are required.");
      return;
    }
    if (!form.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (editUser) {
      setUsers((prev) => prev.map((u) => u.id === editUser.id ? { ...u, name: form.name, email: form.email, role: form.role } : u));
    } else {
      const initials = form.name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
      const colors = ["#4f46e5", "#0891b2", "#d97706", "#16a34a", "#9333ea", "#dc2626"];
      const newUser: User = {
        id: Date.now().toString(),
        name: form.name,
        email: form.email,
        role: form.role,
        status: "Active",
        lastActive: "Just now",
        initials,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      setUsers((prev) => [newUser, ...prev]);
    }
    setShowModal(false);
  };

  const toggleStatus = (id: string) => {
    setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u));
  };

  return (
    <div className="size-full relative">
      <UserManagement />

      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Top bar */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[20px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">User Management</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              {users.filter((u) => u.status === "Active").length} active users
            </p>
          </div>
          <button
            onClick={openAdd}
            className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] px-[16px] py-[10px] rounded-[8px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer flex items-center gap-[8px]"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 20 20">
              <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add New User
          </button>
        </div>

        {/* Search + filters */}
        <div className="bg-white border-b border-[#e2e8f0] px-[32px] py-[14px] flex items-center gap-[16px] shrink-0">
          <div className="flex-1 bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center gap-[10px] px-[14px] py-[9px] focus-within:border-[#4f46e5] transition-colors">
            <svg className="size-[15px] shrink-0 text-[#94a3b8]" fill="none" viewBox="0 0 20 20">
              <path d="M9 17A8 8 0 109 1a8 8 0 000 16zM17 17l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search user database..."
              className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
            />
            {search && (
              <button onClick={() => setSearch("")} className="cursor-pointer border-none bg-transparent p-0 text-[#94a3b8] hover:text-[#475569]">
                <svg className="size-[13px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          <div className="flex items-center gap-[6px]">
            {roleFilters.map((r) => (
              <button
                key={r}
                onClick={() => setFilterRole(r)}
                className={`px-[12px] py-[6px] rounded-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] border cursor-pointer transition-colors ${
                  filterRole === r
                    ? "bg-[#4f46e5] text-white border-[#4f46e5]"
                    : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#4f46e5] hover:text-[#4f46e5]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[24px]">
          <div className="bg-white border border-[#e2e8f0] rounded-[12px] overflow-hidden">
            {/* Header */}
            <div className="grid border-b border-[#f1f5f9] px-[20px] py-[12px]" style={{ gridTemplateColumns: "2fr 100px 80px 120px 110px" }}>
              {["User", "Role", "Status", "Last Active", "Actions"].map((h) => (
                <p key={h} className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">{h}</p>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-[12px] py-[48px]">
                <svg className="size-[36px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">No users found</p>
              </div>
            ) : (
              filtered.map((user) => (
                <div
                  key={user.id}
                  className="grid items-center px-[20px] py-[14px] border-b border-[#f8fafc] hover:bg-[#f8fafc] transition-colors group"
                  style={{ gridTemplateColumns: "2fr 100px 80px 120px 110px" }}
                >
                  <div className="flex items-center gap-[12px] min-w-0">
                    <div
                      className="size-[36px] rounded-full shrink-0 flex items-center justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[13px] text-white"
                      style={{ background: user.color }}
                    >
                      {user.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px] truncate">{user.name}</p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[12px] truncate">{user.email}</p>
                    </div>
                  </div>
                  <span
                    className={`px-[8px] py-[3px] rounded-full font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] w-fit ${
                      user.role === "Admin" ? "bg-[#eef2ff] text-[#4f46e5]" : "bg-[#f1f5f9] text-[#475569]"
                    }`}
                  >
                    {user.role}
                  </span>
                  <div className="flex items-center gap-[5px]">
                    <div className={`size-[6px] rounded-full shrink-0 ${user.status === "Active" ? "bg-[#16a34a]" : "bg-[#94a3b8]"}`} />
                    <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] ${user.status === "Active" ? "text-[#16a34a]" : "text-[#94a3b8]"}`}>
                      {user.status}
                    </span>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#475569] text-[13px]">{user.lastActive}</p>
                  <div className="flex items-center gap-[8px] opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEdit(user)}
                      className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[13px] hover:text-[#475569] bg-transparent border-none p-0 cursor-pointer"
                    >
                      {user.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Add / Edit User modal */}
      {showModal && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          style={{ zIndex: 20 }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-white rounded-[16px] p-[32px] w-[440px] flex flex-col gap-[20px] shadow-xl">
            <div className="flex items-start justify-between">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[18px]">
                {editUser ? "Edit User" : "Add New User"}
              </p>
              <button onClick={() => setShowModal(false)} className="text-[#94a3b8] hover:text-[#475569] bg-transparent border-none p-0 cursor-pointer">
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-[14px]">
              {[
                { label: "Full Name", key: "name" as const, type: "text", placeholder: "Sarah Jenkins" },
                { label: "Enterprise Email", key: "email" as const, type: "email", placeholder: "sarah@enterprise.com" },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key} className="flex flex-col gap-[6px]">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">{label}</p>
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center px-[12px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                      placeholder={placeholder}
                      className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-[6px]">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">Role</p>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] relative focus-within:border-[#4f46e5] transition-colors">
                  <select
                    value={form.role}
                    onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value as UserRole }))}
                    className="w-full px-[12px] py-[10px] bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] appearance-none cursor-pointer rounded-[8px]"
                  >
                    <option value="Employee">Employee</option>
                    <option value="Admin">Administrator</option>
                  </select>
                  <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
                    <svg className="size-[16px] text-[#475569]" fill="none" viewBox="0 0 20 20">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {formError && (
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] text-red-500 -mt-[8px]">{formError}</p>
            )}

            <div className="flex gap-[12px] justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-[16px] py-[10px] rounded-[8px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#475569] text-[14px] hover:border-[#cbd5e1] bg-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={saveUser}
                className="px-[16px] py-[10px] rounded-[8px] bg-[#4f46e5] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[14px] hover:bg-[#4338ca] border-none cursor-pointer"
              >
                {editUser ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
