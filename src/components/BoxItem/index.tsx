/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useRef, useState } from "react";

// icons
import {
  AiOutlineAudio,
  AiOutlineClose,
  AiOutlineMessage,
} from "react-icons/ai";
import { IoReloadOutline } from "react-icons/io5";

// style
import style from "./style.module.scss";

// interfaces
import { Comments, References } from "../../interfaces/item";
import { BiNews } from "react-icons/bi";
type BoxItemType = {
  name: string;
  audio?: string;
  references?: Array<References>;
  comments?: Array<Comments>;
};

const BoxItem: NextPage<BoxItemType> = ({
  name,
  audio,
  comments,
  references,
}) => {
  const audioRef: any = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [options, setOptions] = useState(0);

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  }

  function audioLoadStart() {
    audioRef.current?.load();
    audioRef.current.play();
  }
  return (
    <>
      <div className={style.Text}>
        <h1>{name}</h1>
        <br />
        <span onClick={toggleIsPlaying}>
          <audio src={audio} ref={audioRef} />
          {!isPlaying ? <AiOutlineAudio /> : <AiOutlineClose />}
        </span>
        {isPlaying && (
          <span onClick={audioLoadStart}>
            <IoReloadOutline />
          </span>
        )}
      </div>
      <br />
      <br />
      <div className={style.informations}>
        {references && references.length > 0 && (
          <div
            title="Referências"
            className={`${options === 1 && style.active}`}
            onClick={() => setOptions(1)}
          >
            <span>
              <BiNews /> Referências
            </span>
          </div>
        )}
        {comments && comments.length > 0 && (
          <div
            title="Comentários"
            className={`${options === 2 && style.active}`}
            onClick={() => setOptions(2)}
          >
            <span>
              <AiOutlineMessage /> Comentários
            </span>
          </div>
        )}
      </div>
      <ul className={style.References}>
        {options === 1 &&
          references &&
          references.map((item) => (
            <>
              {item.type === "image" && (
                <li>
                  <img
                    src={item.body}
                    alt={`imagem do item ${name}`}
                    title={`imagem do item ${name}`}
                  />
                </li>
              )}
              {item.type === "video" && (
                <li>
                  <iframe src={item.body} title={`imagem do item ${name}`} />
                </li>
              )}
            </>
          ))}
      </ul>
      <ul className={style.Comments}>
        {options === 2 &&
          comments &&
          comments.map((item) => (
            <>
              <li>
                <img
                  src="https://yt3.ggpht.com/T5N1CxzLeEKKl4ITgw2EzRm8d8KI7a4Ggs-OXsG_iMgZSsDHRptrHCDE0r46NhDCzm88GObiqA=s900-c-k-c0x00ffffff-no-rj"
                  alt="Imagem de capa do comentário"
                />
                {item.body}
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default BoxItem;
