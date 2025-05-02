type TrendType = "up" | "down" | "neutral";
type DataType = "money" | "count";
export type IconType = "currency-usd" | "cart" | "account-outline" | "wallet-bifold";

interface StatChange {
  percent: string;
  trend: TrendType;
}

interface StatAction {
  label: string | null;
  link: string | null;
}

export interface StatCardData {
  id: string;
  title: string;
  value: string;
  type: DataType;
  change: StatChange;
  description: string;
  icon: IconType;
}
