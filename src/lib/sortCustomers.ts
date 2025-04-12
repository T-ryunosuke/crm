import { CustomerTypes } from "@/types/customer";

export const sortCustomers = (
  customers: CustomerTypes[],
  sortOrder: "name" | "created_at"
): CustomerTypes[] => {
  return [...customers].sort((a, b) => {
    if (sortOrder === "name") {
      // localeCompareは文字列をロケールに基づいて比較するためのJSメソッド
      return a.furigana.localeCompare(b.furigana, "ja", { sensitivity: "base" });
    } else {
      return new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime();
    }
  });
};
