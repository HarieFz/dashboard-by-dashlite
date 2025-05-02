import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import { useEffect, useState } from "react";
import { StatCardData } from "../../../../types/dashboard-stats";
import { iconSelector } from "../../utils/iconSelector";

export default function DashboardStats() {
  const [data, setData] = useState<StatCardData[]>([]);

  const getData = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/dashboard-stats", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="grid grid-cols-4 gap-5 mb-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex justify-between bg-white ps-4.5 pe-6.25 py-6.25 border border-[#EBEBEB] rounded-md"
        >
          <div>
            <p className="text-[#989898] tracking-[0.09em]">{item.title}</p>
            <p className="text-[#484848] text-4xl tracking-[0.02em] mb-2.25">{item.value}</p>
            <p
              className={`${
                item.change.trend === "up"
                  ? "text-[#88B267]"
                  : item.change.trend === "down"
                  ? "text-[#CF5B5B]"
                  : "text-[#BDBDBD]"
              } text-[22px] tracking-[0.02em] mb-3`}
            >
              {item.change.percent}
            </p>
            <span className="flex items-center gap-1.25 cursor-pointer">
              <p className="text-[#495057] tracking-[0.02em]">{item.description}</p>
              <ArrowRight className="text-[#495057] w-4.5 h-4.5" />
            </span>
          </div>

          {(() => {
            const selected = iconSelector(item.icon);
            if (!selected) return null;

            const IconComponent = selected.icon;

            return (
              <div className="rounded-[3px] p-5 h-fit" style={{ backgroundColor: selected.bgColor }}>
                <IconComponent style={{ color: selected.textColor }} />
              </div>
            );
          })()}
        </div>
      ))}
    </section>
  );
}
