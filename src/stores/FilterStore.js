import { observable, action } from "mobx";
// import { UPDATE_FILTER_STATE } from "../actions/types";

export class FilterStore {
  apiParameters = {
    abv_gt: "number",
    abv_lt: "number",
    ibu_gt: "number",
    ibu_lt: "number",
    ebc_gt: "number",
    ebc_lt: "number",
    beer_name: "text",
    yeast: "text",
    brewed_before: "month",
    brewed_after: "month",
    hops: "text",
    malt: "text",
    food: "text"
  };

  @observable
  filterState = {};

  @action
  updateFilterState = newFilterState => {
    this.filterState = newFilterState;
  };
}
