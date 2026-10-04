import { useState } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";
import ForgotPassword from "@/components/ForgotPassword";
import EmployeeDashboardWrapper from "@/components/EmployeeDashboardWrapper";
import ChatWrapper from "@/components/ChatWrapper";
import ChatHistoryWrapper from "@/components/ChatHistoryWrapper";
import DocumentsWrapper from "@/components/DocumentsWrapper";
import UsersWrapper from "@/components/UsersWrapper";
import SettingsWrapper from "@/components/SettingsWrapper";
import AdminDashboardWrapper from "@/components/AdminDashboardWrapper";
import EmployeeSidebarOverlay from "@/components/EmployeeSidebarOverlay";
import ChatbotSourceReferences from "@/imports/06ChatbotSourceReferences/index";
import DocumentDetail from "@/imports/10DocumentDetail/index";

type Page =
  | "login"
  | "register"
  | "forgot"
  | "employeeDashboard"
  | "employeeChat"
  | "chat"
  | "chatSources"
  | "history"
  | "dashboard"
  | "documents"
  | "documentDetail"
  | "users"
  | "settings";

type Role = "admin" | "employee";

// Demo credentials per SRS
const DEMO_USERS: { email: string; password: string; role: Role; name: string }[] = [
  { email: "admin@enterprise.com", password: "Admin@123", role: "admin", name: "Alex Morgan" },
  { email: "employee@enterprise.com", password: "Emp@123", role: "employee", name: "Sarah Jenkins" },
];

// Module-level store for registered users — lives outside React state so it's
// always readable in the login closure regardless of render timing.
const STORAGE_KEY = "rag_app_users";

function loadRegistered(): { email: string; password: string; role: Role; name: string }[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveRegistered(users: { email: string; password: string; role: Role; name: string }[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function registerUser(name: string, email: string, password: string, role: Role) {
  const users = loadRegistered();
  users.push({ name, email: email.trim().toLowerCase(), password, role });
  saveRegistered(users);
}

export function validateLogin(
  email: string,
  password: string,
  selectedRole: Role
): { ok: boolean; role?: Role; name?: string; email?: string; error?: string } {
  const allUsers = [...DEMO_USERS, ...loadRegistered()];
  const match = allUsers.find(
    (u) => u.email === email.trim().toLowerCase() && u.password === password
  );
  if (!match) {
    return { ok: false, error: "Invalid email or password." };
  }
  if (match.role !== selectedRole) {
    return {
      ok: false,
      error: `These credentials belong to a${match.role === "admin" ? "n" : ""} ${match.role} account. Please select the correct role.`,
    };
  }
  return { ok: true, role: match.role, name: match.name, email: match.email };
}

// Sidebar layout constants (same across all inner pages)
const SIDEBAR_W = 280;
const NAV_TOP = 172; // py-32 + logo(32) + gap(32) + newChat(44) + gap(32)
const ITEM_H = 44;
const ITEM_GAP = 4;
const NEW_CHAT_TOP = 96;

function NavBtn({
  top,
  onClick,
  label,
}: {
  top: number;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        pointerEvents: "all",
        position: "absolute",
        top,
        left: 24,
        right: 24,
        height: ITEM_H,
        cursor: "pointer",
        background: "transparent",
        border: "none",
      }}
    />
  );
}

// Admin sidebar: Chat · Dashboard · Documents · Users · Settings
function AdminNavOverlay({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div
      className="absolute inset-y-0 left-0"
      style={{ width: SIDEBAR_W, pointerEvents: "none", zIndex: 10 }}
    >
      <NavBtn top={NEW_CHAT_TOP} onClick={() => navigate("chat")} label="New Conversation" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 0} onClick={() => navigate("chat")} label="Chat" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 1} onClick={() => navigate("dashboard")} label="Dashboard" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 2} onClick={() => navigate("documents")} label="Documents" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 3} onClick={() => navigate("users")} label="Users" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 4} onClick={() => navigate("settings")} label="Settings" />
    </div>
  );
}

