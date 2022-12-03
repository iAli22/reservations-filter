import React from "react";
import DataTable from "react-data-table-component";
import style from "./Table.module.scss";
import { Reservation } from "../../types/reservations";
import { columns } from "../../constants/Columns";
import Spinner from "../Spinner/Spinner";

interface TableProps {
  data: Reservation[] | null | undefined;
  isEmpty: Boolean;
}

const Table: React.FC<TableProps> = ({ data, isEmpty }) => {
  return (
    <div className={style.table}>
      {data && data?.length > 0 && (
        <DataTable columns={columns} data={isEmpty ? [] : data} pagination />
      )}

      {!data && <Spinner />}
    </div>
  );
};

export default Table;
