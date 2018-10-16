// import { SHOW_RANDOM_BEER, HIDE_RANDOM_BEER } from "../actions/types";
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
          console.log("Response");
          console.log(this.showModal);
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

// const randomBeerReducer = (
//   state = {
//     showModal: false,
//     randomBeer: {}
//   },
//   action
// ) => {
//   switch (action.type) {
//     case SHOW_RANDOM_BEER:
//       return {
//         showModal: true,
//         randomBeer: action.randomBeer
//       };
//     case HIDE_RANDOM_BEER:
//       return {
//         showModal: false
//       };
//     default:
//       return state;
//   }
// };

// export default randomBeerReducer;
