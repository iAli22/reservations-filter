import React from "react";
import style from "./Input.module.scss";

interface InputProps {
  type: string;
  title: string;
  name: string;
  placeHolder: string;
  value: any;
  getData: (val: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  title,
  name,
  placeHolder,
  value,
  getData,
}) => {
  return (
    <div className={style.input}>
      <label htmlFor={name}>{title}</label>
      <input
        placeholder={placeHolder}
        id={name}
        name={name}
        type={type}
        onChange={getData}
        value={value || ""}
      />
    </div>
  );
};

export default Input;
