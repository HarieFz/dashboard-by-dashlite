const DASHBOARD_STATS: StatCardData[] = [
  {
    id: 1,
    title: "TOTAL EARNINGS",
    value: "$9,000",
    type: "money",
    change: {
      percent: "+63%",
      trend: "up",
    },
    description: "Net earnings",
    icon: "currency-usd",
  },
  {
    id: 2,
    title: "ORDERS",
    value: "22,220",
    type: "count",
    change: {
      percent: "-44%",
      trend: "down",
    },
    description: "View all orders",
    icon: "cart",
  },
  {
    id: 3,
    title: "CUSTOMERS",
    value: "12,222",
    type: "count",
    change: {
      percent: "+63%",
      trend: "up",
    },
    description: "View Customers",
    icon: "account-outline",
  },
  {
    id: 4,
    title: "BALANCE",
    value: "$9,000",
    type: "money",
    change: {
      percent: "+0%",
      trend: "neutral",
    },
    description: "Withdraw",
    icon: "wallet-bifold",
  },
];

const REVENUE_STATS: RevenueStatData[] = [
  {
    id: 1,
    title: "ORDERS",
    value: "8,001",
  },
  {
    id: 2,
    title: "EARNINGS",
    value: "$6,111",
  },
  {
    id: 3,
    title: "REFUNDS",
    value: "$9,000",
  },
  {
    id: 4,
    title: "CONVERTION RATE",
    value: "21%",
  },
];

const REVENUE_CHART: RevenueChart[] = [
  { id: 1, month: "Jan", category1: 160, category2: 140, category3: 300 },
  { id: 2, month: "Feb", category1: 130, category2: 140, category3: 320 },
  { id: 3, month: "Mar", category1: 200, category2: 160, category3: 380 },
  { id: 4, month: "Apr", category1: 120, category2: 130, category3: 240 },
  { id: 5, month: "May", category1: 135, category2: 140, category3: 350 },
  { id: 6, month: "Jun", category1: 60, category2: 120, category3: 200 },
  { id: 7, month: "Jul", category1: 125, category2: 135, category3: 250 },
  { id: 8, month: "Aug", category1: 110, category2: 120, category3: 200 },
  { id: 9, month: "Sep", category1: 125, category2: 130, category3: 340 },
  { id: 10, month: "Oct", category1: 75, category2: 125, category3: 280 },
  { id: 11, month: "Nov", category1: 150, category2: 190, category3: 370 },
  { id: 12, month: "Dec", category1: 180, category2: 130, category3: 400 },
];

const DISCOUNT_PRODUCT_SALES_CHART: DiscountProductSalesChart[] = [
  { id: 1, month: "Jan", category1: 170 },
  { id: 2, month: "Feb", category1: 150 },
  { id: 3, month: "Mar", category1: 200 },
  { id: 4, month: "Apr", category1: 180 },
  { id: 5, month: "May", category1: 170 },
  { id: 6, month: "Jun", category1: 210 },
];

export { DASHBOARD_STATS, REVENUE_STATS, REVENUE_CHART, DISCOUNT_PRODUCT_SALES_CHART };
