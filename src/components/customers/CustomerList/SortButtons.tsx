import React from "react";

interface SortButtonsProps {
  sortOrder: "name" | "created_at";
  setSortOrder: (order: "name" | "created_at") => void;
}

const SortButtons: React.FC<SortButtonsProps> = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="mb-4">
      <button
        className={`mr-2 p-2 ${sortOrder === "name" ? "bg-blue-700" : "bg-blue-500"} text-white text-xs rounded`}
        onClick={() => setSortOrder("name")}
      >
        顧客名順
      </button>
      <button
        className={`p-2 ${sortOrder === "created_at" ? "bg-blue-700" : "bg-blue-500"} text-white text-xs rounded`}
        onClick={() => setSortOrder("created_at")}
      >
        登録日順
      </button>
    </div>
  );
};

export default SortButtons;
