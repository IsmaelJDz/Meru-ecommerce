import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Layout from "@/Layout/index";
import Card from "@/components/card";

/**
 *
 * @returns Main products card
 */

const Main = () => {
  const products = useSelector(state => state.products);
  // const [products, setProducts] = useState([]);

  // let totalProducts = [];

  // useEffect(() => {
  //   setProducts(productsState?.products?.places);
  // }, [productsState]);

  return (
    <Layout>
      <main className="flex flex-wrap justify-center max-w-screen-xl gap-4 my-6 md:mx-auto">
        {products.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </main>
    </Layout>
  );
};

export default Main;
