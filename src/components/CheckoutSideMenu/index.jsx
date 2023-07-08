import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import "./styles.css";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCartContext);
  console.log("CART: ", cartProducts);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {cartProducts?.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
