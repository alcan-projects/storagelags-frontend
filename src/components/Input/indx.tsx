import { NextPage } from "next";
import style from "./style.module.scss";

type InputType = {
  title?: string;
  name?: string;
  placeholder?: string;
  type?: "text" | "password" | "date" | "email";
  onChange: (value: any) => void;
  value: any;
};

const Input: NextPage<InputType> = ({
  placeholder,
  type = "text",
  title,
  name,
  value,
  onChange,
}) => {
  return (
    <input
      title={title}
      name={name}
      className={style.Input}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
