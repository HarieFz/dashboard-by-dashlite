import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <div className="relative min-h-dvh font-source-sans-pro">
      <Sidebar />
      <div className="desktop:w-[calc(100%-286px)] laptop:w-[calc(100%-200px)] ms-auto bg-[#F4F4F4]">
        <Header />
        <main className="max-w-9xl mx-auto px-9 py-6 min-h-dvh">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
