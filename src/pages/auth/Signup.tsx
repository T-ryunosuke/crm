import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authRepository } from "@/modules/auth/auth.repository";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";
import { Turnstile } from "@marsidev/react-turnstile"; // Turnstileをインポート
import { isProd } from "@/lib/env";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const currentUserStore = useCurrentUserStore();

  const signup = async () => {
    if (!captchaToken) {
      alert("Captcha認証を完了してください");
      return;
    }

    const user = await authRepository.signup(name, email, password, captchaToken);
    currentUserStore.set(user);
  };

  if (currentUserStore.currentUser != null) return <Navigate replace to="/" />;

  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <Card className="w-full max-w-sm sm:max-w-md p-3 pb-6 sm:p-6 sm:pt-4 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-mono pb-2 text-2xl tracking-wide">ユーザー登録</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="名前"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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

            {isProd && (
              <Turnstile
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onSuccess={(token) => setCaptchaToken(token)}
                className="w-full mt-4 rounded"
              />
            )}

            <Button
              className="w-full mt-4"
              onClick={signup}
              disabled={name === "" || email === "" || password === "" || !captchaToken} // 入力値とCaptchaをチェック
            >
              登録
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ログインは
            <Link className="underline" to={'/signin'}>
              こちら
            </Link>
            から
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
