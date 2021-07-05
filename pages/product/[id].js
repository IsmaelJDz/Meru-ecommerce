import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Layout from "@/Layout/index";
import Button from "@/components/button";

import { filterProducts } from "@/redux/cart/cart.utils";
import getData from "@/utils/index";

import { addItem } from "@/redux/cart/cart.actions";

/**
 *
 * @param {*} api -> EndPoint -> url"
 * @returns array dynamic paths
 */

export const getStaticPaths = async () => {
  const resProductsPaths = await getData(
    "https://products-api-meru.vercel.app/api/products"
  ).catch(err => {
    console.log("ERROR", err);
  });

  const paths = resProductsPaths.map(item => ({
    params: {
      id: item.id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
};

/**
 *
 * @param {*} api -> EndPoint -> url "should be specified 'id'"
 * @returns specific data by id product
 */

export async function getStaticProps({ params }) {
  const resProductsStatic = await getData(
    "https://products-api-meru.vercel.app/api/products"
  ).catch(err => {
    console.log("ERROR", err);
  });

  const data = filterProducts(resProductsStatic, params.id);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data"
      }
    };
  }

  if (data.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      product: data
    },
    revalidate: 60
  };
}

const ProductName = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { cover, name, price } = product;

  const handleAddProduct = () => {
    dispatch(addItem(product));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Layout>
      <div
        className="
        max-w-screen-xl
        sm:mx-auto
        mx-14
        py-2
        sm:px-8
        cursor-pointer
        text-2xl
        sm:text-base
      "
      >
        <Link href="/">
          <a>
            <p>INICIO &#10095;</p>
          </a>
        </Link>
      </div>
      <div
        className="
        flex
        items-center
        max-w-screen-xl
        mx-auto
        flex-col
        w-5/6
        sm:flex-row"
      >
        <div className="px-2">
          <Image src={cover} alt={name} width={550} height={400} />
          <p className="font-bold text-center text-4xl text-gray-900">
            $ {price} MXN
          </p>
        </div>
        <div className="w-full">
          <p
            className="
            text-2xl
            sm:text-xl
            sm:border-l-2
            border-gray-900
            text-gray-900
            px-4
            py-4"
          >
            {name}
          </p>
          <div className="flex justify-between py-4">
            <p
              className="text-gray-600
              transition-all
              duration-500
              ease-in-out
              transform
              hover:-translate-y-1
              hover:scale-9
              cursor-pointer
              text-2xl
              sm:text-base"
              onClick={() => handleAddProduct()}
            >
              <i className="fas fa-cart-plus"></i>
            </p>
            <Button
              handleClick={handleAddProduct}
              title="ADD TO CART"
            />
          </div>
          <div className="w-full flex justify-center py-4">
            <Button
              handleClick={handleCheckout}
              title="CHECKOUT"
              width="400"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductName;
