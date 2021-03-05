import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ListDisplay from './containers/listDisplay'
import CheckOut from './containers/checkout'

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={ListDisplay} />
        <Route path='/checkout' exact component={CheckOut} />
      </Router>
        
    </div>
  );
}

export default App;
