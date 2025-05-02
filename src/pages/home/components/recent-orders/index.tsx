import { useState } from "react";
import Pagination from "../../../../components/pagination";
import Item3 from "../../../../assets/images/item-3.png";
import Item4 from "../../../../assets/images/item-4.png";
import Item5 from "../../../../assets/images/item-5.png";
import Item6 from "../../../../assets/images/item-6.png";

export default function RecentOrders() {
  const [currentPage, setCurrentPage] = useState(0);
  const [filterByCategory, setFilterByCategory] = useState("All");

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const res = {
    data: [
      {
        id: 3,
        img: Item3,
        name: "Solaris Power Bank",
        category: "Furniture",
        qty: "x4",
        price: "$22",
        amount: "$2,051",
      },
      {
        id: 4,
        img: Item4,
        name: "SmartSync Earbuds",
        category: "Bags",
        qty: "x3",
        price: "$22",
        amount: "$2,051",
      },
      {
        id: 5,
        img: Item5,
        name: "SnapShot Camera",
        category: "Accesories",
        qty: "x3",
        price: "$22",
        amount: "$2,051",
      },
      {
        id: 6,
        img: Item6,
        name: "TechGrip Phone",
        category: "Fashion",
        qty: "x2",
        price: "$22",
        amount: "$2,051",
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
    <div className="col-span-7 bg-white pt-6.25 pb-3.5 border border-[#EBEBEB] rounded-md mb-5">
      <div className="px-6.25 mb-1.5">
        <h1 className="font-semibold text-[27px] text-[#484848]">Recent Orders</h1>
      </div>

      <div className="px-6.25 py-4">
        <ul className="flex items-center gap-6">
          <li
            className={`text-lg tracking-[0.02em] cursor-pointer ${
              filterByCategory === "All" ? "text-[#484848]" : "text-[#989898]"
            }`}
            onClick={() => setFilterByCategory("All")}
          >
            All
          </li>
          <li
            className={`text-lg tracking-[0.02em] cursor-pointer ${
              filterByCategory === "Clothes" ? "text-[#484848]" : "text-[#989898]"
            }`}
            onClick={() => setFilterByCategory("Clothes")}
          >
            Clothes
          </li>
          <li
            className={`text-lg tracking-[0.02em] cursor-pointer ${
              filterByCategory === "Toys" ? "text-[#484848]" : "text-[#989898]"
            }`}
            onClick={() => setFilterByCategory("Toys")}
          >
            Toys
          </li>
          <li
            className={`text-lg tracking-[0.02em] cursor-pointer ${
              filterByCategory === "Electronic" ? "text-[#484848]" : "text-[#989898]"
            }`}
            onClick={() => setFilterByCategory("Electronic")}
          >
            Electronic
          </li>
          <li
            className={`text-lg tracking-[0.02em] cursor-pointer ${
              filterByCategory === "Bags" ? "text-[#484848]" : "text-[#989898]"
            }`}
            onClick={() => setFilterByCategory("Bags")}
          >
            Bags
          </li>
          <li
            className={`text-lg tracking-[0.02em] cursor-pointer ${
              filterByCategory === "Shoes" ? "text-[#484848]" : "text-[#989898]"
            }`}
            onClick={() => setFilterByCategory("Shoes")}
          >
            Shoes
          </li>
        </ul>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#EFEFEF] [&>th]:px-6.25 [&>th]:py-3.5">
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">ITEM</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">QTY</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">PRICE</th>
            <th className="font-normal tracking-[0.09em] text-start text-[#989898]">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {res.data.map((item) => (
            <tr key={item.id} className="border-b border-[#EFEFEF] [&>td]:px-6.25 [&>td]:py-2.75">
              <td>
                <span className="flex items-center gap-2.25">
                  <span>
                    <img src={item.img} alt="item1" className="w-14 h-13.75 object-cover object-center" />
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-lg tracking-[0.02em] text-[#484848]">{item.name}</p>
                    <p className="tracking-[0.02em] text-[#989898]">{item.category}</p>
                  </span>
                </span>
              </td>
              <td>
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.qty}</p>
              </td>
              <td>
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.price}</p>
              </td>
              <td>
                <p className="text-xl tracking-[0.02em] text-[#484848]">{item.amount}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination pageCount={res.meta.totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
