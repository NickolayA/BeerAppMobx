import { observable, action } from "mobx";

export class LoadingIndicatorStore {
  @observable
  show = false;

  @action
  showLoadingIndicator = () => {
    this.show = true;
  };

  @action
  hideLoadingIndicator = () => {
    this.show = false;
  };
}
