// import {
//   SHOW_LOADING_INDICATOR,
//   HIDE_LOADING_INDICATOR
// } from "../actions/types";

import { observable, action } from "mobx";

export class LoadingIndicatorStore {
  @observable
  show = false;

  @action
  showLoadingIndicator = () => {
    console.log("Hello owrld LoadingDat");
    this.show = true;
  };

  @action
  hideLoadingIndicator = () => {
    this.show = false;
  };
}

// const loadingIndicatorReducer = (
//   state = {
//     show: false
//   },
//   action
// ) => {
//   switch (action.type) {
//     case SHOW_LOADING_INDICATOR:
//       return {
//         show: true
//       };
//     case HIDE_LOADING_INDICATOR:
//       return {
//         show: false
//       };
//     default:
//       return state;
//   }
// };

// export default loadingIndicatorReducer;
