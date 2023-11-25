import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import Home from "./page";
import Login from "./login/page";
import Widgets from "./widgets/page";
import Chart from "./chart/page";
import Elements from "./elements/page";
import Panels from "./[panels]/page";

const MyApp = ({ Component, pageProp }) => {
  return (
    <>
      <Head>
        <title>Lumino</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout {...pageProp}>
      <Home />
      <Widgets />
      <Chart />
      <Elements />
      <Panels />
      <Login />
      </Layout>
     
    </>
  );
};

export default MyApp;
