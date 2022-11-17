/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

import style from "./style.module.scss";

type AudioPlay = {
  audio: string;
};

const AudioPlay: NextPage<AudioPlay> = ({ audio }) => {
  const audioRef: any = useRef(audio);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<string>("00:00");

  function Duration() {
    const audioFormat = (audioRef.current.duration / 60)
      .toFixed(2)
      .replace(".", ":");
    if (audioFormat.length === 4) {
      setDuration(`0${audioFormat}`);
    } else {
      setDuration(audioFormat);
    }
  }

  async function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
    Duration();
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
  }

  return (
    <div className={style.audioPlay}>
      <div className={style.box}>
        <div onClick={toggleIsPlaying}>
          {isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill />}
        </div>
        <audio id="audioPlay" src={audio} ref={audioRef}></audio>
        <div>
          <span>{duration}</span>
        </div>
      </div>
      <div className={style.trash}>
        <BiTrashAlt />
      </div>
    </div>
  );
};

export default AudioPlay;
