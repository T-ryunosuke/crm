import { Customer } from "@/types/customer";

export const sortCustomers = (
  customers: Customer[],
  sortOrder: "name" | "registeredAt"
): Customer[] => {
  return [...customers].sort((a, b) => {
    if (sortOrder === "name") {
      return a.furigana.localeCompare(b.furigana, "ja", { sensitivity: "base" });
    } else {
      return new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime();
    }
  });
};
