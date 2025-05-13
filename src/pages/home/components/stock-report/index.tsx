import { useState } from "react";
import { STOCK_REPORT } from "../../../../constants";
import Pagination from "../../../../components/pagination";

export default function StockReport() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const res = STOCK_REPORT;

  return (
    <div className="col-span-8 bg-white desktop:pt-6.25 desktop:pb-3.5 laptop:pt-4.5 laptop:pb-2.5 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex items-center justify-between desktop:px-6.25 laptop:px-4.5 mb-1.5">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Stock Report</h1>
        <div className="flex items-center gap-2.5">
          <button className="btn">Category: All</button>
          <button className="btn">Status: All</button>
          <button className="btn">View Stock Items</button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#EFEFEF] desktop:[&>th]:px-6.25 desktop:[&>th]:py-3.5 laptop:[&>th]:px-4.5 laptop:[&>th]:py-2.5">
            <th className="font-normal desktop:text-base laptop:text-xs tracking-[0.09em] text-start text-[#989898]">
              ITEM
            </th>
            <th className="font-normal desktop:text-base laptop:text-xs tracking-[0.09em] text-start text-[#989898]">
              ITEM ID
            </th>
            <th className="font-normal desktop:text-base laptop:text-xs tracking-[0.09em] text-start text-[#989898]">
              DATA ADDED
            </th>
            <th className="font-normal desktop:text-base laptop:text-xs tracking-[0.09em] text-start text-[#989898]">
              PRICE
            </th>
            <th className="font-normal desktop:text-base laptop:text-xs tracking-[0.09em] text-start text-[#989898]">
              STATUS
            </th>
            <th className="font-normal desktop:text-base laptop:text-xs tracking-[0.09em] text-start text-[#989898]">
              QTY
            </th>
          </tr>
        </thead>
        <tbody>
          {res.data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#EFEFEF] desktop:[&>td]:px-6.25 desktop:[&>td]:py-6.5 laptop:[&>td]:px-4.5 laptop:[&>td]:py-4.75"
            >
              <td>
                <p className="font-semibold desktop:text-lg laptop:text-sm tracking-[0.02em] text-[#484848]">
                  {item.name}
                </p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.item_id}</p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.date_added}</p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.price}</p>
              </td>
              <td>
                <p
                  className={`desktop:text-xl laptop:text-base tracking-[0.02em] ${
                    item.status === "In Stock"
                      ? "text-[#88B267]"
                      : item.status === "Low Stock"
                      ? "text-[#F39C12]"
                      : "text-[#DE7E7E]"
                  }`}
                >
                  {item.status}
                </p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.qty}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination pageCount={res.meta.totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
