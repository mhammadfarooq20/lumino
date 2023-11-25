/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import ChartScript from "../components/ChartScript";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/css/datepicker3.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
        {/*Custom Font*/}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript>
          <script src="/js/jquery-1.11.1.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/chart.min.js"></script>
          <script src="/js/chart-data.js"></script>
          <script src="/js/easypiechart.js"></script>
          <script src="/js/easypiechart-data.js"></script>
          <script src="/js/bootstrap-datepicker.js"></script>
          <script src="/js/custom.js"></script>
          
         
          
        
         
          <ChartScript />
        </NextScript>
      </body>
    </Html>
  );
}
