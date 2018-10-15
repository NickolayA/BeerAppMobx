import { observable, action } from 'mobx';

export class FirstStore {
    title = 'Cities';
    @observable date = new Date().toString();
    @observable list = [
        'Minsk',
        'Moscow',
        'London'
    ];

    @action addCity = e => {
        if (e.keyCode !== 13) {
            return;
        }

        this.date = new Date().toString();
        this.list.push(e.target.value);

        e.target.value = null;
    }

    @action deleteCity = city => {
        this.list = this.list.filter(c => c !== city);
    }
}

