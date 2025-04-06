import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authRepository } from "@/modules/auth/auth.repository";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUserStore = useCurrentUserStore();

  const signin = async () => {
    const user = await authRepository.signin(email, password);
    currentUserStore.set(user);
  };

  if (currentUserStore.currentUser != null) return <Navigate replace to="/" />;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">顧客管理デモアプリ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full" onClick={ signin } disabled={email === '' || password === ''}>
              ログイン
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            登録は
            <Link className="underline" to={'/signup'}>
              こちら
            </Link>
            から
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signin;
