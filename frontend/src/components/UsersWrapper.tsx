import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { userService } from "../services/userService";
import { getErrorMessage } from "../services/api";
import type { User, Role } from "../types";
import UserManagement from "@/imports/11UserManagement/index";

const AVATAR_COLORS = ["#4f46e5", "#0891b2", "#d97706", "#16a34a", "#9333ea", "#dc2626"];

function getAvatarColor(idOrEmail: string): string {
  let hash = 0;
  for (let i = 0; i < idOrEmail.length; i++) {
    hash = idOrEmail.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

export default function UsersWrapper({ navigate: propNavigate }: { navigate?: (page: string) => void }) {
  const routerNavigate = useNavigate();
  const navigate = propNavigate ?? routerNavigate;
  const { user: currentUser, logout } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState<"All" | Role>("All");

  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [form, setForm] = useState<{ name: string; email: string; password: string; role: Role }>({
    name: "",
    email: "",
    password: "",
    role: "EMPLOYEE",
  });
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const roleFilters: { label: string; value: "All" | Role }[] = [
    { label: "All", value: "All" },
    { label: "Admin", value: "ADMIN" },
    { label: "Employee", value: "EMPLOYEE" },
  ];

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userService.list();
      setUsers(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const isSelf = (u: User) => {
    if (!currentUser) return false;
    return u.id === currentUser.id || u.email.toLowerCase() === currentUser.email.toLowerCase();
  };

  const openAdd = () => {
    setEditUser(null);
    setForm({ name: "", email: "", password: "", role: "EMPLOYEE" });
    setFormError("");
    setShowModal(true);
  };

  const openEdit = (u: User) => {
    setEditUser(u);
    setForm({ name: u.name, email: u.email, password: "", role: u.role });
    setFormError("");
    setShowModal(true);
  };

  const saveUser = async () => {
    setFormError("");
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();

    if (!trimmedName) {
      setFormError("Full name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!editUser) {
      if (!form.password || form.password.length < 8) {
        setFormError("Password must be at least 8 characters.");
        return;
      }
    }

    setSubmitting(true);
    try {
      if (editUser) {
        await userService.update(editUser.id, {
          name: trimmedName,
          email: trimmedEmail,
          role: form.role,
        });
      } else {
        await userService.create({
          name: trimmedName,
          email: trimmedEmail,
          password: form.password,
          role: form.role,
        });
      }
      setShowModal(false);
      await loadUsers();
    } catch (err) {
      setFormError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  const toggleStatus = async (targetUser: User) => {
    if (isSelf(targetUser)) {
      setToast("You cannot deactivate your own account.");
      return;
    }
    const nextStatus = !targetUser.active;
    try {
      await userService.setActive(targetUser.id, nextStatus);
      setUsers((prev) =>
        prev.map((u) => (u.id === targetUser.id ? { ...u, active: nextStatus } : u))
      );
    } catch (err) {
      setToast(getErrorMessage(err));
    }
  };

  const deleteUser = async (targetUser: User) => {
    if (isSelf(targetUser)) {
      setToast("You cannot delete your own account.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete user "${targetUser.name}"?`)) {
      return;
    }
    try {
      await userService.remove(targetUser.id);
      setUsers((prev) => prev.filter((u) => u.id !== targetUser.id));
    } catch (err) {
      setToast(getErrorMessage(err));
    }
  };

  const filtered = users.filter((u) => {
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchRole = filterRole === "All" || u.role === filterRole;
    return matchSearch && matchRole;
  });

  return (
    <div className="size-full relative">
      <UserManagement />

      {/* Admin Sidebar Navigation Overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ display: "none" }}
      >
        {/* Brand / Logo -> Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          aria-label="Dashboard"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 24,
            left: 24,
            width: 160,
            height: 40,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* New Conversation button */}
        <button
          onClick={() => navigate("/chat")}
          aria-label="New Conversation"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 96,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Chat nav */}
        <button
          onClick={() => navigate("/chat")}
          aria-label="Chat"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 0,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Dashboard nav */}
        <button
          onClick={() => navigate("/dashboard")}
          aria-label="Dashboard"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 1,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Documents nav */}
        <button
          onClick={() => navigate("/documents")}
          aria-label="Documents"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 2,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Users nav */}
        <button
          onClick={() => navigate("/users")}
          aria-label="Users"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 3,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Settings nav */}
        <button
          onClick={() => navigate("/settings")}
          aria-label="Settings"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: 172 + (44 + 4) * 4,
            left: 24,
            right: 24,
            height: 44,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Logout button at bottom of sidebar */}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          aria-label="Logout"
          title="Logout"
          style={{
            pointerEvents: "all",
            position: "absolute",
            bottom: 24,
            right: 24,
            width: 60,
            height: 36,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
      </div>

      <div
        className="absolute flex flex-col bg-[#f8fafc]"
        style={{ left: 280, right: 0, top: 0, bottom: 0, zIndex: 5 }}
      >
        {/* Toast notification */}
        {toast && (
          <div className="absolute top-[20px] right-[32px] z-50 bg-[#dc2626] text-white px-[16px] py-[10px] rounded-[8px] shadow-lg flex items-center gap-[10px] text-[13px] font-['Plus_Jakarta_Sans:Medium',sans-serif]">
            <span>{toast}</span>
            <button
              onClick={() => setToast(null)}
              className="text-white hover:opacity-80 bg-transparent border-none p-0 cursor-pointer ml-[6px]"
              title="Close"
            >
              ✕
            </button>
          </div>
        )}

        {/* Top bar */}
        <div className="bg-white border-b border-[#e2e8f0] flex items-center justify-between px-[32px] py-[20px] shrink-0">
          <div>
            <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[20px] tracking-[-0.2px]">User Management</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[13px] mt-[2px]">
              {loading ? "Loading..." : `${users.filter((u) => u.active).length} active users`}
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
              <button
                onClick={() => setSearch("")}
                className="cursor-pointer border-none bg-transparent p-0 text-[#94a3b8] hover:text-[#475569]"
                title="Clear search"
              >
                <svg className="size-[13px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>
          <div className="flex items-center gap-[6px]">
            {roleFilters.map((r) => (
              <button
                key={r.value}
                onClick={() => setFilterRole(r.value)}
                className={`px-[12px] py-[6px] rounded-[6px] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] border cursor-pointer transition-colors ${
                  filterRole === r.value
                    ? "bg-[#4f46e5] text-white border-[#4f46e5]"
                    : "bg-white text-[#475569] border-[#e2e8f0] hover:border-[#4f46e5] hover:text-[#4f46e5]"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-y-auto px-[32px] py-[24px]">
          <div className="bg-white border border-[#e2e8f0] rounded-[12px] overflow-hidden">
            {/* Header */}
            <div
              className="grid border-b border-[#f1f5f9] px-[20px] py-[12px]"
              style={{ gridTemplateColumns: "2fr 110px 100px 160px" }}
            >
              {["User", "Role", "Status", "Actions"].map((h) => (
                <p key={h} className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#94a3b8] text-[12px] uppercase tracking-[0.6px]">{h}</p>
              ))}
            </div>

            {/* Skeleton loader */}
            {loading && (
              <div className="divide-y divide-[#f8fafc]">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="grid items-center px-[20px] py-[16px] animate-pulse"
                    style={{ gridTemplateColumns: "2fr 110px 100px 160px" }}
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="size-[36px] rounded-full bg-[#f1f5f9]" />
                      <div className="space-y-1">
                        <div className="h-4 bg-[#f1f5f9] rounded w-32" />
                        <div className="h-3 bg-[#f1f5f9] rounded w-48" />
                      </div>
                    </div>
                    <div className="h-4 bg-[#f1f5f9] rounded w-16" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-16" />
                    <div className="h-4 bg-[#f1f5f9] rounded w-24" />
                  </div>
                ))}
              </div>
            )}

            {/* Error state */}
            {!loading && error && (
              <div className="flex flex-col items-center justify-center gap-[12px] py-[48px] text-center">
                <div className="bg-[#fef2f2] text-[#dc2626] rounded-full p-3">
                  <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
                    <path d="M12 9v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#dc2626] text-[14px]">
                  {error}
                </p>
                <button
                  type="button"
                  onClick={loadUsers}
                  className="bg-[#4f46e5] text-white font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] px-[16px] py-[8px] rounded-[7px] hover:bg-[#4338ca] transition-colors border-none cursor-pointer"
                >
                  Retry
                </button>
              </div>
            )}

            {/* Empty state */}
            {!loading && !error && filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-[12px] py-[48px] text-center">
                <svg className="size-[36px] text-[#cbd5e1]" fill="none" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#94a3b8] text-[14px]">
                  {users.length === 0 ? "No users registered yet" : "No users found"}
                </p>
              </div>
            )}

            {/* Users list */}
            {!loading &&
              !error &&
              filtered.map((user) => {
                const self = isSelf(user);
                return (
                  <div
                    key={user.id}
                    className="grid items-center px-[20px] py-[14px] border-b border-[#f8fafc] hover:bg-[#f8fafc] transition-colors group"
                    style={{ gridTemplateColumns: "2fr 110px 100px 160px" }}
                  >
                    <div className="flex items-center gap-[12px] min-w-0">
                      <div
                        className="size-[36px] rounded-full shrink-0 flex items-center justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[13px] text-white"
                        style={{ background: getAvatarColor(user.email || user.id) }}
                      >
                        {getInitials(user.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-[6px]">
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px] truncate">
                            {user.name}
                          </p>
                          {self && (
                            <span className="bg-[#eef2ff] text-[#4f46e5] text-[10px] font-['Plus_Jakarta_Sans:Bold',sans-serif] px-[6px] py-[1px] rounded-full">
                              You
                            </span>
                          )}
                        </div>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#94a3b8] text-[12px] truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-[8px] py-[3px] rounded-full font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] w-fit ${
                        user.role === "ADMIN" ? "bg-[#eef2ff] text-[#4f46e5]" : "bg-[#f1f5f9] text-[#475569]"
                      }`}
                    >
                      {user.role === "ADMIN" ? "Admin" : "Employee"}
                    </span>
                    <div className="flex items-center gap-[6px]">
                      <div className={`size-[6px] rounded-full shrink-0 ${user.active ? "bg-[#16a34a]" : "bg-[#94a3b8]"}`} />
                      <span className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] ${user.active ? "text-[#16a34a]" : "text-[#94a3b8]"}`}>
                        {user.active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <button
                        onClick={() => openEdit(user)}
                        className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#4f46e5] text-[13px] hover:underline bg-transparent border-none p-0 cursor-pointer"
                      >
                        Edit
                      </button>

                      {/* Deactivate/Activate toggle (prevented for current admin) */}
                      <button
                        onClick={() => toggleStatus(user)}
                        disabled={self}
                        title={self ? "Cannot deactivate your own account" : undefined}
                        className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] bg-transparent border-none p-0 transition-colors ${
                          self
                            ? "text-[#cbd5e1] cursor-not-allowed"
                            : "text-[#94a3b8] hover:text-[#475569] cursor-pointer"
                        }`}
                      >
                        {user.active ? "Deactivate" : "Activate"}
                      </button>

                      {/* Delete button (prevented for current admin) */}
                      <button
                        onClick={() => deleteUser(user)}
                        disabled={self}
                        title={self ? "Cannot delete your own account" : undefined}
                        className={`font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px] bg-transparent border-none p-0 transition-colors ${
                          self
                            ? "text-[#cbd5e1] cursor-not-allowed"
                            : "text-red-500 hover:text-red-700 cursor-pointer"
                        }`}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Add / Edit User modal */}
      {showModal && (
        <div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          style={{ zIndex: 20 }}
          onClick={(e) => {
            if (e.target === e.currentTarget && !submitting) setShowModal(false);
          }}
        >
          <div className="bg-white rounded-[16px] p-[32px] w-[460px] flex flex-col gap-[20px] shadow-xl">
            <div className="flex items-start justify-between">
              <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#1e293b] text-[18px]">
                {editUser ? "Edit User" : "Add New User"}
              </p>
              <button
                disabled={submitting}
                onClick={() => setShowModal(false)}
                className="text-[#94a3b8] hover:text-[#475569] bg-transparent border-none p-0 cursor-pointer disabled:opacity-40"
              >
                <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                  <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-[14px]">
              {/* Full Name */}
              <div className="flex flex-col gap-[6px]">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">
                  Full Name
                </p>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center px-[12px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Sarah Jenkins"
                    className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
                  />
                </div>
              </div>

              {/* Enterprise Email */}
              <div className="flex flex-col gap-[6px]">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">
                  Enterprise Email
                </p>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center px-[12px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="e.g. sarah@enterprise.com"
                    className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
                  />
                </div>
              </div>

              {/* Password (Required only when creating) */}
              {!editUser && (
                <div className="flex flex-col gap-[6px]">
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">
                    Temporary Password
                  </p>
                  <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] flex items-center px-[12px] py-[10px] focus-within:border-[#4f46e5] transition-colors">
                    <input
                      type="password"
                      value={form.password}
                      onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                      placeholder="At least 8 characters"
                      className="flex-1 bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[11px] text-[#94a3b8]">
                    Minimum 8 characters required.
                  </p>
                </div>
              )}

              {/* Role Select */}
              <div className="flex flex-col gap-[6px]">
                <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#1e293b] text-[14px]">Role</p>
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[8px] relative focus-within:border-[#4f46e5] transition-colors">
                  <select
                    value={form.role}
                    onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value as Role }))}
                    className="w-full px-[12px] py-[10px] bg-transparent outline-none font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-[#1e293b] text-[14px] appearance-none cursor-pointer rounded-[8px]"
                  >
                    <option value="EMPLOYEE">Employee</option>
                    <option value="ADMIN">Administrator</option>
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
              <div className="bg-[#fef2f2] border border-[#fecaca] text-[#dc2626] rounded-[8px] p-[10px] text-[13px] flex items-center gap-[6px]">
                <svg className="size-[15px] shrink-0" fill="none" viewBox="0 0 20 20">
                  <path d="M10 9v4m0 3h.01M10 2a8 8 0 100 16 8 8 0 000-16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>{formError}</span>
              </div>
            )}

            <div className="flex gap-[12px] justify-end">
              <button
                disabled={submitting}
                onClick={() => setShowModal(false)}
                className="px-[16px] py-[10px] rounded-[8px] border border-[#e2e8f0] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#475569] text-[14px] hover:border-[#cbd5e1] bg-white cursor-pointer transition-colors disabled:opacity-40"
              >
                Cancel
              </button>
              <button
                disabled={submitting}
                onClick={saveUser}
                className="px-[16px] py-[10px] rounded-[8px] bg-[#4f46e5] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-white text-[14px] hover:bg-[#4338ca] border-none cursor-pointer transition-colors disabled:opacity-40"
              >
                {submitting ? "Saving..." : editUser ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
