/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { IoCloseOutline } from "react-icons/io5";
import { ReferencesScore } from "../../interfaces/item";

import style from "./style.module.scss";

type ReferencesListModalType = {
  list: Array<ReferencesScore>;
  itemName: string;
};

const ReferencesListModal: NextPage<ReferencesListModalType> = ({
  list,
  itemName,
}) => {
  return (
    <ul className={style.ReferencesListModal}>
      {list.length > 0 &&
        list.map((item, index) => (
          <>
            {item.type === "image" && (
              <li key={index}>
                <span>
                  <IoCloseOutline />
                </span>
                {item.type === "image" && (
                  <img
                    src={item.body}
                    title={`imagem de referencia do item ${itemName}`}
                    alt={`imagem de referencia do item ${itemName}`}
                  />
                )}
              </li>
            )}
            {item.type === "video" && (
              <li key={index}>
                <span>
                  <IoCloseOutline />
                </span>
                {item.type === "video" && (
                  <video
                    src={item.body}
                    title={`vídeo de referencia do item ${itemName}`}
                  />
                )}
              </li>
            )}
          </>
        ))}
    </ul>
  );
};

export default ReferencesListModal;
