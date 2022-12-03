import { useState } from "react";
import { Container } from "../../components";
import { SearchContainer, TableContainer } from "../../containers";
import { FilterOptions, SearchOptions } from "../../types/reservations";
import style from "./App.module.scss";
function App() {
  const [options, setOptions] = useState({});
  const [search, setSearch] = useState({});
  const getOptions = (options: FilterOptions) => {
    setOptions(options);
  };
  const getSearch = (search: SearchOptions) => {
    setSearch(search);
  };

  return (
    <main className={style.app}>
      <Container>
        <SearchContainer getOptions={getOptions} getSearch={getSearch} />
        <TableContainer options={options} search={search} />
      </Container>
    </main>
  );
}

export default App;
