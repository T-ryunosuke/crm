import { useState } from "react";
import { customers } from "@/data/customers";
import { useSearch } from "@/hooks/useSearch";
import { Customer } from "@/types/customer";
import { sortCustomers } from "@/lib/sortCustomers";
import SearchBox from "@/components/dashbord/SearchBox";
import SortButtons from "@/components/dashbord/SortButtons";
import CustomerList from "@/components/dashbord/CustomerList";

const Dashboard = () => {
  const [sortOrder, setSortOrder] = useState<"name" | "registeredAt">("name");

  // 検索クエリとフィルタリング
  const { searchQuery, setSearchQuery, filteredData } = useSearch(customers as Customer[], "name");

  // 並び替え処理
  const sortedCustomers = sortCustomers(filteredData, sortOrder);

  return (
    <main className="flex-1 min-h-screen bg-gray-100 p-6 pt-20 sm:pl-64 overflow-y-auto">
      {/* 検索ボックス */}
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 並び替えボタン */}
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />

      {/* 検索結果がない場合のメッセージ */}
      {sortedCustomers.length === 0 && (
        <p className="text-center text-gray-500">該当する顧客が見つかりませんでした。</p>
      )}

      {/* 顧客情報一覧 */}
      <CustomerList customers={sortedCustomers} />
    </main>
  );
};

export default Dashboard;
