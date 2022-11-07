import { NextPage } from "next";
import style from "./style.module.scss";

type SelectType = {
  title?: string;
  name?: string;
  placeholder: string;
  options?: Array<{
    value: any;
    text: any;
  }>;
  onChange: (value: any) => void;
  value: any;
};
const Select: NextPage<SelectType> = ({
  placeholder,
  options = [],
  name,
  title,
  onChange,
  value,
}) => {
  return (
    <select
      className={style.Select}
      title={title}
      name={name}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      <option value="">{placeholder}</option>
      {options &&
        options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
    </select>
  );
};

export default Select;
