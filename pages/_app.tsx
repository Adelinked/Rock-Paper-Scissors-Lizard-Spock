import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow_Semi_Condensed } from "@next/font/google";

const roboto = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
