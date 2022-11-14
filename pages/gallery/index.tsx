import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// styles
import Utils from "../../src/styles/Utils.module.scss";
import styleGalery from "../../src/styles/Gallery.module.scss";

import { GalleryResponse } from "../../src/interfaces/gallery";
import Button from "../../src/components/Button";
import SearchFilter from "../../src/components/SearchFilter";
import BoxList from "../../src/components/BoxList";

const People: NextPage = () => {
  const [langList, setLangList] = useState([]);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("");
  const [data, setData] = useState<Array<GalleryResponse>>([]);
  const [dataMy, setDataMy] = useState<Array<GalleryResponse>>([]);

  useEffect(() => {
    const LS: any = localStorage.getItem("user");
    const informationUser = JSON.parse(LS);
    api.get(`/gallery/user/${informationUser.userId}`).then((res) => {
      // setDataMy(res.data);
    });
  }, []);

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
    <>
      <section className={Utils.ContainerStart}>
        <div className={Utils.BoxBtnJustify}>
          <h2>Minhas galerias</h2>
          <Button
            link="/gallery/add"
            select={false}
            text="Adicionar galeria"
            type="button"
          />
        </div>
        {dataMy.length > 0 &&
          dataMy.map((item, index) => (
            <BoxList
              key={index}
              image={item.image}
              imageAlt={`Papel de parede da galeria ${item.name}`}
              name={item.name}
              url={`/my/${item._id}`}
            />
          ))}
      </section>
      <section className={Utils.ContainerStart}>
        <h2>Todas as galerias</h2>
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
    </>
  );
};

export default People;
