import React from "react";
import { Search } from "lucide-react";

interface SearchBoxProps {
  // 入力欄に表示する現在の文字列
  searchQuery: string;
  // 文字を入力したときに呼び出されるコールバック関数
  setSearchQuery: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mb-4">

      {/* 虫眼鏡アイコンを絶対配置 */}
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

      <input
        type="text"
        className="w-full pl-10 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        placeholder="顧客名や会社名で検索"
        aria-label="顧客名や会社名で検索"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
