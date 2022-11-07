import Link from "next/link";
import React from "react";
import style from "./style.module.css";

type ButtonType = {
  text: string;
  onClick?: () => void;
  link?: string;
  type?: "button" | "submit" | "reset";
  select?: boolean;
};

const Button: React.FC<ButtonType> = ({
  text,
  onClick,
  link,
  type = "button",
  select = false,
}) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <button
            onClick={onClick}
            className={`${style.button} ${select && style.buttonSelect}`}
            type="button"
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`${style.button} ${select && style.buttonSelect}`}
          type={type}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
