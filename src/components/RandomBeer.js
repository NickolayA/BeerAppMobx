import React from "react";
import BeerCard from "./BeerCard";
import { observer, inject } from "mobx-react";

@inject("randomBeerStore")
@observer
export class RandomBeer extends React.Component {
  render() {
    const { randomBeerStore } = this.props;
    const activeModal = randomBeerStore.showModal ? "is-active" : null;

    return (
      <React.Fragment>
        {randomBeerStore.showModal ? (
          <div className={`modal ${activeModal}`}>
            <div className="modal-background" />
            <div className="modal-content">
              <BeerCard beerData={randomBeerStore.randomBeer} />
            </div>
            <button
              onClick={randomBeerStore.hideRandomBeer}
              className="modal-close is-large"
              aria-label="close"
            />
          </div>
        ) : null}
        <button
          className="pagination-link"
          onClick={randomBeerStore.showRandomBeer}
        >
          Show Random Beer
        </button>
      </React.Fragment>
    );
  }
}
