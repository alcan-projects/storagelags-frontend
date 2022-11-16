/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

// components
import Button from "../../../components/Button";

// types
import { ItemResponse } from "../../../interfaces/item";

// styles
import Utils from "../../../styles/Utils.module.scss";
import style from "./view.module.scss";

import BoxItem from "../../../components/BoxItem";

type GalleryViewType = {
  functions: {
    reload: () => void;
    audioLoadStartPause: () => void;
  };
  databaseSelect?: ItemResponse;
  setDatabaseSelect: (value: ItemResponse) => void;
  database: Array<ItemResponse>;
  setDatabase: (value: Array<ItemResponse>) => void;
  setOptions: (value: number) => void;
};

const GalleryView: NextPage<GalleryViewType> = ({
  functions,
  databaseSelect,
  setDatabaseSelect,
  database,
  setDatabase,
  setOptions,
}) => {
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
            databaseSelect && functions.audioLoadStartPause();
            setOptions(0);
            functions.reload();
          }}
          text={databaseSelect ? "Sortear" : "Iniciar"}
          type="button"
        />
      </div>
    </section>
  );
};

export default GalleryView;
