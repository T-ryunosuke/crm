import { useState } from "react";
import { CustomerTypes } from "@/types/customer";

export const useSearch = (data: CustomerTypes[], queryKey: "name" | "company") => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // 検索結果を取得
  const filteredData = data.filter((item) =>
    item[queryKey].includes(searchQuery)
  );

  return { searchQuery, setSearchQuery, filteredData };
};
