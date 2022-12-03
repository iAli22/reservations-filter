import React from "react";
import style from "./Select.module.scss";

interface SelectProps {
  name: string;
  title: string;
  options: { value: string; title: string }[];
  value: any;
  getData: (
    val: React.ChangeEventHandler<HTMLSelectElement> | any
  ) => React.ChangeEventHandler<HTMLSelectElement>;
}

const Select: React.FC<SelectProps> = ({
  name,
  title,
  options,
  value,
  getData,
}) => {
  return (
    <div className={style.select}>
      <label htmlFor={name}>{title}</label>
      <select
        id={name}
        name={name}
        onChange={getData}
        value={value || options[0].value}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
