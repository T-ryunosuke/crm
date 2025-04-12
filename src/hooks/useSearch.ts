import { useState } from "react";
import { CustomerTypes } from "@/types/customer";

export const useSearch = (data: CustomerTypes[]) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 検索結果を取得
  // dataという配列から一つずつオブジェクト(customer)を取り出して、customerのnameかcompanyにsearchQuery（入力された情報）が含まれているかをチェックして、その条件を満たす要素だけを抜き出して、新しい配列（filteredData）を作っている。
  const filteredData = data.filter((customer) => {
    const query = searchQuery.toLowerCase();
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.company.toLowerCase().includes(query)
    );
  });

  return { searchQuery, setSearchQuery, filteredData };
};
