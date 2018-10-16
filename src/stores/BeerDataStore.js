import { observable, action, runInAction } from "mobx";
import axios from "axios";
export class BeerDataStore {
  baseUrl = "https://api.punkapi.com/v2/beers?";
  @observable
  beerData = [];

  @action
  clearBeerDataStore = () => {
    this.beerData = [];
  };

  @action
  loadNewBeerData = (loadingIndicatorStore, filterStore, paginationStore) => {
    const beerSearchParameters = filterStore.filterState;
    const { page, per_page } = paginationStore;
    let requestUrlWithParameters = this.baseUrl;
    const beerSearchParametersLength = Object.keys(beerSearchParameters);
    loadingIndicatorStore.showLoadingIndicator();

    if (beerSearchParametersLength) {
      Object.keys(beerSearchParameters).forEach((beerParameter, index) => {
        const key = beerParameter,
          value = beerSearchParameters[beerParameter].replace(" ", "_");

        requestUrlWithParameters += `${key}=${value}&`;
      });
    }
    const requestWithPagination =
      requestUrlWithParameters + `page=${page}&per_page=${per_page}`;
    const requestWithPaginationCheck =
      requestUrlWithParameters + `page=${page + 1}&per_page=${per_page}`;

    Promise.all([
      axios(requestWithPagination),
      axios(requestWithPaginationCheck)
    ])
      .then(results => {
        runInAction(() => {
          loadingIndicatorStore.hideLoadingIndicator();
          const responseWithPagination = results[0].data;
          const responseWithPaginationCheck = results[1].data;

          if (!responseWithPagination.length) throw new Error();

          responseWithPaginationCheck.length
            ? paginationStore.printNextButton(true)
            : paginationStore.printNextButton(false);

          this.beerData = responseWithPagination;
        });
      })
      .catch(err => {
        console.log("Mistate", err);
        loadingIndicatorStore.hideLoadingIndicator();
        this.clearBeerDataStore();
      });
  };
}
