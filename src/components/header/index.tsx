import Backburger from "../../assets/icons/backburger.svg?react";
import MessageProcessing from "../../assets/icons/message-processing.svg?react";
import Bell from "../../assets/icons/bell.svg?react";
import Magnify from "../../assets/icons/magnify.svg?react";
import Account from "../../assets/icons/account.svg?react";

export default function Header() {
  return (
    <header className="h-24 px-9 flex items-center justify-between bg-white">
      <div>
        <button className="cursor-pointer">
          <Backburger />
        </button>
      </div>
      <div className="flex items-center gap-9">
        <button className="cursor-pointer">
          <MessageProcessing />
        </button>
        <button className="cursor-pointer">
          <Bell />
        </button>
        <button className="cursor-pointer">
          <Magnify />
        </button>
        <button className="cursor-pointer">
          <Account />
        </button>
      </div>
    </header>
  );
}
