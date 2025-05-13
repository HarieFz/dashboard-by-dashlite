import Item1 from "../assets/images/item-1.png";
import Item2 from "../assets/images/item-2.png";
import Item3 from "../assets/images/item-3.png";
import Item4 from "../assets/images/item-4.png";
import Item5 from "../assets/images/item-5.png";
import Item6 from "../assets/images/item-6.png";
import Seller1 from "../assets/images/seller-1.png";
import Seller2 from "../assets/images/seller-2.png";
import Seller3 from "../assets/images/seller-3.png";
import Seller4 from "../assets/images/seller-4.png";
import Seller5 from "../assets/images/seller-5.png";
import Seller6 from "../assets/images/seller-6.png";

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

const BEST_SELLING_ITEMS = {
  data: [
    {
      id: 1,
      img: Item1,
      name: "GlowGrip Flashlight",
      category: "Clothing",
      price: "$22",
      orders: "120",
      stock: "201",
      amount: "$2,051",
    },
    {
      id: 2,
      img: Item2,
      name: "Skyline Backpack",
      category: "Store",
      price: "$22",
      orders: "120",
      stock: "No",
      amount: "$2,051",
    },
    {
      id: 3,
      img: Item3,
      name: "Solaris Power Bank",
      category: "Furniture",
      price: "$22",
      orders: "120",
      stock: "201",
      amount: "$2,051",
    },
    {
      id: 4,
      img: Item4,
      name: "SmartSync Earbuds",
      category: "Bags",
      price: "$22",
      orders: "120",
      stock: "210",
      amount: "$2,051",
    },
    {
      id: 5,
      img: Item5,
      name: "SnapShot Camera",
      category: "Accesories",
      price: "$22",
      orders: "120",
      stock: "No",
      amount: "$2,051",
    },
    {
      id: 6,
      img: Item6,
      name: "TechGrip Phone",
      category: "Fashion",
      price: "$22",
      orders: "120",
      stock: "210",
      amount: "$2,051",
    },
  ],
  meta: {
    currentPage: 1,
    perPage: 6,
    totalItems: 90,
    totalPages: 15,
    nextPage: 2,
    prevPage: null,
  },
};

const TOP_SELLERS = {
  data: [
    {
      id: 1,
      img: Seller1,
      store: "GlowGrip Flashlight",
      name: "Clothing",
      category: "Clothing",
      orders: "120",
      stock: "201",
      amount: "$2,051",
      increase: "40%",
    },
    {
      id: 2,
      img: Seller2,
      store: "Skyline Backpack",
      name: "Store",
      category: "Store",
      orders: "120",
      stock: "No",
      amount: "$2,051",
      increase: "55%",
    },
    {
      id: 3,
      img: Seller3,
      store: "Solaris Power Bank",
      name: "Furniture",
      category: "Furniture",
      orders: "120",
      stock: "201",
      amount: "$2,051",
      increase: "12%",
    },
    {
      id: 4,
      img: Seller4,
      store: "SmartSync Earbuds",
      name: "Bags",
      category: "Bags",
      orders: "120",
      stock: "210",
      amount: "$2,051",
      increase: "10%",
    },
    {
      id: 5,
      img: Seller5,
      store: "SnapShot Camera",
      name: "Accesories",
      category: "Accesories",
      orders: "120",
      stock: "No",
      amount: "$2,051",
      increase: "11%",
    },
    {
      id: 6,
      img: Seller6,
      store: "TechGrip Phone",
      name: "Fashion",
      category: "Fashion",
      orders: "120",
      stock: "210",
      amount: "$2,051",
      increase: "88%",
    },
  ],
  meta: {
    currentPage: 1,
    perPage: 6,
    totalItems: 90,
    totalPages: 15,
    nextPage: 2,
    prevPage: null,
  },
};

