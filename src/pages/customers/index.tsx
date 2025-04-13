import { useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { sortCustomers } from "@/lib/sortCustomers";
import SearchBox from "@/components/customers/CustomerList/SearchBox";
import SortButtons from "@/components/customers/CustomerList/SortButtons";
import CustomerList from "@/components/customers/CustomerList";
import { customerRepository } from "@/modules/customers/customer.repository";
import { Customer } from "@/modules/customers/customer.entity";

const Customers = () => {
  // 顧客データを格納
  const [customers, setCustomers] = useState<Customer[]>([]);
  // 並び順の基準（name または created_at）
  const [sortOrder, setSortOrder] = useState<"name" | "created_at">("name");

  // Supabaseから顧客一覧の取得
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await customerRepository.getAll();
        // 取得データをセット(状態更新)
        setCustomers(data);
      } catch (err) {
        console.error("顧客データの取得に失敗しました", err);
      }
    };

    fetchCustomers();
  }, []);

  // customers（顧客リスト）と検索対象（"name"）をuseSearchに送って検索する。
  const { searchQuery, setSearchQuery, filteredData } = useSearch(customers);
  // 検索された顧客データ（filteredData）と並び替える基準（sortOrder）をsortCustomersに送って並び替える。
  const sortedCustomers = sortCustomers(filteredData, sortOrder);

  return (
    <>
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />

      {sortedCustomers.length === 0 ? (
        <p className="text-center text-gray-500">該当する顧客が見つかりませんでした。</p>
      ) : (
        <CustomerList customers={sortedCustomers} />
      )}
    </>
  );
};

export default Customers;
