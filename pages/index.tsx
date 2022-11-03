import type { NextPage } from "next";
import { useState } from "react";

// components
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";

// styles
import style from "../src/styles/Body.module.css";

const Index: NextPage = () => {
  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={0} />
      <article className={style.Body}>
        <section className={style.Home}></section>
      </article>
    </div>
  );
};

export default Index;
