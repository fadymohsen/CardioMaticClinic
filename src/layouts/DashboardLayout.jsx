import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar currentLinkId={0}></Sidebar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
