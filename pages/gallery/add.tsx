/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// styles
import Utils from "../../src/styles/Utils.module.scss";
import style from "../../src/styles/Gallery.module.scss";

// icons
import {
  AiOutlineArrowLeft,
  AiOutlineAudio,
  AiOutlineCloudUpload,
  AiOutlineEdit,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlinePlus,
  AiOutlineRobot,
  AiOutlineStar,
} from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

// components
import PlayAudio from "../../src/components/PlayAudio";
import Modal from "../../src/components/Modal";
import Button from "../../src/components/Button";
import Input from "../../src/components/Input/indx";
import Select from "../../src/components/Select";
import AudioGravar from "../../src/components/Audio/Gravar";
import AudioPlay from "../../src/components/Audio/Play";

const Add: NextPage = () => {
  const [pupUpAdd, setPupUpAdd] = useState(false);
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

  function ChangePupUp() {
    setPupUpAdd(!pupUpAdd);
  }

  return (
    <section className={Utils.ContainerCenter}>
      <h1 className={Utils.title}>Adicionar galeria</h1>
      <form action="" className={style.AddForm}>
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
          <span>Nome:</span>
          <Input
            placeholder="Nome da galeria"
            name="name"
            title="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span>Idioma:</span>
          <Select
            placeholder="Selecionar idioma"
            options={langList}
            value={lang}
            onChange={setLang}
            name="search"
            title="Filtrar"
          />
          <div className={style.boxImageCapa}>
            <span>Papel de parede:</span>
            <Input
              placeholder="Pesquisar papel de parede"
              name="name"
              title="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
            <li>
              <div>Prodution</div>
              <div>
                <Button
                  text={
                    <>
                      <AiOutlineStar />
                      Impulsionar
                    </>
                  }
                />
              </div>
              <div>
                <PlayAudio progress={70} />
              </div>
              <div className={style.controllers}>
                <Button text={<BiTrashAlt />} />
                <Button text={<AiOutlineEdit />} />
              </div>
            </li>
          </ul>
        </div>
        {pupUpAdd && (
          <Modal
            closed={ChangePupUp}
            props={
              <div className={style.modal}>
                <h1>Adicionar item</h1>
                <div className={style.boxOptions}>
                  <p>Palavra ou frase:</p>
                  <Input
                    placeholder="Palavra ou frase"
                    name="name"
                    title="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className={style.boxOptions}>
                  <p>Áudio:</p>
                  <AudioPlay />
                  <AudioGravar />
                  <ul>
                    <li>
                      <div>
                        <AiOutlineAudio />
                        <p>Gravar</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <AiOutlineRobot />
                        <p>Robô</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <AiOutlineCloudUpload />
                        <p>Upload</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className={style.boxOptions}>
                  <p>Referências:</p>
                  <ul>
                    <li>
                      <div>
                        <AiOutlineOrderedList />
                        <p>Lista</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <AiOutlineLink />
                        <p>Link</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <AiOutlineCloudUpload />
                        <p>Upload</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <br />
                <div
                  className={`${Utils.BoxBtnEnd} ${style.marginButtonPupUp}`}
                >
                  <Button text="Cancelar" onClick={ChangePupUp} />
                  <Button text="Salvar" />
                </div>
              </div>
            }
          />
        )}
      </form>
    </section>
  );
};

export default Add;
