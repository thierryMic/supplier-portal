import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import logger from 'redux-logger'


import { BrowserRouter } from 'react-router-dom';


const store = createStore(allReducers,applyMiddleware(logger));


ReactDOM.render(<BrowserRouter>
					<Provider store={store}>
						<App />
					</Provider>
				</BrowserRouter>,
				document.getElementById('root')
			)


