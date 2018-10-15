import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { FirstStore } from './stores/firstStore';
import App from './components/App';
import { SecondStore } from './stores/secondStore';
import { ThirdStore } from './stores/thirdStore';

const firstStore = new FirstStore();
const secondStore = new SecondStore(firstStore);
const thirdStore = new ThirdStore();

setTimeout(() => {
    firstStore.addCity({ keyCode: 13, target: { value: 'Warsawa' } })
}, 4000);

const Main = () => (
    <Provider 
        firstStore={firstStore}
        secondStore={secondStore}
        thirdStore={thirdStore}
    >
        <App />
    </Provider>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
