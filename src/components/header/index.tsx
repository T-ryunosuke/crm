import { Link } from "react-router-dom";
import ReactLogo from "@/assets/react.svg";
import { useSignout } from "@/modules/auth/use-signout";

const Header = () => {
  const { signout } = useSignout();
  return (
    <div className="w-full h-16 bg-white shadow-md fixed top-0 flex items-center pl-3 sm:px-6 z-50">
      <div className="flex w-full justify-between">

        <Link to="/" className="flex items-center space-x-3">
          <img src={ReactLogo} alt="React Logo" className="h-8 cursor-pointer" />
          <div className="pt-1 font-mono text-xl text-gray-900 font-semibold tracking-widest">顧客管理</div>
        </Link>

        {/* スマホ用 */}
        <div className="flex sm:hidden items-center pr-6 space-x-4">

          {/* ログアウトボタン */}
          <button
            onClick={signout}
            className="px-2 py-1 text-sm text-gray-800 border border-gray-400 rounded hover:bg-gray-400">
            ログアウト
          </button>

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
