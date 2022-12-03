import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../api/baseUrl";
import { Table } from "../../components";
import {
  Reservation,
  FilterOptions,
  SearchOptions,
} from "../../types/reservations";
import dataJson from "../../api/data.json";

interface TableContainerProps {
  options: FilterOptions;
  search: SearchOptions;
}

const TableContainer: React.FC<TableContainerProps> = ({ options, search }) => {
  const [data, setData] = useState<Reservation[] | null | undefined>(null);
  const [isEmpty, setIsEmpty] = useState<Boolean>(false);
  const [filteredData, setFilteredData] = useState<
    Reservation[] | null | undefined
  >(null);
  const jsonData: Reservation[] | any = dataJson;
  const getTableData = async () => {
    // simulate api request
    setTimeout(() => {
      setData(jsonData.reservations);
    }, 2000);
  };
  useEffect(() => {
    getTableData();
  }, [data]);

  const filterData = (options: FilterOptions) => {
    isEmpty && setIsEmpty(false);
    let filteredData = data?.filter((data: Reservation) => {
      let myDate = new Date(options.date);
      let dataDate = new Date(data.date);

      return (
        options.status === data.status &&
        options.shifts === data.shifts &&
        options.area === data.area &&
        (!isNaN(myDate.getTime())
          ? myDate.getTime() >= dataDate.getTime()
          : true)
      );
    });
    if (filteredData?.length === 0) setIsEmpty(true);
    setFilteredData(filteredData);
  };
  const searchData = (search: SearchOptions) => {
    isEmpty && setIsEmpty(false);
    let filteredData = data?.filter((data: Reservation) => {
      return (
        (search.name
          ? search.name?.toLowerCase() === data.guest.name.toLowerCase()
          : true) &&
        (search.surname
          ? search.surname?.toLowerCase() === data.guest.surname.toLowerCase()
          : true)
      );
    });
    if (filteredData?.length === 0) setIsEmpty(true);
    setFilteredData(filteredData);
  };

  useEffect(() => {
    filterData(options);
    if (data && Object.keys(options).length === 0) {
      setFilteredData([]);
      setIsEmpty(false);
    }
  }, [options]);

  useEffect(() => {
    searchData(search);
    if (data && Object.keys(search).length === 0) {
      setFilteredData([]);
      setIsEmpty(false);
    }
  }, [search]);

  return (
    <section>
      {
        <Table
          isEmpty={isEmpty}
          data={filteredData && filteredData?.length > 0 ? filteredData : data}
        />
      }
    </section>
  );
};

export default TableContainer;
