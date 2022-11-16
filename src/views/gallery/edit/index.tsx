/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

// styles
import Utils from "../../../styles/Utils.module.scss";

// types
import Button from "../../../components/Button";

const GalleryEdit: NextPage = () => {
  return (
    <section className={Utils.ContainerStart}>
      <div className={Utils.BoxBtnStart}>
        <Button
          link="/gallery/add"
          select={false}
          text="Voltar"
          type="button"
        />
      </div>
    </section>
  );
};

export default GalleryEdit;
