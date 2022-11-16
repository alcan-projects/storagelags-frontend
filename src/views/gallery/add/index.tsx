/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api";

// styles
import Utils from "../../../styles/Utils.module.scss";
import style from "./add.module.scss";

// icons
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";

// components
import Button from "../../../components/Button";
import Input from "../../../components/Input/indx";
import Select from "../../../components/Select";
import Information from "../../../components/Information/Index";

// interfaces
import { ItemScore } from "../../../interfaces/item";
import GalleryAddModal from "./modules/ModalAdd";
import ListItem from "./modules/ListItens";

const GalleryAdd: NextPage = () => {
  const [pupUpAdd, setPupUpAdd] = useState(false);
  const [langList, setLangList] = useState([]);

  const [lang, setLang] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [itens, setItens] = useState<Array<ItemScore>>([]);

  useEffect(() => {
    api.get("/lang").then((res) => {
      setLangList(
        res.data.map((item: string) => ({ value: item, text: item }))
      );
    });
  }, []);

  function ChangePupUp() {
    setPupUpAdd(!pupUpAdd);
  }

  function FormSubmit(e: any) {
    e.preventDefault();
    const data = {
      name,
      lang,
      image,
    };

    console.log(data);
  }

  return (
    <section className={Utils.ContainerCenter}>
      <h1 className={Utils.title}>Adicionar galeria</h1>
      <form onSubmit={FormSubmit} className={style.AddForm}>
        <div className={Utils.BoxBtnStart}>
          <Button
            link="/gallery"
            text={
              <>
                <AiOutlineArrowLeft />
                Voltar
              </>
            }
          />
        </div>
        <br />
        <div className={style.inputsGalerry}>
          <span>
            Nome da galeria:
            <Information
              content="/content/name-gallery.png"
              title="Nome da galeria"
              type="image"
            />
          </span>
          <Input
            placeholder="Nome da galeria"
            name="galleryName"
            title="Nome da galeria"
            onChange={setName}
            value={name}
          />
          <span>Idioma:</span>
          <Select
            placeholder="Selecionar idioma"
            options={langList}
            value={lang}
            onChange={setLang}
            name="language"
            title="Selecionar idioma"
          />
          <div className={style.boxImageCapa}>
            <span>Papel de parede:</span>
            <Input
              placeholder="Pesquisar papel de parede"
              name="wallpaper"
              title="Papel de parede"
              onChange={setImage}
              value={image}
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
        </div>

        <div className={style.boxItem}>
          <div className={Utils.BoxBtnJustify}>
            <span>Itens:</span>
            <div className={Utils.BoxBtnEnd}>
              <Button
                onClick={ChangePupUp}
                text={
                  <>
                    <AiOutlinePlus />
                    Adicionar item
                  </>
                }
              />
            </div>
          </div>
          <br />
          <ul className={`${style.List} ${style.listItem}`}>
            {itens &&
              itens.map((item, index) => <ListItem key={index} item={item} />)}
          </ul>
        </div>
        <br />
        <br />
        <div className={Utils.BoxBtnEnd}>
          <Button text="Cancelar" type="button" />
          <Button text="Salvar" type="submit" />
        </div>
        {pupUpAdd && <GalleryAddModal ChangePupUp={ChangePupUp} />}
      </form>
    </section>
  );
};

export default GalleryAdd;
