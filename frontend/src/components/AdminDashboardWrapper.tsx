import AdminDashboard from "@/imports/08AdminDashboard/index";

interface Props {
  navigate: (page: string) => void;
}

// AdminDashboard layout:
// Sidebar: 280px wide
// Content area starts at x=280
// TopBar: py-[20px] + content ~24px = 64px
// DashboardHeader: px-[32px] py-[24px] → "Upload New" button is top-right of content area
// UploadNewCta: approximately top:64+24=88px, right:32px, width:~130px, height:44px

export default function AdminDashboardWrapper({ navigate }: Props) {
  return (
    <div className="size-full relative">
      <AdminDashboard />

      {/* Click overlay for "Upload New" button → documents page */}
      <button
        onClick={() => navigate("documents")}
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
