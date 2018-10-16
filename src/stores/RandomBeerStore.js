import { observable, action, runInAction } from "mobx";
import axios from "axios";

export class RandomBeerStore {
  randomBeerUrl = "https://api.punkapi.com/v2/beers/random";

  @observable
  showModal = false;

  @observable
  randomBeer = {};

  @action
  showRandomBeer = () => {
    const response = axios(this.randomBeerUrl);

    response
      .then(data => {
        runInAction(() => {
          this.showModal = true;
          this.randomBeer = data.data[0];
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  @action
  hideRandomBeer = () => {
    this.showModal = false;
  };
}
