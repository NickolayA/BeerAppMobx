import React from "react";
import BeerCard from "./BeerCard";
import { observer, inject } from "mobx-react";

@inject("beerDataStore")
@observer
export class ShowCase extends React.Component {
  render() {
    const beerData = this.props.beerDataStore.beerData;
    return (
      <React.Fragment>
        {Object.keys(beerData).length ? (
          beerData.map(bd => {
            return <BeerCard key={bd.id} beerData={bd} />;
          })
        ) : (
          <h1>"Beers not founded"</h1>
        )}
      </React.Fragment>
    );
  }
}
