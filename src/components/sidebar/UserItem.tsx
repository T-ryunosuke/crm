import { User } from "@supabase/supabase-js";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  user: User;
};

const UserItem: FC<Props> = ({ user }) => {
  const name = user.user_metadata.name ?? "ゲストユーザー";

  return (
    <Card className="bg-gray-700 border-none text-white mx-2 mb-4">
      <CardContent className="px-3 pt-1 pb-2.5 flex items-center gap-1">

        {/* アイコン画像 */}
        <Avatar className="w-12 h-12 mt-1">
          <AvatarImage src="/user_icon.png" alt="User icon" />
          <AvatarFallback>
            {user.user_metadata.name?.charAt(0) ?? "U"}
          </AvatarFallback>
        </Avatar>

        {/* 名前とメール */}
        <div className="pt-0.5">
          <div className="text-md tracking-wider">
            {name}
          </div>
          <div className="text-xs font-thin text-gray-300">
            {user.email || "no_email_address"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserItem;
