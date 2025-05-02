import BestSellers from "./components/best-sellers";
import DashboardStats from "./components/dashboard-stats";
import DiscountProductSales from "./components/discount-product-sales";
import ProductDelivery from "./components/product-delivery";
import RecentOrders from "./components/recent-orders";
import Revenue from "./components/revenue";
import Sales from "./components/sales";
import StockReport from "./components/stock-report";
import SubHeader from "./components/sub-header";

export default function Home() {
  return (
    <>
      <SubHeader />
      <DashboardStats />
      <Revenue />
      <Sales />
      <BestSellers />
      <section className="grid grid-cols-12 gap-5">
        <RecentOrders />
        <DiscountProductSales />
      </section>
      <section className="grid grid-cols-12 gap-5">
        <ProductDelivery />
        <StockReport />
      </section>
    </>
  );
}
