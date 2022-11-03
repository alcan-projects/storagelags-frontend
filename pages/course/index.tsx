import type { NextPage } from "next";

// components
import HeadSEO from "../../src/components/Head";
import Header from "../../src/components/Header";
import BoxList from "../../src/components/BoxList";

// styles
import style from "../../src/styles/Body.module.css";
import styleCource from "../../src/styles/Cource.module.css";
import { useState } from "react";

const Cources: NextPage = () => {
  const [data, setData] = useState([
    {
      _id: "23423423c4f234f324",
      name: "Curso de inglês",
      image:
        "https://certificadocursosonline.com/wp-content/uploads/2017/09/curso-de-ingles-online-gratis-1280x720.jpg",
    },
  ]);
  return (
    <div>
      <HeadSEO text="StorageLangs" />
      <Header menu={3} />
      <article className={style.Body}>
        <section className={styleCource.Cource}>
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

export default Cources;
