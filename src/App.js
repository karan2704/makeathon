import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ListDisplay from './containers/listDisplay'
import CheckOut from './containers/checkout'
import Payment from './containers/payment'

import './App.css';






function App() {
  return (
    <React.Fragment>
      <div className='Toolbar'>
        <div className='Logo'><h2>GROCERY</h2></div>
        <div className='Menu'><h4>CART</h4></div>
      </div>
      <div className="App">
      <Router>
        <Route path='/' exact component={ListDisplay} />
        <Route path='/checkout' exact component={CheckOut} />
        <Route path='/payment' exact component={Payment} />
      </Router>
     </div>
    </React.Fragment>
      
  );
}

export default App;
