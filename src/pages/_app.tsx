import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const GeneralSans = localFont({
  src: "../fonts/GeneralSans-Variable.ttf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={GeneralSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
