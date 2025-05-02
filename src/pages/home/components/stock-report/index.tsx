import { useState } from "react";
import Pagination from "../../../../components/pagination";
import Item1 from "../../../../assets/images/item-1.png";
import Item2 from "../../../../assets/images/item-2.png";
import Item3 from "../../../../assets/images/item-3.png";
import Item4 from "../../../../assets/images/item-4.png";

export default function StockReport() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const res = {
    data: [
      {
        id: 3,
        img: Item3,
        name: "Solaris Power Bank",
        item_id: "GH77-22",
        date_added: "22 Feb, 2023",
        price: "$2,051",
        status: "In Stock",
        qty: "90 PCS",
      },
      {
        id: 2,
        img: Item2,
        name: "Skyline Backpack",
        item_id: "AK990-2",
        date_added: "22 Feb, 2023",
        price: "$2,051",
        status: "Low Stock",
        qty: "3 PCS",
      },
      {
        id: 4,
        img: Item4,
        name: "SmartSync Earbuds",
        item_id: "HP89-AA",
        date_added: "22 Feb, 2023",
        price: "$2,051",
        status: "Out of stock",
        qty: "0 PCS",
      },
      {
        id: 1,
        img: Item1,
        name: "GlowGrip Flashlight",
        item_id: "IOYB-A2",
        date_added: "22 Feb, 2023",
        price: "$2,051",
        status: "In Stock",
        qty: "99 PCS",
      },
    ],
    meta: {
      currentPage: 1,
      perPage: 6,
      totalItems: 90,
      totalPages: 15,
      nextPage: 2,
      prevPage: null,
    },
  };

  return (
    <div className="col-span-8 bg-white pt-6.25 pb-3.5 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex items-center justify-between px-6.25 mb-1.5">
        <h1 className="font-semibold text-[27px] text-[#484848]">Recent Orders</h1>
        <div className="flex items-center gap-2.5">
          <button className="btn">Category: All</button>
          <button className="btn">Status: All</button>
          <button className="btn">View Stock Items</button>
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#EFEFEF] [&>th]:px-6.25 [&>th]:py-3.5">
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">ITEM</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">ITEM ID</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">DATA ADDED</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">PRICE</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">STATUS</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">QTY</th>
          </tr>
        </thead>
        <tbody>
          {res.data.map((item) => (
            <tr key={item.id} className="border-b border-[#EFEFEF] [&>td]:px-6.25 [&>td]:py-6.5">
              <td>
                <p className="font-semibold text-lg tracking-[0.02em] text-[#484848]">{item.name}</p>
              </td>
              <td>
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.item_id}</p>
              </td>
              <td>
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.date_added}</p>
              </td>
              <td>
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.price}</p>
              </td>
              <td>
                <p
                  className={`text-xl tracking-[0.02em] ${
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
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.qty}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination pageCount={res.meta.totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
