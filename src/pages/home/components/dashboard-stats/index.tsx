import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import { iconSelector } from "../../utils/iconSelector";
import { DASHBOARD_STATS } from "../../../../constants";

export default function DashboardStats() {
  const data = DASHBOARD_STATS;

  return (
    <section className="grid grid-cols-4 desktop:gap-5 laptop:gap-[14px] desktop:mb-5 laptop:mb-[14px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="aspect-[375.75/184] flex justify-between bg-white ps-4.5 desktop:pe-6.25 laptop:pe-[18px] desktop:py-6.25 laptop:py-[18px] border border-[#EBEBEB] rounded-md"
        >
          <div>
            <p className="text-[#989898] desktop:text-base laptop:text-xs tracking-[0.09em]">{item.title}</p>

            <p className="text-[#484848] desktop:text-4xl laptop:text-lg tracking-[0.02em] desktop:mb-2.25">
              {item.value}
            </p>

            <p
              className={`tracking-[0.02em] desktop:mb-3 laptop:mb-0.5 desktop:text-[22px] laptop:text-sm ${
                item.change.trend === "up"
                  ? "text-[#88B267]"
                  : item.change.trend === "down"
                  ? "text-[#CF5B5B]"
                  : "text-[#BDBDBD]"
              }`}
            >
              {item.change.percent}
            </p>

            <span className="flex items-center gap-1.25 cursor-pointer">
              <p className="text-[#495057] desktop:text-base laptop:text-sm tracking-[0.02em]">{item.description}</p>
              <ArrowRight className="text-[#495057] desktop:text-[18px] laptop:text-[13px]" />
            </span>
          </div>

          {(() => {
            const selected = iconSelector(item.icon);
            if (!selected) return null;

            const IconComponent = selected.icon;

            return (
              <div
                className="rounded-[3px] desktop:p-5 laptop:p-[14px] h-fit"
                style={{ backgroundColor: selected.bgColor }}
              >
                <IconComponent style={{ color: selected.textColor }} />
              </div>
            );
          })()}
        </div>
      ))}
    </section>
  );
}
