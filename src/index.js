import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore} from 'redux';
import allReducers from './reducers';

import { BrowserRouter } from 'react-router-dom';


const store = createStore(allReducers);


ReactDOM.render(<BrowserRouter>
					<Provider store={store}>
						<App />
					</Provider>
				</BrowserRouter>,
				document.getElementById('root')
			)


