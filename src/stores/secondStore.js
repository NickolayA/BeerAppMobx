import { observable, runInAction, action } from 'mobx';

export class SecondStore {
    @observable isLoading = false;
    @observable beers = [];

    @action loadBeers = () => {
        this.isLoading = true;

        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => {
            runInAction(() => {
                this.beers = data;
                this.isLoading = false;
            })
        })
    }
}
