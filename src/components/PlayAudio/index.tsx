import { NextPage } from "next";
import { useState } from "react";
import { AiOutlineAudio, AiOutlineClose } from "react-icons/ai";
import { IoReloadOutline } from "react-icons/io5";
import style from "./style.module.scss";

type PlayAudioType = {
  progress: number;
};

const PlayAudio: NextPage<PlayAudioType> = ({ progress }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className={style.Play}>
      <span>
        <audio />
        {!isPlaying ? <AiOutlineAudio /> : <AiOutlineClose />}
      </span>
      <div>
        <span>
          <span style={{ width: `${progress}%` }}></span>
        </span>
      </div>
      <span>
        <IoReloadOutline />
      </span>
      <span></span>
    </div>
  );
};

export default PlayAudio;
