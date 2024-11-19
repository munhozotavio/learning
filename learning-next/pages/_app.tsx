import "@/styles/globals.css";
import "@/pages/css/integration1.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
