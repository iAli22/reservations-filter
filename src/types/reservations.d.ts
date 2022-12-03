export interface Guest {
  name: string;
  surname: string;
  number: number;
}

export interface Reservation {
  id: number;
  guest: Guest;
  date: string;
  status: string;
  area: string;
  shifts: string;
}

export interface Reservations {
  reservations: Reservation[];
}

export interface FilterOptions {
  status?: string;
  shifts?: string;
  area?: string;
  date?: any;
}
export interface SearchOptions {
  name?: string | undefined;
  surname?: string | undefined;
}
