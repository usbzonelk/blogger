import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import TestingXX from "../components/tst";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar /> <TestingXX /> <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
