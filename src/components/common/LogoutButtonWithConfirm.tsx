import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useSignout } from "@/modules/auth/use-signout";

type Props = {
  className?: string;
  children?: React.ReactNode; // ボタンの中身をカスタマイズできるように
};

const LogoutButtonWithConfirm = ({ className, children }: Props) => {
  const { signout } = useSignout();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className={className}>
          {children || "ログアウト"}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>ログアウトしますか？</AlertDialogTitle>
          <AlertDialogDescription>
            一度ログアウトすると、再ログインが必要になります。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>キャンセル</AlertDialogCancel>
          <AlertDialogAction onClick={signout}>ログアウト</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutButtonWithConfirm;
