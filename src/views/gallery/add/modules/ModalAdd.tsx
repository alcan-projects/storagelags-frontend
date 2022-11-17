import { useState } from "react";
import { NextPage } from "next";

// icons
import {
  AiOutlineAudio,
  AiOutlineCloudUpload,
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineRobot,
} from "react-icons/ai";

// components
import AudioGravar from "../../../../components/Audio/Gravar";
import AudioPlay from "../../../../components/Audio/Play";
import Input from "../../../../components/Input/indx";
import Modal from "../../../../components/Modal";
import ReferencesListModal from "../../../../components/References/ReferencesListModal";
import Button from "../../../../components/Button";

// styles
import style from "./ModalAdd.style.module.scss";
import Utils from "../../../../styles/Utils.module.scss";
import { ReferencesScore } from "../../../../interfaces/item";

type GalleryAddModalType = {
  ChangePupUp: () => void;
};

const GalleryAddModal: NextPage<GalleryAddModalType> = ({ ChangePupUp }) => {
  const [name, setName] = useState("");
  const [audio, setAudio] = useState("");
  const [references, setReferences] = useState<Array<ReferencesScore>>([]);

  return (
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
            <ReferencesListModal
              list={[
                {
                  title: "link test",
                  type: "image",
                  url: "https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg",
                },
                {
                  title: "link test",
                  type: "image",
                  url: "https://image.shutterstock.com/image-vector/english-language-hand-drawn-doodles-260nw-1196303542.jpg",
                },
              ]}
            />
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
          <div className={`${Utils.BoxBtnEnd} ${style.marginButtonPupUp}`}>
            <Button text="Cancelar" onClick={ChangePupUp} />
            <Button text="Salvar" />
          </div>
        </div>
      }
    />
  );
};

export default GalleryAddModal;
