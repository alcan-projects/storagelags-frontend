/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

import style from "./style.module.css";

type BoxListType = {
  image: string;
  imageAlt: string;
  name: string;
  url: string;
};

const BoxList: NextPage<BoxListType> = ({ image, name, url, imageAlt }) => {
  const [controller, setController] = useState(false);

  function OpenCloseController() {
    setController(!controller);
  }
  return (
    <div className={style.box}>
      <Link href={url}>
        <div className={style.boxmini}>
          <img src={image} alt={imageAlt} />
          <h2>{name}</h2>
        </div>
      </Link>
      <div className={style.controller}>
        <span onClick={OpenCloseController}>
          <SlOptionsVertical />
        </span>
        {controller && (
          <ul>
            <li>Excluir</li>
            <li>Editar</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default BoxList;