const PRODUCT_DELIVERIES = {
  data: [
    {
      id: 3,
      img: Item3,
      name: "Solaris Power Bank",
      category: "Furniture",
      to: "Michael Brown",
      status: "Delivered",
    },
    {
      id: 4,
      img: Item4,
      name: "SmartSync Earbuds",
      category: "Bags",
      to: "Anna Marie",
      status: "Shipping",
    },
    {
      id: 6,
      img: Item6,
      name: "TechGrip Phone",
      category: "Fashion",
      to: "Kevin Bryan",
      status: "Confirmed",
    },
  ],
};

const RECENT_ORDERS = {
  data: [
    {
      id: 3,
      img: Item3,
      name: "Solaris Power Bank",
      category: "Furniture",
      qty: "x4",
      price: "$22",
      amount: "$2,051",
    },
    {
      id: 4,
      img: Item4,
      name: "SmartSync Earbuds",
      category: "Bags",
      qty: "x3",
      price: "$22",
      amount: "$2,051",
    },
    {
      id: 5,
      img: Item5,
      name: "SnapShot Camera",
      category: "Accesories",
      qty: "x3",
      price: "$22",
      amount: "$2,051",
    },
    {
      id: 6,
      img: Item6,
      name: "TechGrip Phone",
      category: "Fashion",
      qty: "x2",
      price: "$22",
      amount: "$2,051",
    },
  ],
  meta: {
    currentPage: 1,
    perPage: 6,
    totalItems: 90,
    totalPages: 15,
    nextPage: 2,
    prevPage: null,
  },
};

const SALES_BY_LOCATION = [
  {
    location: "USA",
    percentage: "70%",
  },
  {
    location: "United Kingdom",
    percentage: "20%",
  },
  {
    location: "Australia",
    percentage: "5%",
  },
  {
    location: "India",
    percentage: "3%",
  },
  {
    location: "Other",
    percentage: "2%",
  },
];

const SALES_BY_AGE = [
  { name: "11-18", value: 15 },
  { name: "18-25", value: 25 },
  { name: "25-30", value: 30 },
  { name: "30-40", value: 20 },
  { name: "40-60", value: 10 },
];

const SALES_BY_GENDER = [
  { name: "Female", value: 75 },
  { name: "Male", value: 25 },
];

const STOCK_REPORT = {
  data: [
    {
      id: 3,
      img: Item3,
      name: "Solaris Power Bank",
      item_id: "GH77-22",
      date_added: "22 Feb, 2023",
      price: "$2,051",
      status: "In Stock",
      qty: "90 PCS",
    },
    {
      id: 2,
      img: Item2,
      name: "Skyline Backpack",
      item_id: "AK990-2",
      date_added: "22 Feb, 2023",
      price: "$2,051",
      status: "Low Stock",
      qty: "3 PCS",
    },
    {
      id: 4,
      img: Item4,
      name: "SmartSync Earbuds",
      item_id: "HP89-AA",
      date_added: "22 Feb, 2023",
      price: "$2,051",
      status: "Out of stock",
      qty: "0 PCS",
    },
    {
      id: 1,
      img: Item1,
      name: "GlowGrip Flashlight",
      item_id: "IOYB-A2",
      date_added: "22 Feb, 2023",
      price: "$2,051",
      status: "In Stock",
      qty: "99 PCS",
    },
  ],
  meta: {
    currentPage: 1,
    perPage: 6,
    totalItems: 90,
    totalPages: 15,
    nextPage: 2,
    prevPage: null,
  },
};

export {
  DASHBOARD_STATS,
  REVENUE_STATS,
  REVENUE_CHART,
  DISCOUNT_PRODUCT_SALES_CHART,
  BEST_SELLING_ITEMS,
  TOP_SELLERS,
  PRODUCT_DELIVERIES,
  RECENT_ORDERS,
  SALES_BY_LOCATION,
  SALES_BY_AGE,
  SALES_BY_GENDER,
  STOCK_REPORT,
};
