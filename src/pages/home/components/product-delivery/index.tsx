import Item3 from "../../../../assets/images/item-3.png";
import Item4 from "../../../../assets/images/item-4.png";
import Item6 from "../../../../assets/images/item-6.png";

export default function ProductDelivery() {
  const res = {
    data: [
      {
        id: 3,
        img: Item3,
        name: "Solaris Power Bank",
        category: "Furniture",
        to: "Michael Brown",
        status: "Delivered",
      },
      {
        id: 4,
        img: Item4,
        name: "SmartSync Earbuds",
        category: "Bags",
        to: "Anna Marie",
        status: "Shipping",
      },
      {
        id: 6,
        img: Item6,
        name: "TechGrip Phone",
        category: "Fashion",
        to: "Kevin Bryan",
        status: "Confirmed",
      },
    ],
  };

  return (
    <div className="col-span-4 bg-white desktop:pt-6.25 desktop:pb-12 laptop:pt-4.5 laptop:pb-8.5 border border-[#EBEBEB] rounded-md mb-5">
      <div className="flex items-center justify-between desktop:px-6.25 laptop:px-4.5 mb-1.5">
        <h1 className="font-semibold desktop:text-[27px] laptop:text-xl text-[#484848]">Product Delivery</h1>
        <button className="btn">Order Details</button>
      </div>

      <div className="flex flex-col gap-3.5">
        {res.data.map((item) => (
          <div
            key={item.id}
            className="border-b border-[#EFEFEF] desktop:px-6.25 desktop:pt-2.75 px-4.5 laptop:py-2 pb-4"
          >
            <div className="flex items-center gap-2.25 mb-1.75">
              <div className="desktop:max-w-14 desktop:aspect-[56/55] laptop:max-w-10 laptop:aspect-[40/39]">
                <img src={item.img} alt="item" className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold desktop:text-lg laptop:text-sm tracking-[0.02em] text-[#484848]">
                  {item.name}
                </p>
                <p className="tracking-[0.02em] desktop:text-base laptop:text-xs text-[#989898]">{item.category}</p>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="desktop:text-base laptop:text-xs tracking-[0.02em]">
                  <span className="text-[#989898]">To</span>{" "}
                  <span className="font-semibold text-[#484848]">{item.to}</span>
                </p>
              </div>
              <div>
                <p
                  className={`font-semibold desktop:text-xl laptop:text-base tracking-[0.02em] ${
                    item.status === "Delivered"
                      ? "text-[#88B267]"
                      : item.status === "Shipping"
                      ? "text-[#5DBED3]"
                      : "text-[#F39C12]"
                  }`}
                >
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
