import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ItemResponse } from "../../src/interfaces/item";
import { api } from "../../src/utils/api";
import GalleryView from "../../src/views/gallery/view";

const Home: NextPage = () => {
  const audioRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { query } = useRouter();
  const [options, setOptions] = useState<number>(0);
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
    <GalleryView
      database={database}
      databaseSelect={databaseSelect}
      functions={{
        audioLoadStartPause,
        reload,
      }}
      setDatabase={setDatabase}
      setDatabaseSelect={setDatabaseSelect}
      setOptions={setOptions}
    />
  );
};

export default Home;
