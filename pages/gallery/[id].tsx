import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoxItem from "../../src/components/BoxItem";

// components
import Button from "../../src/components/Button";
import HeadSEO from "../../src/components/Head";
import Header from "../../src/components/Header";
import { ItemResponse } from "../../src/interfaces/item";

// styles
import style from "../../src/styles/Body.module.css";
import { api } from "../../src/utils/api";

const GalerryId: NextPage = () => {
  const { query } = useRouter();
  const [databaseSelect, setDatabaseSelect] = useState<ItemResponse>();
  const [database, setDatabase] = useState<Array<ItemResponse>>([]);

  useEffect(() => {
    api.get(`/item/gallery/${query.id}`).then((res) => {
      setDatabase(res.data);
    });
  }, [query.id]);

  function reload() {
    if (database.length > 0) {
      const numberDrawn = Math.floor(Math.random() * database.length);
      const nomeOld = database[numberDrawn];
      if (nomeOld === databaseSelect) {
        reload();
      } else {
        setDatabaseSelect(nomeOld);
      }
    } else {
      alert("Não tem nada adicionado no banco de dados ainda");
    }
  }

  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={2} />
      <article className={style.Body}>
        <section className={style.Home}>
          {databaseSelect && (
            <BoxItem
              name={databaseSelect.name}
              audio={databaseSelect.audio}
              comments={databaseSelect.comments}
              references={databaseSelect.references}
            />
          )}
          <br />
          <br />
          <div className={style.ControllerBox}>
            <Button
              type="button"
              select={false}
              onClick={reload}
              text={databaseSelect ? "Sortear" : "Iniciar"}
            />
          </div>
        </section>
      </article>
    </div>
  );
};

export default GalerryId;
