import { useDispatch } from "react-redux";
import Principal from "@/components/main";

import { setProducts } from "@/redux/products/products.action";

import getData from "@/utils/index";

/**
 *
 * @param {*} props gets data from api, server to client SSR
 * @returns Component -> Principal
 */

export default function Home({ products }) {
  const dispatch = useDispatch();

  dispatch(setProducts(products));

  return <Principal />;
}

export async function getStaticProps() {
  const data = await getData(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/products"
      : "https://basic-api-products.vercel.app/api/products"
  ).catch(err => {
    console.log("ERROR", err);
  });

  console.log("data", data);

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

  const { products } = data;

  return {
    props: {
      products: products
    },
    revalidate: 60
  };
}
