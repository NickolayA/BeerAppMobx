import { action, observable } from "mobx";

export class PaginationStore {
  per_page = 5;

  @observable
  page = 1;

  @observable
  showNextButton = false;

  @action
  resetPagination = () => {
    this.page = 1;
    this.showNextButton = false;
  };

  @action
  loadPreviousPage = () => {
    if (this.page !== 1) this.page--;
  };

  @action
  loadNextPage = () => {
    this.page++;
  };

  @action
  printNextButton = yes => {
    this.showNextButton = yes;
  };
}
