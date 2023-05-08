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
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/products"
      : "https://basic-api-products.vercel.app/api/products"
  ).catch(err => {
    console.log("ERROR", err);
  });

  const { products } = resProductsPaths;

  const paths = products.map(item => ({
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
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/products"
      : "https://basic-api-products.vercel.app/api/products"
  ).catch(err => {
    console.log("ERROR", err);
  });

  const { products } = resProductsStatic;

  const data = filterProducts(products, params.id);

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
      <div className="max-w-screen-xl py-2 text-2xl cursor-pointer sm:mx-auto mx-14 sm:px-8 sm:text-base">
        <Link href="/">
          <a>
            <p>INICIO &#10095;</p>
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-center w-5/6 max-w-screen-xl mx-auto sm:flex-row">
        <div className="px-2">
          <Image src={cover} alt={name} width={550} height={400} />
          <p className="text-4xl font-bold text-center text-gray-900">
            $ {price} MXN
          </p>
        </div>
        <div className="w-full">
          <p className="px-4 py-4 text-2xl text-gray-900 border-gray-900 sm:text-xl sm:border-l-2">
            {name}
          </p>
          <div className="flex justify-between py-4">
            <p
              className="text-2xl text-gray-600 transition-all duration-500 ease-in-out transform cursor-pointer hover:-translate-y-1 hover:scale-9 sm:text-base"
              onClick={() => handleAddProduct()}
            >
              <i className="fas fa-cart-plus"></i>
            </p>
            <Button
              handleClick={handleAddProduct}
              title="ADD TO CART"
            />
          </div>
          <div className="flex justify-center w-full py-4">
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
