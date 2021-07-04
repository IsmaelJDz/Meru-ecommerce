import React, { memo } from 'react'
import Image from 'next/image'

import { useDispatch } from "react-redux";

import { addItem } from '../../redux/cart/cart.actions';

const Card = memo(({product}) => {
  const dispatch = useDispatch();

  const {id, cover, name, price } = product;
  const shortName = name.slice(0, 10);

  const handleAddCart = product => {
    dispatch(addItem(product))
  }

  return (
    <article className="
        shadow-md
        w-5/6
        sm:w-5/12
        lg:w-3/12
        transition-all
        duration-500
        ease-in-out
        transform
        hover:-translate-y-2
        hover:scale-9
        cursor-pointer"
      >
      <Image src={cover} alt={name} width={450} height={300} />
      <p className="
        px-4
      text-gray-600"
      >
        Descripción: {shortName + '...'}
      </p>
      <div className="
          flex
          items-center
          justify-between
          mx-4"
        >
        <p className="
        text-gray-600
          transition-all
          duration-500
          ease-in-out
          transform
          hover:-translate-y-1
          hover:scale-9"
          onClick={() => handleAddCart(product)}
        ><i className="fas fa-cart-plus"></i>
        </p>
        <p className="
          font-bold
          p-4
          text-gray-600"
        >${price} MXN </p>
      </div>
    </article>
  )
}, (prevState, nextState) => {
  return prevState.product.cover === nextState.product.cover
})

export default Card
