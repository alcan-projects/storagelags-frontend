/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// styles
import Utils from "../../src/styles/Utils.module.scss";
import style from "../../src/styles/Gallery.module.scss";

// types
import Input from "../../src/components/Input/indx";
import Select from "../../src/components/Select";

// icons
import { BsFillPlayFill } from "react-icons/bs";
import SearchFilter from "../../src/components/SearchFilter";
import Button from "../../src/components/Button";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Add: NextPage = () => {
  const [name, setName] = useState("");
  const [langList, setLangList] = useState([]);
  const [lang, setLang] = useState("");

  useEffect(() => {
    api.get("/lang").then((res) => {
      setLangList(
        res.data.map((item: string) => ({ value: item, text: item }))
      );
    });
  }, []);

  return (
    <section className={Utils.ContainerCenter}>
      <h1 className={Utils.title}>Adicionar galeria</h1>
      <form action="" className={style.AddForm}>
        <div className={Utils.BoxBtnStart}>
          <Button
            text={
              <>
                <AiOutlineArrowLeft />
                Voltar
              </>
            }
          />
        </div>
        <br />
        <Input
          placeholder="Palavra ou frase"
          name="name"
          title="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Select
          placeholder="Selecionar idioma"
          options={langList}
          value={lang}
          onChange={setLang}
          name="search"
          title="Filtrar"
        />
        <div className={style.boxImageCapa}>
          <SearchFilter
            lang={lang}
            langList={langList}
            search={"test"}
            setLang={setLang}
            setSearch={() => {}}
          />
          <ul>
            <li>
              <img
                src="https://www.linguahouse.com/linguafiles/md5/b8ec1cd0454c5017664198f8202cf268"
                alt="imagem de capa"
              />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <p>Prodution</p>
              <div>
                <span>
                  <BsFillPlayFill />
                </span>
                <span></span>
                <span></span>
                <audio src=""></audio>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Input
            placeholder="Palavra ou frase"
            name="name"
            title="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {/* name: string;
          audio?: string;
          references?: Array<References>; */}
        </div>
      </form>
    </section>
  );
};

export default Add;
