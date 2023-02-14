import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Barlow_Semi_Condensed } from "@next/font/google";

const barlow = Barlow_Semi_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={barlow.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
