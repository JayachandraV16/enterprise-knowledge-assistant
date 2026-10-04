import EmployeeDashboard from "@/imports/04EmployeeDashboard/index";

interface Props {
  navigate: (page: string) => void;
  userName?: string;
}

// Sidebar layout constants (matches App.tsx)
const SIDEBAR_W = 280;
const NAV_TOP = 172;
const ITEM_H = 44;
const ITEM_GAP = 4;
const NEW_CHAT_TOP = 96;

// Quick action card positions (right content area, empirically positioned to match Figma layout)
// The content area starts at x=280. Cards are in a row, approximately:
// TopBar is ~64px, then welcome section ~80px, then QuickActions row starts at y~200
// Cards are roughly equal thirds of the content width starting at ~32px margin from sidebar edge
const TOPBAR_H = 64;
const WELCOME_H = 112; // header row height estimate
const CARDS_Y = TOPBAR_H + WELCOME_H; // ~176px from top
const CARD_H = 160; // estimated card height

export default function EmployeeDashboardWrapper({ navigate, userName: _userName }: Props) {
  return (
    <div className="size-full relative">
      {/* Static import for full visual render */}
      <EmployeeDashboard />


      {/* Sidebar nav overlay */}
      <div
        className="absolute inset-y-0 left-0"
        style={{ width: SIDEBAR_W, pointerEvents: "none", zIndex: 10 }}
      >
        {/* New Conversation button */}
        <button
          onClick={() => navigate("employeeChat")}
          aria-label="New Conversation"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: NEW_CHAT_TOP,
            left: 24,
            right: 24,
            height: ITEM_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
        {/* Chat nav */}
        <button
          onClick={() => navigate("employeeChat")}
          aria-label="Chat"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: NAV_TOP + (ITEM_H + ITEM_GAP) * 0,
            left: 24,
            right: 24,
            height: ITEM_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
        {/* History nav */}
        <button
          onClick={() => navigate("history")}
          aria-label="History"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: NAV_TOP + (ITEM_H + ITEM_GAP) * 1,
            left: 24,
            right: 24,
            height: ITEM_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
        {/* Settings nav */}
        <button
          onClick={() => navigate("settings")}
          aria-label="Settings"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: NAV_TOP + (ITEM_H + ITEM_GAP) * 2,
            left: 24,
            right: 24,
            height: ITEM_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
      </div>

      {/* Quick action card overlays */}
      <div
        className="absolute"
        style={{ left: SIDEBAR_W, right: 0, top: 0, bottom: 0, pointerEvents: "none", zIndex: 10 }}
      >
        {/* Quick action cards row — three cards side by side */}
        {/* "New Chat" card */}
        <button
          onClick={() => navigate("employeeChat")}
          aria-label="New Chat"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: CARDS_Y,
            left: 32,
            width: "calc(33% - 40px)",
            height: CARD_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
        {/* "View History" card */}
        <button
          onClick={() => navigate("history")}
          aria-label="View History"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: CARDS_Y,
            left: "calc(33% + 12px)",
            width: "calc(33% - 40px)",
            height: CARD_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />
        {/* "View Guide" card — no navigation target, just visual */}
        <button
          onClick={() => {}}
          aria-label="View Guide"
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: CARDS_Y,
            left: "calc(66% + 4px)",
            width: "calc(34% - 36px)",
            height: CARD_H,
            cursor: "pointer",
            background: "transparent",
            border: "none",
          }}
        />

        {/* Recent conversations: Resume buttons — approximately 3 rows */}
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => navigate("employeeChat")}
            aria-label="Resume conversation"
            style={{
              pointerEvents: "all",
              position: "absolute",
              top: CARDS_Y + CARD_H + 80 + 32 + i * 72,
              right: 32,
              width: 80,
              height: 36,
              cursor: "pointer",
              background: "transparent",
              border: "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}