// Employee sidebar: Chat · History · Settings
function EmployeeNavOverlay({ navigate }: { navigate: (p: Page) => void }) {
  return (
    <div
      className="absolute inset-y-0 left-0"
      style={{ width: SIDEBAR_W, pointerEvents: "none", zIndex: 10 }}
    >
      <NavBtn top={NEW_CHAT_TOP} onClick={() => navigate("employeeChat")} label="New Conversation" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 0} onClick={() => navigate("employeeChat")} label="Chat" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 1} onClick={() => navigate("history")} label="History" />
      <NavBtn top={NAV_TOP + (ITEM_H + ITEM_GAP) * 2} onClick={() => navigate("settings")} label="Settings" />
    </div>
  );
}


export default function App() {
  const [page, setPage] = useState<Page>("login");
  const [role, setRole] = useState<Role>("employee");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const nav = (p: Page) => setPage(p);
  const navStr = nav as (p: string) => void;

  // ── Auth pages ──────────────────────────────────────────────────────────────

  if (page === "login") {
    return (
      <div className="size-full">
        <Login
          onLogin={(email, password, selectedRole) => {
            const result = validateLogin(email, password, selectedRole);
            if (result.ok && result.role) {
              setRole(result.role);
              setUserName(result.name ?? "");
              setUserEmail(result.email ?? email.trim().toLowerCase());
              nav(result.role === "admin" ? "dashboard" : "employeeDashboard");
            }
            return result;
          }}
          onForgotPassword={() => nav("forgot")}
          onRegister={() => nav("register")}
        />
      </div>
    );
  }

  if (page === "register") {
    return (
      <div className="size-full">
        <Register
          onLogin={() => nav("login")}
          onRegister={(name, email, password, selectedRole) => {
            registerUser(name, email, password, selectedRole as Role);
            nav("login");
          }}
        />
      </div>
    );
  }

  if (page === "forgot") {
    return (
      <div className="size-full">
        <ForgotPassword onBackToLogin={() => nav("login")} />
      </div>
    );
  }

  // ── Employee-only pages ──────────────────────────────────────────────────────

  if (page === "employeeDashboard") {
    return (
      <div className="size-full relative">
        <EmployeeDashboardWrapper navigate={navStr} userName={userName} />
        <EmployeeSidebarOverlay navigate={navStr} activePage="employeeDashboard" userName={userName} />
      </div>
    );
  }

  if (page === "employeeChat") {
    return (
      <div className="size-full relative">
        <ChatWrapper variant="employee" userName={userName} />
        <EmployeeSidebarOverlay navigate={navStr} activePage="employeeChat" userName={userName} />
      </div>
    );
  }

  // ── Shared pages (role-aware nav) ────────────────────────────────────────────

  if (page === "history") {
    return (
      <div className="size-full relative">
        <ChatHistoryWrapper navigate={navStr} chatPage={role === "employee" ? "employeeChat" : "chat"} userName={userName} />
        {role === "employee"
          ? <EmployeeSidebarOverlay navigate={navStr} activePage="history" userName={userName} />
          : <AdminNavOverlay navigate={nav} />}
      </div>
    );
  }

  if (page === "settings") {
    return (
      <div className="size-full">
        <SettingsWrapper navigate={navStr} userName={userName} userEmail={userEmail} role={role} />
      </div>
    );
  }

  // ── Admin-only pages ─────────────────────────────────────────────────────────

  if (page === "chat") {
    return (
      <div className="size-full relative">
        <ChatWrapper userName={userName} />
        <AdminNavOverlay navigate={nav} />
      </div>
    );
  }

  if (page === "documents") {
    return (
      <div className="size-full relative">
        <DocumentsWrapper navigate={navStr} />
        <AdminNavOverlay navigate={nav} />
      </div>
    );
  }

  if (page === "users") {
    return (
      <div className="size-full relative">
        <UsersWrapper />
        <AdminNavOverlay navigate={nav} />
      </div>
    );
  }

  if (page === "chatSources") {
    return (
      <div className="size-full relative">
        <ChatbotSourceReferences />
        <AdminNavOverlay navigate={nav} />
      </div>
    );
  }

  if (page === "documentDetail") {
    return (
      <div className="size-full relative">
        <DocumentDetail />
        <AdminNavOverlay navigate={nav} />
      </div>
    );
  }

  if (page === "dashboard") {
    return (
      <div className="size-full relative">
        <AdminDashboardWrapper navigate={navStr} />
        <AdminNavOverlay navigate={nav} />
      </div>
    );
  }

  return null;
}
