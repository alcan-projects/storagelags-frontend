import { useEffect, useState } from "react";
import { AiOutlineAudio, AiTwotonePlayCircle } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

import style from "./style.module.scss";

const AudioGravar = () => {
  const [ok, setOk] = useState(false);
  const [recording, setRecording] = useState(false);

  function start() {
    setRecording(false);
    setOk(false);
  }

  function startRecording() {
    setRecording(true);
    setOk(false);
  }
  function stopRecording() {
    setRecording(false);
    setOk(true);
  }
  function play() {}
  return (
    <div className={style.audioGravar}>
      <div className={style.box}>
        <div>
          {recording ? (
            <BsFillPauseFill onClick={stopRecording} />
          ) : ok ? (
            <BsFillPlayFill onClick={play} />
          ) : (
            <AiOutlineAudio onClick={startRecording} />
          )}
        </div>
        <div>
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </div>
        {recording && (
          <div>
            <AiTwotonePlayCircle />
          </div>
        )}
      </div>
      {ok && (
        <div className={style.trash} onClick={start}>
          <BiTrashAlt />
        </div>
      )}
    </div>
  );
};

export default AudioGravar;
