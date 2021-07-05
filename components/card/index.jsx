import React, { memo } from "react";
import Image from "next/image";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import ReactContentLoader from "@/components/skeleton";
import { useObserver } from "@/hooks/useObserver";

import { addItem } from "@/redux/cart/cart.actions";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, element] = useObserver();

  const { id, cover, name, price } = product;
  const shortName = name.slice(0, 30);

  const handleAddCart = (e, product) => {
    e.stopPropagation();
    dispatch(addItem(product));
  };

  const handleClick = productId => {
    router.push({
      pathname: `/product/[id]`,
      query: { id: `${productId}` }
    });
  };

  return (
    <article
      className="
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
      onClick={() => handleClick(id)}
      ref={element}
    >
      {show ? (
        <>
          <Image
            src={cover}
            alt={shortName}
            width={450}
            height={300}
          />
          <p className="px-4 text-gray-600 font-bold">
            Descripción: {shortName + "..."}
          </p>
          <div className="flex items-center justify-between mx-4">
            <p
              className="
            text-gray-600
              transition-all
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-9
              sm:text-xl"
              onClick={e => handleAddCart(e, product)}
            >
              <i className="fas fa-cart-plus"></i>
            </p>
            <p
              className="
              font-bold
              p-4
            text-gray-600"
            >
              ${price} MXN
            </p>
          </div>
        </>
      ) : (
        <ReactContentLoader
          peed={2}
          width={450}
          height={240}
          viewBox="0 0 110 80"
          backgroundColor="#fff"
          foregroundColor="#ddd"
          style={{ width: "100%" }}
        />
      )}
    </article>
  );
};

export default memo(Card, (prevState, nextState) => {
  return prevState.product.cover === nextState.product.cover;
});
