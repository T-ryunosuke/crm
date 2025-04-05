import { User } from "@supabase/supabase-js";
import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Props = {
  user: User;
};

const UserItem: FC<Props> = ({ user }) => {
  return (
    <Card className="bg-gray-700 border-none text-white mx-2 mb-4">
      <CardContent className="px-3 pt-1 pb-2.5 flex items-center gap-2">

        {/* アイコン画像 */}
        <Avatar className="w-12 h-12 mt-1">
          <AvatarImage src="/user_icon.png" alt="User icon" />
          <AvatarFallback>
            {user.user_metadata.name?.charAt(0) ?? "U"}
          </AvatarFallback>
        </Avatar>

        {/* 名前とメール */}
        <div>
          <div className="text-lg font-semibold tracking-wider">
            {user.user_metadata.name}
          </div>
          <div className="text-sm text-gray-300">
            {user.email}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserItem;
