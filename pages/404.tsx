import type { NextPage } from "next";
import Button from "../src/components/Button";

// styles
import styleNotFound from "../src/styles/NotFound.module.scss";

// icons
import { TfiFaceSad } from "react-icons/tfi";

const NotFauld: NextPage = () => {
  return (
    <section>
      <TfiFaceSad className={styleNotFound.icon} />
      <h1>Página não encontrada</h1>
      <Button select={false} text="Voltar para a home" type="button" link="/" />
    </section>
  );
};

export default NotFauld;
