import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useDispatch } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '@/redux/cart/cart.actions';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { name, cover, price, quantity, id } = cartItem;

  const addItemCar = cartItem => {
    dispatch(addItem(cartItem))
  }

  const removeItemCar = cartItem => {
    dispatch(removeItem(cartItem))
  }

  const clearItemCar = cartItem => {
    dispatch(clearItemFromCart(cartItem))
  }

  const handleAddProduct = id => {
    const productId = id;

    router.push({
      pathname: `/product/[id]`,
      query: { id: `${productId}` }
    });
  }

  return (
    <div className="
      w-full
      flex
      text-xl
      items-center
      py-4
      border-custom"
    >
      <div className="w-1/4 cursor-pointer" onClick={() => handleAddProduct(id)}>
        <Image src={cover} alt={name} width={150} height={170} />
      </div>
      <span className="w-1/4"> {name.slice(0, 10)} </span>
      <span className="w-1/4 flex">
        <div className="arrow cursor-pointer" onClick={() => removeItemCar(cartItem)}>
          &#10094;
        </div>
        <span className="mx-2">{quantity}</span>
        <div className="arrow cursor-pointer" onClick={() => addItemCar(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="w-1/4"> {price} </span>
      <div className="remove-button cursor-pointer" onClick={() => clearItemCar(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;