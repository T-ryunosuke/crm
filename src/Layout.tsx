import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { useCurrentUserStore } from "./modules/auth/current-user.state";


const Layout = () => {
  const { currentUser } = useCurrentUserStore();

  if (currentUser == null) return <Navigate replace to="/signin" />;

  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
