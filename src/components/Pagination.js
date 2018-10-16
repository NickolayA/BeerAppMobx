import React from "react";
import { observer, inject } from "mobx-react";

@inject(
  "filterStore",
  "paginationStore",
  "beerDataStore",
  "loadingIndicatorStore"
)
@observer
export class Pagination extends React.Component {
  render() {
    const {
      paginationStore,
      filterStore,
      beerDataStore,
      loadingIndicatorStore
    } = this.props;

    return (
      <React.Fragment>
        <button
          disabled={paginationStore.page === 1}
          className="pagination-previous"
          onClick={() => {
            paginationStore.loadPreviousPage();
            beerDataStore.loadNewBeerData(
              loadingIndicatorStore,
              filterStore,
              paginationStore
            );
          }}
        >
          Previous
        </button>

        <button
          disabled={!paginationStore.showNextButton}
          className="pagination-next"
          onClick={() => {
            paginationStore.loadNextPage();
            beerDataStore.loadNewBeerData(
              loadingIndicatorStore,
              filterStore,
              paginationStore
            );
          }}
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}
