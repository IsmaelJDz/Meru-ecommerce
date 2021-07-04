import Head from "next/head";
import Header from "@/components/header";
/**
 *
 * @param {*} param0 children main layout
 */

const Home = ({ children }) => {
  return (
    <>
      <Head>
      <title>Meru</title>
        <meta
          name="description"
          content="The best products"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header />

      {children}

    </>
  );
};

export default Home;