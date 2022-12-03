import { Reservation } from "../types/reservations";
import { TableColumn } from "react-data-table-component";
import { convertKeyToString } from "../helpers";

export const columns: TableColumn<Reservation>[] = [
  {
    name: "Reservation ID",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Guest Name",
    selector: (row) => row.guest.name,
    sortable: true,
  },
  {
    name: "Guest Surname",
    selector: (row) => row.guest.surname,
  },
  {
    name: "Shifts",
    selector: (row) => row.shifts,
  },
  {
    name: "Status",
    selector: (row) => convertKeyToString(row.status),
  },
  {
    name: "Area",
    selector: (row) => row.area,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
];
