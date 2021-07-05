import React from "react";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "@/redux/cart/cart.actions";
import { selectCartItemsCount } from "@/redux/cart/cart.utils";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleToggleCart = () => {
    dispatch(toggleCartHidden());
  };

  const itemsCount = () => {
    return selectCartItemsCount(cartItems);
  };

  return (
    <div
      className="cart-icon relative cursor-pointer"
      onClick={handleToggleCart}
    >
      <Image
        src="/img/shopping-bag.svg"
        height={30}
        width={30}
        alt="cart"
      />
      <span
        className="
        absolute
        font-bold
        w-full
        left-0
        right-0
        bottom-1
        text-center
        text-md"
      >
        {" "}
        {itemsCount()}
      </span>
    </div>
  );
};

export default CartIcon;
