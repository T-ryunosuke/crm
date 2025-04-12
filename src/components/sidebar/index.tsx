import { Link, useLocation } from "react-router-dom";
import UserItem from "./UserItem";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";
import LogoutButtonWithConfirm from "../common/LogoutButtonWithConfirm";

const Sidebar = () => {
  const currentUserStore = useCurrentUserStore();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden sm:block w-56 bg-gray-800 text-white h-screen fixed top-14 pt-4">
      <UserItem user={currentUserStore.currentUser!} />
      <div className="pl-2 pb-2 text-sm">メニュー</div>
      <ul>
        <li>
          <Link
            to="/"
            className={`block px-5 py-3 font-mono text-lg tracking-widest hover:bg-gray-700 ${
              isActive("/") ? "bg-gray-700" : ""
            }`}
          >
            顧客一覧
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className={`block px-5 py-3 font-mono text-lg tracking-widest hover:bg-gray-700 ${
              isActive("/create") ? "bg-gray-700" : ""
            }`}
          >
            顧客登録
          </Link>
        </li>
        <li>
          <LogoutButtonWithConfirm className="w-full text-left block px-5 py-3 font-mono text-lg hover:bg-gray-700" />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
