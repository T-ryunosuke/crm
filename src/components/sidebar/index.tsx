import { Link } from "react-router-dom";
import UserItem from "./UserItem";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";

const Sidebar = () => {
  const currentUserStore = useCurrentUserStore();

  return (
    <div className="hidden sm:block w-56 bg-gray-800 text-white h-screen fixed top-14 pt-4">
      <UserItem user={currentUserStore.currentUser!} />
      <div className="pl-2 pb-2 text-sm">メニュー</div>
      <ul>
        <li>
          <Link
            to="/"
            className="block px-5 py-3 font-mono text-lg tracking-widest hover:bg-gray-700"
          >
            顧客一覧
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="block px-5 py-3 font-mono text-lg tracking-widest hover:bg-gray-700"
          >
            顧客登録
          </Link>
        </li>
        <li>
          <Link
            to="/signin"
            className="block px-5 py-3 font-mono text-lg hover:bg-gray-700"
          >
            ログアウト
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
