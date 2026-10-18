import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import AdminDashboard from "@/imports/08AdminDashboard/index";

interface Props {
  navigate?: (page: string) => void;
}

// AdminDashboard layout:
// Sidebar: 280px wide
// Content area starts at x=280
// TopBar: py-[20px] + content ~24px = 64px
// DashboardHeader: px-[32px] py-[24px] → "Upload New" button is top-right of content area
// UploadNewCta: approximately top:64+24=88px, right:32px, width:~130px, height:44px

export default function AdminDashboardWrapper({ navigate }: Props) {
  const routerNavigate = useNavigate();
  const { logout } = useAuth();

  const handleNav = (target: string) => {
    if (navigate) {
      navigate(target);
    } else {
      routerNavigate(target.startsWith("/") ? target : `/${target}`);
    }
  };

  return (
    <div className="size-full relative">
      <AdminDashboard />

      {/* Sidebar nav overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ width: 280, pointerEvents: "none", zIndex: 10 }}
      >
        {/* Brand / Logo -> Dashboard */}
        <button
          onClick={() => handleNav("/dashboard")}
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
          onClick={() => handleNav("/chat")}
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
          onClick={() => handleNav("/chat")}
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
          onClick={() => handleNav("/dashboard")}
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
          onClick={() => handleNav("/documents")}
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
          onClick={() => handleNav("/users")}
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
          onClick={() => handleNav("/settings")}
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
            routerNavigate("/login");
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

      {/* Click overlay for "Upload New" button → documents page */}
      <button
        onClick={() => handleNav("/documents")}
        aria-label="Upload New Document"
        style={{
          position: "absolute",
          top: 88,
          right: 32,
          width: 138,
          height: 44,
          cursor: "pointer",
          background: "transparent",
          border: "none",
          zIndex: 10,
        }}
      />
    </div>
  );
}
