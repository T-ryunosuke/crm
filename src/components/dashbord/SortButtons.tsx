import React from "react";

interface SortButtonsProps {
  sortOrder: "name" | "registeredAt";
  setSortOrder: (order: "name" | "registeredAt") => void;
}

const SortButtons: React.FC<SortButtonsProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="mb-4">
      <button
        className={`mr-2 p-2 ${sortOrder === "name" ? "bg-blue-700" : "bg-blue-500"} text-white rounded`}
        onClick={() => setSortOrder("name")}
      >
        顧客名順
      </button>
      <button
        className={`p-2 ${sortOrder === "registeredAt" ? "bg-blue-700" : "bg-blue-500"} text-white rounded`}
        onClick={() => setSortOrder("registeredAt")}
      >
        登録日順
      </button>
    </div>
  );
};

export default SortButtons;
