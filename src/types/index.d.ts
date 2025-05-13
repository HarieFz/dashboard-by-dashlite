type TrendType = "up" | "down" | "neutral";
type DataType = "money" | "count";
type IconType = "currency-usd" | "cart" | "account-outline" | "wallet-bifold";

interface StatChange {
  percent: string;
  trend: TrendType;
}

interface StatAction {
  label: string | null;
  link: string | null;
}

interface StatCardData {
  id: number;
  title: string;
  value: string;
  type: DataType;
  change: StatChange;
  description: string;
  icon: IconType;
}

interface RevenueStatData {
  id: number;
  title: string;
  value: string;
}

interface RevenueChart {
  id: number;
  month: string;
  category1: number;
  category2: number;
  category3: number;
}

interface DiscountProductSalesChart {
  id: number;
  month: string;
  category1: number;
}
