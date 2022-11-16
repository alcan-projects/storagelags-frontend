import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

//  views
import Cources from "../../src/views/cource";

// interfaces
import { CourceResponse } from "../../src/interfaces/cource";
import { LangListScore } from "../../src/interfaces/LangList";

const CourcesPage: NextPage = () => {
  const [langList, setLangList] = useState<Array<LangListScore>>([]);
  const [search, setSearch] = useState<string>("");
  const [lang, setLang] = useState<string>("");

  const [data, setData] = useState<Array<CourceResponse>>([
    {
      _id: "23423423c4f234f324",
      name: "Curso de inglês",
      image:
        "https://certificadocursosonline.com/wp-content/uploads/2017/09/curso-de-ingles-online-gratis-1280x720.jpg",
      adminId: "string",
      lang: "English",
      text: "string",
      view: 0,
      createdAt: 123412323213123,
      updatedAt: 123412323213123,
    },
  ]);

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
  return (
    <Cources
      inputs={{
        lang,
        setLang,
        setSearch,
        search,
      }}
      data={data}
      langList={langList}
      setData={setData}
      setLangList={setLangList}
    />
  );
};

export default CourcesPage;
