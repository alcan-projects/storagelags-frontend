import type { NextPage } from "next";
import Link from "next/link";

// styles
import Utils from "../../styles/Utils.module.scss";
import styleGalery from "./index.module.scss";

// components
import { GalleryResponse } from "../../interfaces/gallery";
import Button from "../../components/Button";
import SearchFilter from "../../components/SearchFilter";
import BoxList from "../../components/BoxList";
import { LangListScore } from "../../interfaces/LangList";

type GalleryType = {
  inputs: {
    search: string;
    setSearch: (value: string) => void;
    lang: string;
    setLang: (value: string) => void;
  };
  dataMy: Array<GalleryResponse>;
  setDataMy: (value: Array<GalleryResponse>) => void;
  langList: Array<LangListScore>;
  setLangList: (value: Array<LangListScore>) => void;
  data: Array<GalleryResponse>;
  setData: (value: Array<GalleryResponse>) => void;
};

const Gallery: NextPage<GalleryType> = ({
  dataMy,
  setDataMy,
  langList,
  setLangList,
  data,
  setData,
  inputs,
}) => {
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
              url={`/gallery/${item._id}`}
            />
          ))}
      </section>
      <section className={Utils.ContainerStart}>
        <h2>Todas as galerias</h2>
        <div className={styleGalery.boxFilter}>
          <SearchFilter
            lang={inputs.lang}
            langList={langList}
            search={inputs.search}
            setLang={inputs.setLang}
            setSearch={inputs.setSearch}
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

export default Gallery;
