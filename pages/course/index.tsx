import type { NextPage } from "next";

// components
import BoxList from "../../src/components/BoxList";

// styles
import style from "../../src/styles/Body.module.css";
import styleCource from "../../src/styles/Cource.module.css";
import { useEffect, useState } from "react";
import SearchFilter from "../../src/components/SearchFilter";
import { api } from "../../src/utils/api";

const Cources: NextPage = () => {
  const [langList, setLangList] = useState([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("");

  const [data, setData] = useState([
    {
      _id: "23423423c4f234f324",
      name: "Curso de inglês",
      image:
        "https://certificadocursosonline.com/wp-content/uploads/2017/09/curso-de-ingles-online-gratis-1280x720.jpg",
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
    <section className={styleCource.Cource}>
      <h1>Cursos</h1>
      <div className={styleCource.boxFilter}>
        <SearchFilter
          lang={lang}
          langList={langList}
          search={search}
          setLang={setLang}
          setSearch={setSearch}
        />
      </div>
      {data &&
        data.map((item, index) => (
          <BoxList
            key={index}
            image={item.image}
            imageAlt={`Papel de parede do curso ${item.name}`}
            name={item.name}
            url={`/cource/${item._id}`}
          />
        ))}
    </section>
  );
};

export default Cources;
