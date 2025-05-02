import { useEffect, useState } from "react";
import { Area, AreaChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type TimeRangesTypes = "1W" | "1M" | "6M";

export default function DiscountProductSales() {
  const [filterTimeRanges, setFilterTimeRanges] = useState<TimeRangesTypes>("6M");
  const [chart, setChart] = useState<{ month: string; category1: number }[]>([]);

  const getBtnBg = (current: string, selected: TimeRangesTypes) =>
    current === selected && "!bg-[#EAEAEA] !text-[#484848]";

  const getChart = () => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/discount-product-sales-chart", requestOptions)
      .then((response) => response.json())
      .then((result) => setChart(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getChart();
  }, []);

  return (
    <div className="col-span-5 bg-white ps-6.25 pe-5 pt-5.5 pb-4.5 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex justify-between mb-6">
        <h1 className="font-semibold text-[27px] text-[#484848]">Discount Product Sales</h1>
        <div className="flex items-center gap-2.5">
          <button
            className={`btn tracking-[0.09em] ${getBtnBg(filterTimeRanges, "1W")}`}
            onClick={() => setFilterTimeRanges("1W")}
          >
            1W
          </button>
          <button
            className={`btn tracking-[0.09em] ${getBtnBg(filterTimeRanges, "1M")}`}
            onClick={() => setFilterTimeRanges("1M")}
          >
            1M
          </button>
          <button
            className={`btn tracking-[0.09em] ${getBtnBg(filterTimeRanges, "6M")}`}
            onClick={() => setFilterTimeRanges("6M")}
          >
            6M
          </button>
        </div>
      </div>

      <div className="mb-5">
        <p className="tracking-[0.09em] text-[#989898]">Total sales</p>
        <div className="flex items-center gap-1.25">
          <p className="text-4xl tracking-[0.02em] text-[#484848]">$8,001</p>
          <p className="font-semibold text-[22px] tracking-[0.02em] text-[#88B267]">+63 %</p>
        </div>
      </div>

      <div className="h-[355px]">
        <ResponsiveContainer width="100%" height={355}>
          <AreaChart data={chart} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={13} />
            <YAxis axisLine={false} tickLine={false} tickMargin={18} />
            <Tooltip />

            <Area
              type="linear"
              dataKey="category1"
              stackId="1"
              stroke="#88B267"
              fill="#EEF3E9"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
            <ReferenceArea y1={0} fill="#F9F9F9" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
