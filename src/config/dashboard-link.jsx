import {
  LayoutDashboard,
  WalletCards,
  TrendingUp,
  User,
  Settings,
} from "lucide-react";

export const DashboardItems = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/dashboard/overview",
  },
  {
    label: "Expense",
    icon: WalletCards,
    href: "/dashboard/expense",
  },
  {
    label: "Income",
    icon: TrendingUp,
    href: "/dashboard/income",
  },
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];