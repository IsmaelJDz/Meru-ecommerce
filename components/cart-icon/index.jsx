import React from 'react';
import Image from 'next/image'

import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.utils';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleToggleCart = () => {
    dispatch(toggleCartHidden())
  }

  const itemsCount = () => {
    return selectCartItemsCount(cartItems)
  }

  return (
    <div className="cart-icon" onClick={handleToggleCart}>
      <Image src="/img/shopping-bag.svg" height={30} width={30} />
      <span className="item-count"> {itemsCount()} </span>
    </div>
  );
};

export default CartIcon;