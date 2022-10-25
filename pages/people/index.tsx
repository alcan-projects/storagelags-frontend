import type { NextPage } from "next";

// components
import HeadSEO from "../../src/components/Head";
import Header from "../../src/components/Header";

// styles
import style from "../../src/styles/Body.module.css";

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
