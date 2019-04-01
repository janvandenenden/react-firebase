import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// we need to create a redux store so we need to import a function to do so.
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
// we need to link the react app to our redux store. To do this we use the Provider Component
import { Provider } from 'react-redux';

// create redux store by call createStore function - it needs a reducer as a parameter
const store = createStore(rootReducer);

// we surround the app witht the provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
