import ViewDashboard from "../../assets/icons/view-dashboard.svg?react";
import AccountPlus from "../../assets/icons/account-plus.svg?react";
import AccountCard from "../../assets/icons/account-card.svg?react";
import Web from "../../assets/icons/web.svg?react";
import Post from "../../assets/icons/post-outline.svg?react";
import ChartPie from "../../assets/icons/chart-pie.svg?react";
import CashCheck from "../../assets/icons/cash-check.svg?react";
import FaceAgent from "../../assets/icons/face-agent.svg?react";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menus = [
    { icon: ViewDashboard, name: "Dashboard", pathname: "/" },
    { icon: AccountPlus, name: "User Profile", pathname: "user-profile" },
    { icon: AccountCard, name: "Account", pathname: "account" },
    { icon: Web, name: "Social", pathname: "social" },
    { icon: Post, name: "Blog", pathname: "blog" },
    { icon: ChartPie, name: "FAQs", pathname: "faqs" },
    { icon: CashCheck, name: "Pricing", pathname: "pricing" },
    { icon: FaceAgent, name: "Support Center", pathname: "support-center" },
  ];

  return (
    <aside className="desktop:w-[286px] laptop:w-[200px] fixed inset-0 bg-[#1A1B1C]">
      <div className="px-[33px] h-24 flex items-center border-b border-[#494A4B]">
        <p className="font-normal desktop:text-[42px] laptop:text-3xl laptop:text tracking-[0.03em] text-white">
          Dash<span className="font-light">Lite</span>
        </p>
      </div>

      <div className="px-[33px] pt-[51px]">
        <nav>
          <ul className="flex flex-col gap-[51px]">
            {menus.map((item) => (
              <li
                key={item.pathname}
                className={`flex items-center gap-2 desktop:text-[21px] laptop:text-[15px] tracking-[0.02em] cursor-pointer transition-colors hover:text-white ${
                  pathname === item.pathname ? "text-white" : "text-[#BCBCBC]"
                }`}
              >
                <item.icon className="desktop:text-xl laptop:text-[17px]" /> {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
