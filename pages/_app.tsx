import type { AppProps } from "next/app";

// components
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";

// style
import "../src/styles/globals.css";
import style from "../src/styles/Body.module.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={1} />
      <article className={style.Body}>
        <Component {...pageProps} />
      </article>
    </div>
  );
}
