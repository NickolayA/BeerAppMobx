import React from "react";
import { observer, inject } from "mobx-react";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter";
import { RandomBeer } from "./RandomBeer";
import { ShowCase } from "./ShowCase";

@inject("loadingIndicatorStore")
@observer
export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App columns">
          <div className="column">
            <Filter />
          </div>
          <div className="column">
            <Pagination />
            <RandomBeer />
            {this.props.loadingIndicatorStore.show ? (
              <p>Loading..</p>
            ) : (
              <ShowCase />
            )}
            <Pagination />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
