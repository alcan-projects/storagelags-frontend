import type { NextPage } from "next";
import Button from "../src/components/Button";

// styles
import style from "../src/styles/Body.module.scss";
import styleNotFound from "../src/styles/NotFound.module.scss";

// icons
import { TfiFaceSad } from "react-icons/tfi";

const NotFauld: NextPage = () => {
  return (
    <section className={style.Home}>
      <TfiFaceSad className={styleNotFound.icon} />
      <h1>Página não encontrada</h1>
      <Button select={false} text="Voltar para a home" type="button" link="/" />
    </section>
  );
};

export default NotFauld;
