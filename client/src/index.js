import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
// import {Middleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index'

import App from "./App";
import './index.css';

const store=configureStore({reducer: reducers,middleware:[thunk]})
// const store=configureStore(reducers,compose(applyMiddleware(thunk)));

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//     ,document.getElementById('root'));


    createRoot(document.getElementById('root')).render( <Provider store={store}>
        <App/>
    </Provider>)