import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar /> <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
