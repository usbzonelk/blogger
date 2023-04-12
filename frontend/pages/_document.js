import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript, useColorMode } from "@chakra-ui/react";
import theme from "../styles/theme";
import { useEffect } from "react";
export default class Document extends NextDocument {
  render() {
    useEffect(() => {
      useColorMode("dark");
    }, [useColorMode]);
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
