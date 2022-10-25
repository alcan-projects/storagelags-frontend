import type { NextPage } from "next";
import { useState } from "react";

// components
import HeadSEO from "../../src/components/Head";
import Header from "../../src/components/Header";
import style from "../src/styles/Body.module.css";

const People: NextPage = () => {
  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header />
      <article className={style.Body}>
        <section className={style.Home}></section>
      </article>
    </div>
  );
};

export default People;
