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
import { apiFile } from "../../../../utils/api";

type GalleryAddModalType = {
  ChangePupUp: () => void;
};

const GalleryAddModal: NextPage<GalleryAddModalType> = ({ ChangePupUp }) => {
  const [name, setName] = useState("");
  const [audio, setAudio] = useState("/test10s.mp3");
  const [references, setReferences] = useState<Array<ReferencesScore>>([]);

  function uploadFileAudio(e: any) {
    apiFile
      .post("/upload/audio", { file: e.target.files[0] })
      .then((res) => {
        setAudio(res.data.file);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function uploadFileImage(e: any) {
    apiFile
      .post("/upload/image", { file: e.target.files[0] })
      .then((res) => {
        setReferences([
          ...references,
          {
            type: "image",
            body: res.data.file,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
            {audio.length > 0 && <AudioPlay audio={audio} />}
            {false && <AudioGravar />}
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
                <label htmlFor="uploadAudio">
                  <AiOutlineCloudUpload />
                  <p>Upload</p>
                  <input
                    id="uploadAudio"
                    onChange={uploadFileAudio}
                    type="file"
                    accept=".mp3,.aac,.flac,.alac,.aiff,.ape,.dsd,.mqa,.ogg,.opus,.wav,.wma"
                  />
                </label>
              </li>
            </ul>
          </div>
          <div className={style.boxOptions}>
            <p>Referências:</p>
            <ReferencesListModal itemName={name || ""} list={references} />
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
                <label htmlFor="uploadReference">
                  <AiOutlineCloudUpload />
                  <p>Upload</p>
                  <input
                    id="uploadReference"
                    type="file"
                    onChange={uploadFileImage}
                    accept=".mp4,.png"
                  />
                </label>
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
