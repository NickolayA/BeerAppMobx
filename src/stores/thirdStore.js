import { observable, computed } from 'mobx';

export class ThirdStore {
    
    
    @observable value = 1;
    @observable list = [];
    @observable filter = {};

    @computed get computedValue() {
        console.log('get @computed value');

        return this.value;
    }

    increase = () => {
        ++this.value;
    }
}
