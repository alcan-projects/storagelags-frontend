/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { api } from "../../../utils/api";

// components
import Button from "../../../components/Button";

// types
import { ItemResponse } from "../../../interfaces/item";

// styles
import Utils from "../../../styles/Utils.module.scss";
import style from "./view.module.scss";

import BoxItem from "../../../components/BoxItem";

const GalleryView: NextPage = () => {
  const audioRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { query } = useRouter();
  const [options, setOptions] = useState(0);
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

  function audioLoadStartPause() {
    audioRef.current?.load();
    audioRef.current?.pause();
    setIsPlaying(false);
  }

  return (
    <section className={Utils.ContainerCenter}>
      {databaseSelect && (
        <BoxItem
          audio={databaseSelect.audio}
          name={databaseSelect.name}
          comments={databaseSelect.comments}
          references={databaseSelect.references}
        />
      )}
      <br />
      <br />
      <div className={style.ControllerBox}>
        <Button select={false} text="Adicionar" type="button" />
        <Button
          select={false}
          onClick={() => {
            databaseSelect && audioLoadStartPause();
            setOptions(0);
            reload();
          }}
          text={databaseSelect ? "Sortear" : "Iniciar"}
          type="button"
        />
      </div>
    </section>
  );
};

export default GalleryView;
