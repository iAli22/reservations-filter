import React, { useState } from "react";
import { Input, Select } from "../../components";
import {
  AreaOptions,
  ShiftsOptions,
  StatusOptions,
} from "../../constants/data";
import { FilterOptions, SearchOptions } from "../../types/reservations";
import style from "./SearchContainer.module.scss";
interface SearchContainerProps {
  getOptions: (options: FilterOptions) => void;
  getSearch: (search: SearchOptions) => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  getOptions,
  getSearch,
}) => {
  const [defaultOptions, setDefaultOptions] = useState<FilterOptions>({
    shifts: "dinner",
    status: "not_confirmed",
    area: "egypt",
    date: "",
  });
  const [options, setOptions] = useState<FilterOptions>(defaultOptions);
  const [search, setSearch] = useState<SearchOptions>({});

  const getData = (e: React.ChangeEvent<HTMLInputElement> | any): any => {
    setOptions((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const getSearchData = (e: React.ChangeEvent<HTMLInputElement> | any): any => {
    setSearch((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className={style.searchContainer}>
        <Input
          getData={getSearchData}
          name="name"
          placeHolder="eg. Aly"
          title="Guest Name"
          type="text"
          value={search.name}
        />
        <Input
          getData={getSearchData}
          name="surname"
          placeHolder="eg. Mahdi"
          title="Guest surname"
          type="text"
          value={search.surname}
        />

        <div className={style.btnsContainer}>
          <button
            type="button"
            className={style.btn}
            onClick={() => getSearch(search)}
          >
            Search Logger
          </button>
          {Object.keys(search).length > 0 && (
            <button
              type="button"
              className={`${style.btn} ${style.resetBtn}`}
              onClick={() => {
                setSearch({});
                getSearch({});
              }}
            >
              X
            </button>
          )}
        </div>
      </section>

      <section className={style.searchContainer}>
        <Select
          title="Status"
          getData={getData}
          name="status"
          options={StatusOptions}
          value={options.status}
        />
        <Select
          title="Shifts"
          getData={getData}
          name="shifts"
          options={ShiftsOptions}
          value={options.shifts}
        />
        <Select
          title="Area"
          getData={getData}
          name="area"
          options={AreaOptions}
          value={options.area}
        />
        <Input
          getData={getData}
          placeHolder="Select Date"
          name="date"
          title="From Date"
          type="date"
          value={options.date}
        />

        <div className={style.btnsContainer}>
          <button
            type="button"
            className={style.btn}
            onClick={() => getOptions(options)}
          >
            Filter Reservations
          </button>
          {Object.keys(options).length > 0 && (
            <button
              type="button"
              className={`${style.btn} ${style.resetBtn}`}
              onClick={() => {
                setOptions(defaultOptions);
                getOptions({});
              }}
            >
              X
            </button>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchContainer;
