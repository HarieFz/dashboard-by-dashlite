import { JSX } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { SALES_BY_AGE, SALES_BY_GENDER, SALES_BY_LOCATION } from "../../../../constants";

interface PieDef {
  cx: number;
  cy: number;
  startAngle: number;
  endAngle: number;
  paddingAngle: number;
  innerRadius: number;
  outerRadius: number;
  cornerRadius: number;
  midAngle: number;
  index: number;
}

export default function Sales() {
  return (
    <section className="grid grid-cols-4 gap-5 mb-5">
      <SalesByLocation />
      <SalesByAge />
      <SalesByGender />
    </section>
  );
}

function SalesByLocation() {
  const data = SALES_BY_LOCATION;

  return (
    <div className="col-span-2 bg-white desktop:px-6.25 laptop:px-4.5 desktop:pt-6.25 laptop:pt-4.5 desktop:pb-14 laptop:pb-10 border border-[#EBEBEB] rounded-md">
      <div className="flex items-center justify-between mb-6.25">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Sales By Location</h1>
        <button className="btn">Export report</button>
      </div>

      <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.location}</p>
              <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.percentage}</p>
            </div>
            <div className="relative max-w-full w-full h-1.5 bg-[#EFEFEF]">
              <div
                className="absolute top-0 left-0 max-w-full h-1.5 bg-[#A1BFD3]"
                style={{ width: `${item.percentage}` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SalesByAge() {
  const data = SALES_BY_AGE;

  const COLORS = ["#F4A300", "#7AC142", "#4A90E2", "#FCD116", "#C38DFF"];

  const renderCustomLabel = (props: PieDef): JSX.Element | null => {
    const { cx, cy, midAngle, outerRadius, index } = props;
    const RADIAN = Math.PI / 180;

    const labelRadius = (outerRadius ?? 0) + 30;
    const x = (cx ?? 0) + labelRadius * Math.cos(-midAngle * RADIAN);
    const y = (cy ?? 0) + labelRadius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#484848" textAnchor={x > (cx ?? 0) ? "start" : "end"} dominantBaseline="central">
        {data[index]?.name}
      </text>
    );
  };

  return (
    <div className="col-span-1 bg-white desktop:px-6.25 laptop:px-4.5 desktop:pt-6.25 laptop:pt-4.5 desktop:pb-14 laptop:pb-10 border border-[#EBEBEB] rounded-md">
      <div className="flex items-center justify-between mb-6.75">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-sm text-[#484848]">Sales By Age</h1>
        <button className="btn">Export report</button>
      </div>

      <div className="flex justify-center">
        <PieChart width={326} height={240}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={15}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
            label={renderCustomLabel}
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

function SalesByGender() {
  const data = SALES_BY_GENDER;
  const COLORS = ["#F28D6D", "#A4D4EF"];

  const renderCustomLabel = (props: PieDef): JSX.Element | null => {
    const { cx, cy, midAngle, outerRadius, index } = props;
    const RADIAN = Math.PI / 180;

    const labelRadius = (outerRadius ?? 0) + 30;
    const x = (cx ?? 0) + labelRadius * Math.cos(-midAngle * RADIAN);
    const y = (cy ?? 0) + labelRadius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#484848" textAnchor={x > (cx ?? 0) ? "start" : "end"} dominantBaseline="central">
        {data[index]?.name}
      </text>
    );
  };

  return (
    <div className="col-span-1 bg-white desktop:px-6.25 laptop:px-4.5 desktop:pt-6.25 laptop:pt-4.5 desktop:pb-14 laptop:pb-10 border border-[#EBEBEB] rounded-md">
      <div className="flex items-center justify-between mb-6.75">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-sm text-[#484848]">Sales By Gender</h1>
        <button className="btn">Export report</button>
      </div>

      <div className="flex justify-center">
        <PieChart width={326} height={240}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={15}
            outerRadius={90}
            fill="#8884D8"
            paddingAngle={1}
            dataKey="value"
            label={renderCustomLabel}
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
