import AccountOutline from "../../../assets/icons/account-outline.svg?react";
import Cart from "../../../assets/icons/cart.svg?react";
import CurrencyUSD from "../../../assets/icons/currency-usd.svg?react";
import WalletBifold from "../../../assets/icons/wallet-bifold.svg?react";

export const iconSelector = (icon: IconType) => {
  switch (icon) {
    case "currency-usd":
      return {
        bgColor: "#EEF3E9",
        textColor: "#88B267",
        icon: CurrencyUSD,
      };
    case "cart":
      return {
        bgColor: "#DBF0F4",
        textColor: "#5DBED3",
        icon: Cart,
      };
    case "account-outline":
      return {
        bgColor: "#F9F5EE",
        textColor: "#F39C12",
        icon: AccountOutline,
      };
    case "wallet-bifold":
      return {
        bgColor: "#E1F0FA",
        textColor: "#65A1CB",
        icon: WalletBifold,
      };
    default:
      break;
  }
};
