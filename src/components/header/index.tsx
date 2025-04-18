import { Link } from "react-router-dom";
import ReactLogo from "@/assets/react.svg";
import LogoutButtonWithConfirm from "../common/LogoutButtonWithConfirm";
import { SidebarTrigger } from "../ui/sidebar";
import { SpSidebar } from "../sidebar/SpSidebar";

const Header = () => {
  return (
    <div className="w-full h-16 bg-white shadow-md fixed top-0 flex items-center pl-2 sm:pl-3 sm:px-6 z-50">

      <div className="sm:hidden">
        <SpSidebar />
      </div>

      <div className="flex w-full justify-between">

        <div className="flex items-center">

          <SidebarTrigger className="sm:hidden mt-0.5 ml-1 mr-2 text-gray-800" />

          <Link to="/" className="flex items-center">
            <img src={ReactLogo} alt="React Logo" className="h-8 pr-2 sm:pr-3 cursor-pointer" />
            <div className="mt-0.5 font-mono text-xl text-gray-900 font-semibold tracking-widest">顧客管理</div>
          </Link>
        </div>

        {/* スマホ用 */}
        <div className="flex sm:hidden items-center pr-3 space-x-2">

          {/* ログアウト */}
          <LogoutButtonWithConfirm className="px-2 py-1 text-sm text-gray-800 border border-gray-400 rounded hover:bg-gray-400" />

          {/* 顧客登録ボタン */}
          <Link to="/create">
            <button className="pl-2 pr-3 py-1 bg-cyan-500 text-sm text-white rounded hover:bg-cyan-600">
              ＋顧客登録
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
