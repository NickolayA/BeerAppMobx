import React from "react";
import { observer, inject } from "mobx-react";
import FilterItem from "./FilterItem";

@inject(
  "filterStore",
  "paginationStore",
  "beerDataStore",
  "loadingIndicatorStore"
)
@observer
export class Filter extends React.Component {
  onFilterSubmit = e => {
    e.preventDefault();
    const {
      filterStore,
      paginationStore,
      beerDataStore,
      loadingIndicatorStore
    } = this.props;

    paginationStore.resetPagination();

    const beerParameters = {};
    Object.keys(filterStore.apiParameters).forEach(key => {
      const value = e.target.elements[key].value;
      if (value) {
        if (key === "brewed_before" || key === "brewed_after") {
          let tempValue = value
            .split("-")
            .reverse()
            .join("-");
          beerParameters[key] = tempValue;
          return;
        }
        beerParameters[key] = value;
      }
    });

    filterStore.updateFilterState(beerParameters);
    beerDataStore.loadNewBeerData(
      loadingIndicatorStore,
      filterStore,
      paginationStore
    );
  };

  render() {
    const { filterStore } = this.props;
    return (
      <form onSubmit={this.onFilterSubmit}>
        {Object.keys(filterStore.apiParameters).map(parameter => {
          return (
            <FilterItem
              key={"k" + parameter}
              fieldName={parameter}
              fieldType={filterStore.apiParameters[parameter]}
            />
          );
        })}
        <div className="field">
          <button className="button is-link">Filter</button>
        </div>
      </form>
    );
  }
}
