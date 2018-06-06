import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './redux/counter/index';
import logger from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
