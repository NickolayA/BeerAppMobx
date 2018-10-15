import React from "react";
import { observer, inject } from "mobx-react";

// import { LOAD_NEXT_PAGE, LOAD_PREVIOUS_PAGE } from "../actions/types";
// import { makeApiRequestWithParameters } from "../actions/actions";

@observer
@inject("paginationStore")
export class Pagination extends React.Component {
  render() {
    const store = this.props.paginationStore;

    return (
      <React.Fragment>
        <button
          disabled={store.page === 1}
          className="pagination-previous"
          onClick={store.loadPreviousPage}
        >
          Previous
        </button>

        <button
          disabled={!store.showNextButton}
          className="pagination-next"
          onClick={store.loadNextPage}
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     pageNumber: state.paginationReducer.page,
//     showNextButton: state.paginationReducer.showNextButton
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     loadNextPage: () => {
//       dispatch({ type: LOAD_NEXT_PAGE });
//       dispatch(makeApiRequestWithParameters());
//     },
//     loadPreviousPage: () => {
//       dispatch({ type: LOAD_PREVIOUS_PAGE });
//       dispatch(makeApiRequestWithParameters());
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Pagination);
