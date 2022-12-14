import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// components
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";

// style
import "../src/styles/globals.scss";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState<number>(0);
  const { pathname } = useRouter();

  useEffect(() => {
    pathname === "/" && setPage(0);
    pathname === "/gallery" && setPage(1);
    pathname === "/cource" && setPage(2);
    pathname === "/login" && setPage(3);
  }, [pathname]);

  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={page} />
      <article>
        <Component {...pageProps} />
      </article>
    </div>
  );
}
