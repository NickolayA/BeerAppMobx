import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { App } from "./components/App";
import { PaginationStore } from "./stores/PaginationStore";
import { FilterStore } from "./stores/FilterStore";
import { BeerDataStore } from "./stores/BeerDataStore";
import { LoadingIndicatorStore } from "./stores/LoadingIndicatorStore";
import { RandomBeerStore } from "./stores/RandomBeerStore";

// create paginationStore object from PaginationStore class
const paginationStore = new PaginationStore();
const filterStore = new FilterStore();
const beerDataStore = new BeerDataStore();
const loadingIndicatorStore = new LoadingIndicatorStore();
const randomBeerStore = new RandomBeerStore();

const Main = () => (
  <Provider
    paginationStore={paginationStore}
    filterStore={filterStore}
    beerDataStore={beerDataStore}
    loadingIndicatorStore={loadingIndicatorStore}
    randomBeerStore={randomBeerStore}
  >
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById("app"));
