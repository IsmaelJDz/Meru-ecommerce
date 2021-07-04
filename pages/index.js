import { useDispatch } from "react-redux";
import Principal from "@/components/main"

import { setProducts } from "../redux/products/products.action";

/**
 *
 * @param {*} props gets data from api, server to client SSR
 * @returns Main movies container
 */

export default function Home({products}) {
  const dispatch = useDispatch();

  dispatch(setProducts(products));

  return <Principal />;

}

export async function getStaticProps() {
  const res = await fetch(
    "https://products-api-meru.vercel.app/api/products"
  );
  const data = await res.json();

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
      products: data
    },
    revalidate: 60
  };
}