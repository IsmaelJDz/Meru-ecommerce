import { useSelector } from "react-redux";

//import styles from "./main.module.scss";

import Layout from "../../Layout";
import Card from "../card";

/**
 *
 * @returns Main movies card
 */

const Main = () => {
  const products = useSelector(state => state.products);

  const totalProducts = products.products;

  return (
    <Layout>
      <main className="
        flex
        flex-wrap
        max-w-screen-xl
        gap-4
        justify-center
        md:mx-auto
        my-6"
      >
        {totalProducts.map(product => (
          <Card product={product} key={product.id} />
        ))}
      </main>
    </Layout>
  );
};

export default Main;