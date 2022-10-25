import React from "react";
import style from "./style.module.css";

type ButtonType = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonType> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
