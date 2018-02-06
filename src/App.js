import React, { Component } from 'react';
import './App.css';

import {Route} from 'react-router-dom'
import { Link }  from 'react-router-dom'
import Supplier from './Supplier'


class App extends Component {
  render() {
    return (
        <div>

            <Route exact path="/" render={() => (
                <div>
                   XXX 
                  <Link className='open-search open-search-link' to='/supplier'>Add a book</Link>
                </div>
              )}
            />


            <Route exact path="/supplier" render={() => (
              <Supplier/>
              )}
            />


        </div>

    );
  }
}

export default App;
