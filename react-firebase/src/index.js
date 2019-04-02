import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// we need to create a redux store so we need to import a function to do so.
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer';
// we need to link the react app to our redux store. To do this we use the Provider Component
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'; 

// create redux store by call createStore function - it needs a reducer as a parameter
// When we want to use external date (ie ajax) we need to use ReduxThunk.
// In order to use ReduxThunk we need to use the "applymiddleware" function.
// it is possible to add multiple store enhancers (applyMiddleware) in the createStore function
// and to add multiple middleware the this function
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// we surround the app witht the provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
