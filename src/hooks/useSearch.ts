import { useState } from "react";
import { Customer } from "@/types/customer";

export const useSearch = (data: Customer[], queryKey: keyof Customer) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 検索結果を取得
  const filteredData = data.filter((item) =>
    item[queryKey].includes(searchQuery)
  );

  return { searchQuery, setSearchQuery, filteredData };
};
