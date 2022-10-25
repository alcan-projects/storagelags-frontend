import type { NextPage } from "next";
import { useState } from "react";

// components
import Button from "../src/components/Button";
import HeadSEO from "../src/components/Head";
import Header from "../src/components/Header";

// styles
import style from "../src/styles/Body.module.css";

const Home: NextPage = () => {
  const [data, setData] = useState<string>("");
  const db: Array<string> = ["Hello", "People", "Create"];

  function reload() {
    if (db.length > 0) {
      const numberCurrent = Math.floor(Math.random() * db.length);
      const ok = db[numberCurrent];
      if (ok === data) {
        reload();
      } else {
        setData(ok);
      }
    } else {
      alert("Não tem nada adicionado no banco de dados ainda");
    }
  }

  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header />
      <article className={style.Body}>
        <section className={style.Home}>
          <h1>{data && data}</h1>
          <br />
          <br />
          <div className={style.ControllerBox}>
            <Button text="Adicionar" />
            <Button onClick={reload} text={data ? "Sortear" : "Iniciar"} />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Home;
