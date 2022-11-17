/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

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
import { ItemMini } from "../../../interfaces/item";
import GalleryAddModal from "./modules/ModalAdd";
import ListItem from "./modules/ListItens";
import { LangListScore } from "../../../interfaces/LangList";

type GalleryAddType = {
  pupUpAdd: boolean;
  setPupUpAdd: (value: boolean) => void;
  langList: Array<LangListScore>;
  setLangList: (value: Array<LangListScore>) => void;

  functions: {
    ChangePupUp: () => void;
    FormSubmit: (e: any) => void;
  };

  inputs: {
    lang: string;
    setLang: (value: string) => void;
    name: string;
    setName: (value: string) => void;
    image: string;
    setImage: (value: string) => void;
    itens: Array<ItemMini>;
    setItens: (value: Array<ItemMini>) => void;
  };
};

const GalleryAdd: NextPage<GalleryAddType> = ({
  inputs,
  functions,
  langList,
  pupUpAdd,
  setLangList,
  setPupUpAdd,
}) => {
  return (
    <section className={Utils.ContainerCenter}>
      <h1 className={Utils.title}>Adicionar galeria</h1>
      <form onSubmit={functions.FormSubmit} className={style.AddForm}>
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
            onChange={inputs.setName}
            value={inputs.name}
          />
          <span>Idioma:</span>
          <Select
            placeholder="Selecionar idioma"
            options={langList}
            value={inputs.lang}
            onChange={inputs.setLang}
            name="language"
            title="Selecionar idioma"
          />
          <div className={style.boxImageCapa}>
            <span>Papel de parede:</span>
            <Input
              placeholder="Pesquisar papel de parede"
              name="wallpaper"
              title="Papel de parede"
              onChange={inputs.setImage}
              value={inputs.image}
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
                onClick={functions.ChangePupUp}
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
            {inputs.itens &&
              inputs.itens.map((item, index) => (
                <ListItem key={index} item={item} />
              ))}
          </ul>
        </div>
        <br />
        <br />
        <div className={Utils.BoxBtnEnd}>
          <Button text="Cancelar" type="button" />
          <Button text="Salvar" type="submit" />
        </div>
        {pupUpAdd && <GalleryAddModal ChangePupUp={functions.ChangePupUp} />}
      </form>
    </section>
  );
};

export default GalleryAdd;
