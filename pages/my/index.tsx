/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// styles
import Utils from "../../src/styles/Utils.module.css";

// types
import { GalleryResponse } from "../../src/interfaces/gallery";
import BoxList from "../../src/components/BoxList";
import Button from "../../src/components/Button";

const Home: NextPage = () => {
  const [data, setData] = useState<Array<GalleryResponse>>([]);

  useEffect(() => {
    const LS: any = localStorage.getItem("user");
    const informationUser = JSON.parse(LS);
    api.get(`/gallery/user/${informationUser.userId}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <section className={Utils.ContainerStart}>
      <div className={Utils.BoxBtnEnd}>
        <Button
          link="/my/add"
          select={false}
          text="Adicionar galeria"
          type="button"
        />
      </div>
      {data &&
        data.map((item, index) => (
          <BoxList
            key={index}
            image={item.image}
            imageAlt={`Papel de parede da galeria ${item.name}`}
            name={item.name}
            url={`/my/${item._id}`}
          />
        ))}
    </section>
  );
};

export default Home;
