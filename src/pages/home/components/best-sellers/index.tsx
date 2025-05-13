import { useState } from "react";
import Item1 from "../../../../assets/images/item-1.png";
import Item2 from "../../../../assets/images/item-2.png";
import Item3 from "../../../../assets/images/item-3.png";
import Item4 from "../../../../assets/images/item-4.png";
import Item5 from "../../../../assets/images/item-5.png";
import Item6 from "../../../../assets/images/item-6.png";
import Seller1 from "../../../../assets/images/seller-1.png";
import Seller2 from "../../../../assets/images/seller-2.png";
import Seller3 from "../../../../assets/images/seller-3.png";
import Seller4 from "../../../../assets/images/seller-4.png";
import Seller5 from "../../../../assets/images/seller-5.png";
import Seller6 from "../../../../assets/images/seller-6.png";
import ChevronUp from "../../../../assets/icons/chevron-up.svg?react";
import Pagination from "../../../../components/pagination";

export default function BestSellers() {
  return (
    <section className="grid grid-cols-2 gap-5">
      <BestSellingItems />
      <TopSellers />
    </section>
  );
}

function BestSellingItems() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const res = {
    data: [
      {
        id: 1,
        img: Item1,
        name: "GlowGrip Flashlight",
        category: "Clothing",
        price: "$22",
        orders: "120",
        stock: "201",
        amount: "$2,051",
      },
      {
        id: 2,
        img: Item2,
        name: "Skyline Backpack",
        category: "Store",
        price: "$22",
        orders: "120",
        stock: "No",
        amount: "$2,051",
      },
      {
        id: 3,
        img: Item3,
        name: "Solaris Power Bank",
        category: "Furniture",
        price: "$22",
        orders: "120",
        stock: "201",
        amount: "$2,051",
      },
      {
        id: 4,
        img: Item4,
        name: "SmartSync Earbuds",
        category: "Bags",
        price: "$22",
        orders: "120",
        stock: "210",
        amount: "$2,051",
      },
      {
        id: 5,
        img: Item5,
        name: "SnapShot Camera",
        category: "Accesories",
        price: "$22",
        orders: "120",
        stock: "No",
        amount: "$2,051",
      },
      {
        id: 6,
        img: Item6,
        name: "TechGrip Phone",
        category: "Fashion",
        price: "$22",
        orders: "120",
        stock: "210",
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
    <div className="bg-white desktop:pt-6.25 laptop:pt-4.5 desktop:pb-3.5 laptop:pb-2.5 border border-[#EBEBEB] rounded-md mb-5 laptop:h-fit">
      <div className="flex items-center justify-between desktop:px-6.25 laptop:px-4.5 mb-1.5">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Best Selling Items</h1>
        <button className="btn">Sort: By All</button>
      </div>

      <table className="w-full">
        <tbody>
          {res.data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#EFEFEF] desktop:[&>td]:px-6.25 desktop:[&>td]:py-2.75 laptop:[&>td]:px-4.5 laptop:[&>td]:py-2"
            >
              <td>
                <span className="flex items-center gap-2.25">
                  <span className="desktop:max-w-14 desktop:aspect-[56/55] laptop:max-w-10 laptop:aspect-[40/39] shrink-0">
                    <img src={item.img} alt="item1" className="w-full h-full object-cover object-center" />
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold desktop:text-lg laptop:text-sm tracking-[0.02em] text-[#484848]">
                      {item.name}
                    </p>
                    <p className="tracking-[0.02em] desktop:text-base laptop:text-xs text-[#989898]">{item.category}</p>
                  </span>
                </span>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.price}</p>
                <p className="desktop:text-base laptop:text-xs tracking-[0.02em] text-[#989898]">Price</p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.orders}</p>
                <p className="desktop:text-base laptop:text-xs tracking-[0.02em] text-[#989898]">Orders</p>
              </td>
              <td>
                <p
                  className={`desktop:text-xl laptop:text-base tracking-[0.02em] ${
                    item.stock === "No" ? "text-[#DE7E7E]" : "text-[#484848]"
                  }`}
                >
                  {item.stock}
                </p>
                <p className="desktop:text-base laptop:text-xs tracking-[0.02em] text-[#989898]">Stock</p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.amount}</p>
                <p className="desktop:text-base laptop:text-xs tracking-[0.02em] text-[#989898]">Amount</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination pageCount={res.meta.totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}

function TopSellers() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  const res = {
    data: [
      {
        id: 1,
        img: Seller1,
        store: "GlowGrip Flashlight",
        name: "Clothing",
        category: "Clothing",
        orders: "120",
        stock: "201",
        amount: "$2,051",
        increase: "40%",
      },
      {
        id: 2,
        img: Seller2,
        store: "Skyline Backpack",
        name: "Store",
        category: "Store",
        orders: "120",
        stock: "No",
        amount: "$2,051",
        increase: "55%",
      },
      {
        id: 3,
        img: Seller3,
        store: "Solaris Power Bank",
        name: "Furniture",
        category: "Furniture",
        orders: "120",
        stock: "201",
        amount: "$2,051",
        increase: "12%",
      },
      {
        id: 4,
        img: Seller4,
        store: "SmartSync Earbuds",
        name: "Bags",
        category: "Bags",
        orders: "120",
        stock: "210",
        amount: "$2,051",
        increase: "10%",
      },
      {
        id: 5,
        img: Seller5,
        store: "SnapShot Camera",
        name: "Accesories",
        category: "Accesories",
        orders: "120",
        stock: "No",
        amount: "$2,051",
        increase: "11%",
      },
      {
        id: 6,
        img: Seller6,
        store: "TechGrip Phone",
        name: "Fashion",
        category: "Fashion",
        orders: "120",
        stock: "210",
        amount: "$2,051",
        increase: "88%",
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
    <div className="bg-white desktop:pt-6.25 laptop:pt-4.5 desktop:pb-3.5 laptop:pb-2.5 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex items-center justify-between desktop:px-6.25 laptop:px-4.5 mb-1.5">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Top Sellers</h1>
        <button className="btn">Report</button>
      </div>

      <table className="w-full">
        <tbody>
          {res.data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-[#EFEFEF] desktop:[&>td]:px-6.25 desktop:[&>td]:py-2.75 laptop:[&>td]:px-[18px] laptop:[&>td]:py-[8px]"
            >
              <td>
                <span className="flex items-center gap-2.25">
                  <span className="desktop:max-w-14 desktop:aspect-[56/55] laptop:max-w-10 laptop:aspect-[40/39] shrink-0">
                    <img src={item.img} alt="item1" className="w-full h-full object-cover object-center" />
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold desktop:text-lg laptop:text-sm tracking-[0.02em] line-clamp-1 text-[#484848]">
                      {item.store}
                    </p>
                    <p className="tracking-[0.02em] desktop:text-base laptop:text-xs text-[#989898]">{item.name}</p>
                  </span>
                </span>
              </td>
              <td>
                <p className="tracking-[0.02em] desktop:text-base laptop:text-xs text-[#989898]">{item.category}</p>
              </td>
              <td>
                <p
                  className={`desktop:text-xl laptop:text-base tracking-[0.02em] ${
                    item.stock === "No" ? "text-[#DE7E7E]" : "text-[#484848]"
                  }`}
                >
                  {item.stock}
                </p>
                <p className="desktop:text-base laptop:text-xs tracking-[0.02em] text-[#989898]">Stock</p>
              </td>
              <td>
                <p className="desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">{item.amount}</p>
              </td>
              <td>
                <span className="flex items-center gap-1.5">
                  <p className="font-semibold desktop:text-xl laptop:text-base tracking-[0.02em] text-[#484848]">
                    {item.increase}
                  </p>
                  <ChevronUp className="text-[#88B267] desktop:text-2xl laptop:text-lg" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination pageCount={res.meta.totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
}
