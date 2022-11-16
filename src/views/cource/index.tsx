import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

// components
import BoxList from "../../components/BoxList";
import SearchFilter from "../../components/SearchFilter";

// styles
import Utils from "../../styles/Utils.module.scss";
import { LangListScore } from "../../interfaces/LangList";

import { CourceResponse } from "../../interfaces/cource";
type CourcesType = {
  langList: Array<LangListScore>;
  setLangList: (value: Array<LangListScore>) => void;
  search: string;
  setSearch: (value: string) => void;
  lang: string;
  setLang: (value: string) => void;
  data: Array<CourceResponse>;
  setData: (value: Array<CourceResponse>) => void;
};

const Cources: NextPage<CourcesType> = ({
  data,
  lang,
  langList,
  search,
  setData,
  setLang,
  setLangList,
  setSearch,
}) => {
  return (
    <section className={Utils.ContainerStart}>
      <h1 className={Utils.title}>Cursos</h1>
      <div className={Utils.boxFilter}>
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
