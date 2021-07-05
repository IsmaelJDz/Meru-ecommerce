import React, { useMemo } from "react";
import Image from "next/image";

const CartItemMemo = ({ item: { cover, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <Image src={cover} alt={name} width={40} height={40} />
      <div className="item-details">
        <span className="name"> {name.slice(0, 10)} </span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

const CartItem = ({ item }) => {
  const { quantity } = item;

  const CartItem = useMemo(
    () => <CartItemMemo item={item} />,
    [quantity]
  );
  return CartItem;
};

export default CartItem;
