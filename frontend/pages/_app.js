import "../styles/global.css";
import dynamic from "next/dynamic";
import "bulma/css/bulma.min.css";
import TestingXX from "../components/tst";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <TestingXX />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
