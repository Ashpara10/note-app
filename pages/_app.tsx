import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Protected from "../components/Protected";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Protected>
        <Component {...pageProps} />
      </Protected>
    </>
  );
}

export default MyApp;
