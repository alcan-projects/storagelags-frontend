import { BsFillPlayFill } from "react-icons/bs";

import style from "./style.module.scss";

const AudioPlay = () => {
  return (
    <div className={style.audio}>
      <div>
        <BsFillPlayFill />
      </div>
      <div>
        <span style={{ width: `${70}%` }}></span>
      </div>
    </div>
  );
};

export default AudioPlay;
