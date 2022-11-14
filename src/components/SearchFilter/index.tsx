import { NextPage } from "next";

// components
import Input from "../Input/indx";
import Select from "../Select";

// style
import style from "./style.module.scss";

type SearchFilterType = {
  setSearch: (value: string) => void;
  setLang: (value: string) => void;
  search: string;
  lang: string;
  langList: Array<{
    value: string;
    text: string;
  }>;
};

const SearchFilter: NextPage<SearchFilterType> = ({
  setLang,
  setSearch,
  lang,
  langList,
  search,
}) => {
  return (
    <>
      <div className={style.filter}>
        <Input
          onChange={setSearch}
          value={search}
          placeholder="Pesquisar por nome"
          title="Pesquisar"
        />
        <Select
          placeholder="Selecionar idioma"
          options={langList}
          value={lang}
          onChange={setLang}
          name="search"
          title="Filtrar"
        />
      </div>
    </>
  );
};

export default SearchFilter;
