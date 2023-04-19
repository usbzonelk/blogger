import "../styles/global.css";
import dynamic from "next/dynamic";
import "bulma/css/bulma.min.css";
import TestingXX from "../components/tst";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
