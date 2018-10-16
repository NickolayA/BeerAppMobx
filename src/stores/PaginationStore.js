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
    console.log("PrintNextButton");
    this.showNextButton = yes;
  };
}

// import {
//   RESET_PAGINATION,
//   LOAD_PREVIOUS_PAGE,
//   LOAD_NEXT_PAGE,
//   SHOW_NEXT_BUTTON
// } from "../actions/types";
// const initialState = {
//   page: 1,
//   per_page: 5,
//   showNextButton: false
// };
// const paginationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SHOW_NEXT_BUTTON:
//       return {
//         ...state,
//         showNextButton: action.showNextButton
//       };
//     case RESET_PAGINATION:
//       return initialState;
//     case LOAD_PREVIOUS_PAGE:
//       if (state.page === 1) {
//         return state;
//       } else {
//         return {
//           ...state,
//           page: state.page - 1
//         };
//       }
//     case LOAD_NEXT_PAGE:
//       return {
//         ...state,
//         page: state.page + 1
//       };
//     default:
//       return state;
//   }
// };

// export default paginationReducer;
