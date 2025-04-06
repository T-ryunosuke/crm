import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";
import { customerRepository } from "@/modules/customers/customer.repository";


const CreateCustomer = () => {
  const { currentUser } = useCurrentUserStore();
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState<string | null>(null);
  const [furigana, setFurigana] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const customerData = { company, email, furigana, name, phone };
      await customerRepository.create(currentUser!.id, customerData);
      navigate("/");
    } catch (error) {
      console.error("顧客の登録に失敗しました:", error);
    }
  };

  return (
    <main className="flex-1 min-h-screen bg-gray-100 p-6 pt-20 sm:pl-64 overflow-y-auto">
      <h2 className="mb-4 p-2 font-mono border-b-2 text-2xl font-semibold tracking-wider">顧客情報を入力して登録</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">会社名*</label>
          <input
            placeholder="株式会社React"
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        <div className="my-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">メール</label>
          <input
            placeholder="example@react.com"
            id="email"
            type="email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">名前*</label>
          <input
            placeholder="リアクト太郎"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        <div className="my-4">
          <label htmlFor="furigana" className="block text-sm font-medium text-gray-700">ふりがな*</label>
          <input
            placeholder="りあくとたろう"
            id="furigana"
            type="text"
            value={furigana}
            onChange={(e) => setFurigana(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">電話番号</label>
          <input
            placeholder="080-1111-2222"
            id="phone"
            type="text"
            value={phone || ""}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
          type="submit"
          className="py-1 px-6 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            登録
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateCustomer;
