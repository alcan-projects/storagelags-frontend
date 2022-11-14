/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";

// styles
import style from "./style.module.scss";

// icons
import { HiLanguage } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

type HeaderType = {
  menu: number;
};

import langList from "../../lang/list.json";

const Header: NextPage<HeaderType> = ({ menu }) => {
  const [lang, setLang] = useState(false);
  const [login, setLogin] = useState(false);

  const changeLang = () => {
    setLang(!lang);
  };

  return (
    <header className={style.Header}>
      <div className={style.box}>
        <Link href="/">
          <div>
            <img src="/logo.png" alt="logo" />
          </div>
        </Link>
        <nav>
          <Button
            select={menu === 0 ? true : false}
            type="button"
            text="Home"
            link="/"
          />
          <Button
            select={menu === 2 ? true : false}
            type="button"
            text="Galerias"
            link="/gallery"
          />
          <Button
            select={menu === 3 ? true : false}
            type="button"
            text="Cursos"
            link="/cource"
          />
          {!login && (
            <Button
              select={menu === 4 ? true : false}
              type="button"
              text="Fazer login"
              link="/login"
            />
          )}
          <div className={style.lang}>
            <span onClick={changeLang}>
              {lang ? <AiOutlineClose /> : <HiLanguage />}
              PT-BR
            </span>
            {lang && (
              <ul>
                {langList.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            )}
          </div>
        </nav>
        {login && (
          <div className={style.peopleLogin}>
            <span>
              <img
                src="https://yt3.ggpht.com/T5N1CxzLeEKKl4ITgw2EzRm8d8KI7a4Ggs-OXsG_iMgZSsDHRptrHCDE0r46NhDCzm88GObiqA=s900-c-k-c0x00ffffff-no-rj"
                alt="Imagem do usuário"
              />
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
