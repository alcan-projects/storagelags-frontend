import { AiOutlineAudio } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

import style from "./style.module.scss";

const AudioGravar = () => {
  return (
    <div className={style.audio}>
      <div>
        <AiOutlineAudio />
      </div>
      <div>
        <span style={{ width: `${70}%` }}></span>
      </div>
      <div>
        <BiTrashAlt />
      </div>
    </div>
  );
};

export default AudioGravar;
