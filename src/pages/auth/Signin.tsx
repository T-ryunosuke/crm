import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authRepository } from "@/modules/auth/auth.repository";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";
import { Turnstile } from "@marsidev/react-turnstile";
import { isProd } from "@/lib/env";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const currentUserStore = useCurrentUserStore();


  const signin = async () => {
    // 本番環境かつcaptchaTokenがない時
    if (isProd && !captchaToken) return alert("Cloudflare認証ができていません");

    const user = await authRepository.signin(email, password, captchaToken);
    currentUserStore.set(user);
  };

  const guestSignin = async () => {
    if (isProd && !captchaToken) return alert("認証を完了してください");

    const user = await authRepository.guestSignin(captchaToken);
    currentUserStore.set(user);
  };

  if (currentUserStore.currentUser != null) return <Navigate replace to="/" />;

  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <Card className="w-full max-w-sm sm:max-w-md p-2 pt-3 sm:p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-mono pb-3 text-xl tracking-wider">顧客管理デモアプリ</CardTitle>
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

            {/* Turnstile をここに挿入 */}
            {isProd && (
              <Turnstile
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onSuccess={(token) => setCaptchaToken(token)}
                className="w-full mt-2 rounded"
              />
            )}

            <Button className="w-full" onClick={ signin } disabled={email === '' || password === ''}>
              ログイン
            </Button>
          </div>

          <Button variant="outline" className="w-full mt-4" onClick={guestSignin}>
            ゲストログイン
          </Button>

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
