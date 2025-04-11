import { useNavigate } from "react-router-dom";
import { authRepository } from "./auth.repository";
import { useCurrentUserStore } from "./current-user.state";

export const useSignout = () => {
  const navigate = useNavigate();
  const currentUserStore = useCurrentUserStore();

  const signout = async () => {
    try {
      await authRepository.signout();
    } catch (err) {
      console.error("ログアウトエラー", err);
    } finally {
      currentUserStore.set(undefined);
      navigate("/signin");
    }
  };

  return { signout };
};
