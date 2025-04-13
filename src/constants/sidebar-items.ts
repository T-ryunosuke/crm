// src/constants/sidebar-items.ts
import { List, Settings, UserRoundPlus } from "lucide-react"

export const sidebarItems = [
  {
    title: "顧客一覧",
    url: "/",
    icon: List,
  },
  {
    title: "顧客登録",
    url: "/create",
    icon: UserRoundPlus,
  },
  {
    title: "設定",
    url: "#",
    icon: Settings,
  },
]
