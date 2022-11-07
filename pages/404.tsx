import type { NextPage } from "next";
import Button from "../src/components/Button";

// components
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";

// styles
import style from "../src/styles/Body.module.css";
import styleNotFound from "../src/styles/NotFound.module.css";

// icons
import { TfiFaceSad } from "react-icons/tfi";

const NotFauld: NextPage = () => {
  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={4} />
      <article className={style.Body}>
        <section className={style.Home}>
          <TfiFaceSad className={styleNotFound.icon} />
          <h1>Página não encontrada</h1>
          <Button
            select={false}
            text="Voltar para a home"
            type="button"
            link="/"
          />
        </section>
      </article>
    </div>
  );
};

export default NotFauld;
