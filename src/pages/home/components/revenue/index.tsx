import { useState } from "react";
import { Area, AreaChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { REVENUE_CHART, REVENUE_STATS } from "../../../../constants";

type TimeRangesTypes = "ALL" | "1W" | "1M" | "6M" | "1Y";

export default function Revenue() {
  const stats = REVENUE_STATS;
  const chart = REVENUE_CHART;
  const [filterTimeRanges, setFilterTimeRanges] = useState<TimeRangesTypes>("ALL");

  const getBtnBg = (current: string, selected: TimeRangesTypes) =>
    current === selected && "!bg-[#EAEAEA] !text-[#484848]";

  return (
    <section className="bg-white desktop:px-6.25 desktop:pt-5.5 desktop:pb-14 laptop:px-4.5 laptop:pt-4 laptop:pb-10 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex justify-between mb-7">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Revenue</h1>
        <div className="flex items-center gap-2.5">
          <button
            className={`btn tracking-[0.09em] ${getBtnBg(filterTimeRanges, "ALL")}`}
            onClick={() => setFilterTimeRanges("ALL")}
          >
            ALL
          </button>
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
          <button
            className={`btn tracking-[0.09em] ${getBtnBg(filterTimeRanges, "1Y")}`}
            onClick={() => setFilterTimeRanges("1Y")}
          >
            1Y
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8.25">
        {stats.map((item) => (
          <div key={item.id} className="bg-[#FDFDFD] border border-[#EBEBEB] rounded-md desktop:p-6.25 laptop:p-4.5">
            <p className="desktop:text-base laptop:text-xs tracking-[0.09em] text-[#989898]">{item.title}</p>
            <p className="desktop:text-4xl laptop:text-2xl tracking-[0.02em] text-[#484848]">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="desktop:h-[355px] laptop:h-[252px] desktop:text-base laptop:text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chart} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={13} />
            <YAxis axisLine={false} tickLine={false} domain={[0, 800]} tickMargin={18} />
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
            <Area type="linear" dataKey="category2" stackId="1" stroke="#F39C12" fill="#F9F5EE" strokeWidth={2} />
            <Area type="linear" dataKey="category3" stackId="1" stroke="#65A1CB" fill="#E1F0FA" strokeWidth={2} />
            <ReferenceArea y1={0} fill="#F9F9F9" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
