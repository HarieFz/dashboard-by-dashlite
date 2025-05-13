import { useState } from "react";
import { Area, AreaChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { DISCOUNT_PRODUCT_SALES_CHART } from "../../../../constants";

type TimeRangesTypes = "1W" | "1M" | "6M";

export default function DiscountProductSales() {
  const [filterTimeRanges, setFilterTimeRanges] = useState<TimeRangesTypes>("6M");
  const chart = DISCOUNT_PRODUCT_SALES_CHART;

  const getBtnBg = (current: string, selected: TimeRangesTypes) =>
    current === selected && "!bg-[#EAEAEA] !text-[#484848]";

  return (
    <div className="col-span-5 bg-white desktop:ps-6.25 desktop:pe-5 desktop:pt-5.5 desktop:pb-4.5 laptop:ps-4.5 laptop:pe-3.5 laptop:pt-4 laptop:pb-3.25 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex justify-between mb-6">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Discount Product Sales</h1>
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
        <p className="tracking-[0.09em] desktop:text-base laptop:text-xs text-[#989898]">Total sales</p>
        <div className="flex items-center gap-1.25">
          <p className="desktop:text-4xl laptop:text-2xl tracking-[0.02em] text-[#484848]">$8,001</p>
          <p className="font-semibold desktop:text-[22px] laptop:text-base tracking-[0.02em] text-[#88B267]">+63 %</p>
        </div>
      </div>

      <div className="desktop:h-[355px] laptop:h-[252px] desktop:text-base laptop:text-xs">
        <ResponsiveContainer width="100%" height="100%">
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
