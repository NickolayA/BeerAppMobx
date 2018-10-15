import React from "react";
// import { connect } from "react-redux";
import { observer, inject } from "mobx-react";
import FilterItem from "./FilterItem";

// import { RESET_PAGINATION } from "../actions/types";

// import {
//   makeApiRequestWithParameters,
//   updateFilterState
// } from "../actions/actions";

@observer
@inject("filterStore", "paginationStore")
export class Filter extends React.Component {
  onFilterSubmit = e => {
    e.preventDefault();
    const { filterStore, paginationStore } = this.props;

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
    this.props.updateBeerReducerState();
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

// const mapStateToProps = state => {
//   return { apiParameters: state.apiParametersReducer };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     updateBeerReducerState: () => dispatch(makeApiRequestWithParameters()),
//     updateFilterState: filterState => dispatch(updateFilterState(filterState)),
//     resetPagination: () => dispatch({ type: RESET_PAGINATION })
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Filter);
