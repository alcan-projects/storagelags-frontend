import { NextPage } from "next";

// icons
import { AiOutlineEdit, AiOutlineStar } from "react-icons/ai";
import { BiTrashAlt } from "react-icons/bi";

// components
import Button from "../../../../components/Button";
import PlayAudio from "../../../../components/PlayAudio";

// interfaces
import { ItemScore } from "../../../../interfaces/item";
type ListItemType = {
  item: ItemScore;
};

// styles
import style from "./ListItens.module.scss";

const ListItem: NextPage<ListItemType> = ({ item }) => {
  return (
    <li>
      <div>{item.name}</div>
      <div>
        <Button
          text={
            <>
              <AiOutlineStar />
              Impulsionar
            </>
          }
        />
      </div>
      <div>
        <PlayAudio progress={70} />
      </div>
      <div className={style.controllers}>
        <Button text={<BiTrashAlt />} />
        <Button text={<AiOutlineEdit />} />
      </div>
    </li>
  );
};

export default ListItem;
