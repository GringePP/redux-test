import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/app.jsx';
import Counter from './components/counter.jsx';
import todoApp from './reducers';

const store = createStore(todoApp);
ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);