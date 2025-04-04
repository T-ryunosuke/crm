import { Navigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import { useCurrentUserStore } from "./modules/auth/current-user.state";


const Layout = () => {
  const { currentUser } = useCurrentUserStore();

  if (currentUser == null) return <Navigate replace to="/signin" />;

  return (
    <div>
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Layout;
