import { User } from "@supabase/supabase-js";
import { atom, useAtom } from "jotai";

// jotaiはatomに値を入れて管理している
// 型はsupabaseのUser型
const currentUserAtom = atom<User>();

export const useCurrentUserStore = () => {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  return { currentUser, set: setCurrentUser };
};

// 使い方
// まず宣言
// const currentUserStore = useCurrentUserStore();

// setでsetCurrentUserにユーザーのデータを渡すことでatomが更新される
// currentUserStore.set(userData);

// atomの中のユーザー情報を参照する場合
// currentUserStore.currentUser;
