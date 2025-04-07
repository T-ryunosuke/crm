import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomerTypes } from "@/types/customer";

const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

interface CustomerListProps {
  customers: CustomerTypes[];
}

const CustomerList: React.FC<CustomerListProps> = ({ customers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {customers.map((customer, index) => (
        <Card key={index}>
          <CardHeader>
            <p className="text-xs font-mono text-gray-500">{customer.company}</p>
            <CardTitle>{customer.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-700">
              <p><strong>メールアドレス:</strong> {customer.email}</p>
              <p><strong>電話番号:</strong> {customer.phone}</p>
              <p><strong>登録日:</strong> {formatDate(customer.created_at!)}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CustomerList;
