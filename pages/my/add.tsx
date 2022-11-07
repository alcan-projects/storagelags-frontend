/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { api } from "../../src/utils/api";

// styles
import styleHome from "../../src/styles/Home.module.css";

// types
import { GalleryResponse } from "../../src/interfaces/gallery";
import Input from "../../src/components/Input/indx";

const Add: NextPage = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    // api.get(`/gallery/`).then((res) => {});
  }, []);

  return (
    <section className={styleHome.HomeIndex}>
      <h1>Adicionar galeria</h1>
      <form action="">
        <Input
          placeholder="Palavra ou frase"
          name="name"
          title="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </form>
    </section>
  );
};

export default Add;
