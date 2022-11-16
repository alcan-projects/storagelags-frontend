/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { IoCloseOutline } from "react-icons/io5";

import style from "./style.module.scss";

type ReferencesListModalType = {
  list: Array<{
    url: string;
    type: "image" | "video";
    title: string;
  }>;
};

const ReferencesListModal: NextPage<ReferencesListModalType> = ({ list }) => {
  return (
    <ul className={style.ReferencesListModal}>
      {list.length &&
        list.map((item, index) => (
          <>
            {item.type === "image" && (
              <li key={index}>
                <span>
                  <IoCloseOutline />
                </span>
                {item.type === "image" && (
                  <img src={item.url} title={item.title} alt={item.title} />
                )}
              </li>
            )}
            {item.type === "video" && (
              <li key={index}>
                <span>
                  <IoCloseOutline />
                </span>
                {item.type === "video" && (
                  <video src={item.url} title={item.title} />
                )}
              </li>
            )}
          </>
        ))}
    </ul>
  );
};

export default ReferencesListModal;
