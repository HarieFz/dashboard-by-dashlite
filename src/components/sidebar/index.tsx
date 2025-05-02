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
    <aside className="w-[286px] fixed inset-0 bg-[#1A1B1C]">
      <div className="px-[33px] h-24 flex items-center border-b border-[#494A4B]">
        <p className="font-normal text-[42px] tracking-[0.03em] text-white">
          Dash<span className="font-light">Lite</span>
        </p>
      </div>

      <div className="px-[33px] pt-[51px]">
        <nav>
          <ul className="flex flex-col gap-[51px]">
            {menus.map((item) => (
              <li
                key={item.pathname}
                className={`flex items-center gap-2 text-[21px] tracking-[0.02em] cursor-pointer transition-colors hover:text-white ${
                  pathname === item.pathname ? "text-white" : "text-[#BCBCBC]"
                }`}
              >
                <item.icon /> {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
