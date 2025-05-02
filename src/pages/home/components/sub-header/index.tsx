import CalendarRange from "../../../../assets/icons/calendar-range.svg?react";

export default function SubHeader() {
  return (
    <section className="flex items-center justify-between mb-6">
      <div className="flex flex-col gap-1.5">
        <p className="font-semibold text-lg">Hello World, Welcome!</p>
        <p className="text-[#8B8B8B]">Make your day very happy with us.</p>
      </div>

      <div className="bg-white px-5 py-3 border border-[#EBEBEB] rounded-md flex items-center gap-5 mb-6">
        <time className="text-[#495057] tracking-[0.02em]">01 Feb, 2023 to 28 Feb, 2023</time>
        <span className="text-[#B4B4B4]">
          <CalendarRange />
        </span>
      </div>
    </section>
  );
}
