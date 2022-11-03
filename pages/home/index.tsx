/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// components
import HeadSEO from "../../src/components/Head";
import Header from "../../src/components/Header";

// styles
import style from "../../src/styles/Body.module.css";
import styleHome from "../../src/styles/Home.module.css";

// icons
import { SlOptionsVertical } from "react-icons/sl";

// types
import { GalleryResponse } from "../../src/interfaces/gallery";
import BoxList from "../../src/components/BoxList";

const Home: NextPage = () => {
  const [controller, setController] = useState("");
  const [data, setData] = useState<Array<GalleryResponse>>([]);
  const db: Array<string> = ["Hello", "People", "Create"];

  useEffect(() => {
    const LS: any = localStorage.getItem("user");
    const informationUser = JSON.parse(LS);
    api.get(`/gallery/user/${informationUser.userId}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={1} />
      <article className={style.Body}>
        <section className={styleHome.HomeIndex}>
          {data &&
            data.map((item, index) => (
              <BoxList
                key={index}
                image={item.image}
                imageAlt={`Papel de parede da galeria ${item.name}`}
                name={item.name}
                url={`/home/${item._id}`}
              />
            ))}
        </section>
      </article>
    </div>
  );
};

export default Home;
