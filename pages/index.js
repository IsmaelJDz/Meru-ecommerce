import { useDispatch } from "react-redux";
import Principal from "@/components/main"

import { setProducts } from "@/redux/products/products.action";

import getData from '@/utils/index'

/**
 *
 * @param {*} props gets data from api, server to client SSR
 * @returns Component -> Principal
 */

export default function Home({products}) {
  const dispatch = useDispatch();

  dispatch(setProducts(products));

  return <Principal />;

}

export async function getStaticProps() {

  const data = await getData(
    "https://products-api-meru.vercel.app/api/products"
  ).catch((err) => {
    console.log("ERROR", err)
  })

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