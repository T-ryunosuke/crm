import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useCurrentUserStore } from "./modules/auth/current-user.state";
import { SidebarProvider } from "./components/ui/sidebar";


const Layout = () => {
  const { currentUser } = useCurrentUserStore();

  if (currentUser == null) return <Navigate replace to="/signin" />;

  return (
    <SidebarProvider>
      <Header />
      <Sidebar />
      <main
        className="flex-1 h-screen bg-gray-100 p-6 pt-20 sm:pl-64 overflow-y-auto"
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
