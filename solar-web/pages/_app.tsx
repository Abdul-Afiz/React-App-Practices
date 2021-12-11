import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import AppTheme from "../styles/Apptheme";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
