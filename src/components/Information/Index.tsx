/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState } from "react";

// styles
import style from "./style.module.scss";

// icones
import { AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

type InformationType = {
  content: any;
  type: "video" | "image";
  title: string;
};

const Information: NextPage<InformationType> = ({ content, type, title }) => {
  const [view, setView] = useState(false);

  function ChangeView() {
    setView(!view);
  }
  return (
    <div className={style.Information}>
      <span onClick={ChangeView} title="Click para ver um exemplo">
        <AiOutlineInfoCircle />
      </span>
      {view && (
        <div className={style.BoxContent}>
          <span>
            <AiOutlineClose onClick={ChangeView} />
          </span>
          {type === "video" && <video src={content} title={title}></video>}
          {type === "image" && <img src={content} alt={title} title={title} />}
        </div>
      )}
    </div>
  );
};

export default Information;
