import { NextPage } from "next";
import style from "./style.module.scss";

type ModalType = {
  props: any;
  closed?: () => void;
};

const Modal: NextPage<ModalType> = ({ props, closed }) => {
  return (
    <div className={style.Modal}>
      <section>{props}</section>
      <div className={style.closed} onClick={closed}></div>
    </div>
  );
};

export default Modal;
