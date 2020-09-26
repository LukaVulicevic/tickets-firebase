import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Home, AddTicket, EditTicket} from './pages'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/addticket'>
          <AddTicket />
        </Route>
        <Route path='/edit/:ticketId'>
          <EditTicket />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
