import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

// styles
import style from "../../src/styles/Body.module.css";
import styleGalery from "../../src/styles/Gallery.module.css";
import { api } from "../../src/utils/api";

import { GalleryResponse } from "../../src/interfaces/gallery";
import Button from "../../src/components/Button";
import SearchFilter from "../../src/components/SearchFilter";

const People: NextPage = () => {
  const [langList, setLangList] = useState([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("");
  const [data, setData] = useState<Array<GalleryResponse>>([]);
  useEffect(() => {
    api.get("/lang").then((res) => {
      setLangList(
        res.data.map((item: string) => ({
          value: item,
          text: item,
        }))
      );
    });

    if (search.length || lang) {
      if (lang.length) {
        api
          .get(`/gallery/search/in?name=${search}&lang=${lang}`)
          .then((res) => {
            setData(res.data);
          });
      } else {
        api.get(`/gallery/search/in?name=${search}&lang=all`).then((res) => {
          setData(res.data);
        });
      }
    } else {
      api.get("/gallery").then((res) => {
        setData(res.data);
      });
    }
  }, [lang, search]);

  return (
    <section className={style.Home}>
      <h1>Galeria de idiomas</h1>
      <div className={styleGalery.myGalleryBoxBtn}>
        <Button
          link="/home"
          select={false}
          text="Criar minha galeria"
          type="button"
        />
      </div>
      <div className={styleGalery.boxFilter}>
        <SearchFilter
          lang={lang}
          langList={langList}
          search={search}
          setLang={setLang}
          setSearch={setSearch}
        />
      </div>
      <ul className={styleGalery.List}>
        {data &&
          data.map((gallery, index) => (
            <Link key={index} href={`/gallery/${gallery._id}`}>
              <li>
                <div>{gallery.name}</div>
                <div>{gallery.user.name}</div>
                <div>{gallery.list?.length} items</div>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
};

export default People;
