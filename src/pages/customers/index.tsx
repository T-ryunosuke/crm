import { useEffect, useState } from "react";
import { useSearch } from "@/hooks/useSearch";
import { sortCustomers } from "@/lib/sortCustomers";
import SearchBox from "@/components/customers/CustomerList/SearchBox";
import SortButtons from "@/components/customers/CustomerList/SortButtons";
import CustomerList from "@/components/customers/CustomerList";
import { customerRepository } from "@/modules/customers/customer.repository";
import { Customer } from "@/modules/customers/customer.entity";
// ★ Supabaseから取得する関数をimport

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [sortOrder, setSortOrder] = useState<"name" | "created_at">("name");

  // 顧客一覧の取得
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await customerRepository.getAll();
        setCustomers(data); // ★ 取得データをセット
      } catch (err) {
        console.error("顧客データの取得に失敗しました", err);
      }
    };

    fetchCustomers();
  }, []);

  const { searchQuery, setSearchQuery, filteredData } = useSearch(customers, "name");
  const sortedCustomers = sortCustomers(filteredData, sortOrder);

  return (
    <main className="flex-1 min-h-screen bg-gray-100 p-6 pt-20 sm:pl-64 overflow-y-auto">
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />

      {sortedCustomers.length === 0 ? (
        <p className="text-center text-gray-500">該当する顧客が見つかりませんでした。</p>
      ) : (
        <CustomerList customers={sortedCustomers} />
      )}
    </main>
  );
};

export default Customers;
