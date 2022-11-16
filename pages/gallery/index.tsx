import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// views
import Gallery from "../../src/views/gallery";

// interfaces
import { GalleryResponse } from "../../src/interfaces/gallery";
import { LangListScore } from "../../src/interfaces/LangList";

const GalleryPage: NextPage = () => {
  const [langList, setLangList] = useState<Array<LangListScore>>([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("");
  const [data, setData] = useState<Array<GalleryResponse>>([]);
  const [dataMy, setDataMy] = useState<Array<GalleryResponse>>([]);

  useEffect(() => {
    const LS: any = localStorage.getItem("user");
    const informationUser = JSON.parse(LS);
    api.get(`/gallery/user/${informationUser.userId}`).then((res) => {
      setDataMy(res.data);
    });
  }, []);

  useEffect(() => {
    api.get("/lang").then((res) => {
      setLangList(
        res.data.map((item: string) => ({
          value: item,
          text: item,
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (search.length || lang) {
      if (lang.length) {
        api
          .get(`/gallery/search/in?name=${search}&lang=${lang}`)
          .then((res) => {
            setData(res.data);
          });
      } else {
        api.get(`/gallery/search/in?name=${search}&lang=all`).then((res) => {
          setData(res.data);
        });
      }
    } else {
      api.get("/gallery").then((res) => {
        setData(res.data);
      });
    }
  }, [lang, search]);

  return (
    <Gallery
      dataMy={dataMy} // todas as galerias do usuário
      setDataMy={setDataMy} // Adiciona todas as galerias do usuário
      langList={langList} // Todos os idiomas já formatados
      setLangList={setLangList} // [states] Adiciona todos os idiomas já formatados
      setData={setData} // [states] Adicionar todos as gallerias
      data={data} // Todas as galerias
      setLang={setLang} // [states] Adicionar idioma no filtro da pesquisa
      lang={lang} // Idioma selecionado no filtro da pesquisa
      setSearch={setSearch} // [states] Adicionar texto da pesquisa
      search={search} // Texto da pesquisa
    />
  );
};

export default GalleryPage;
