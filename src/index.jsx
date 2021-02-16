import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';
import Widget from './components/Widget';

import './index.css';

const store = createStore(reducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Widget />
    </Provider>,
    document.querySelector('#root')
);
