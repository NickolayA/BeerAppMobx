import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { FirstStore } from "./stores/firstStore";
import App from "./components/App";
import { SecondStore } from "./stores/secondStore";
import { ThirdStore } from "./stores/thirdStore";
import { PaginationStore } from "./stores/PaginationStore";
import { FilterStore } from "./stores/FilterStore";
import { BeerDataStore } from "./stores/BeerDataStore";

const firstStore = new FirstStore();
const secondStore = new SecondStore(firstStore);
const thirdStore = new ThirdStore();
// create paginationStore object from PaginationStore class
const paginationStore = new PaginationStore();
const filterStore = new FilterStore();
const beerDataStore = new BeerDataStore();

const Main = () => (
  <Provider
    firstStore={firstStore}
    secondStore={secondStore}
    thirdStore={thirdStore}
    paginationStore={paginationStore}
    filterStore={filterStore}
    beerDataStore={beerDataStore}
  >
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById("app"));
