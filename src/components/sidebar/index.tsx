import { Link, useLocation } from "react-router-dom";
import UserItem from "./UserItem";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";
import { useSignout } from "@/modules/auth/use-signout";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const Sidebar = () => {
  const currentUserStore = useCurrentUserStore();
  const { signout } = useSignout();
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full text-left block px-5 py-3 font-mono text-lg hover:bg-gray-700">
                ログアウト
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>ログアウトしますか？</AlertDialogTitle>
                <AlertDialogDescription>
                  一度ログアウトすると、再ログインが必要になります。
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>キャンセル</AlertDialogCancel>
                <AlertDialogAction onClick={signout}>ログアウト</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
