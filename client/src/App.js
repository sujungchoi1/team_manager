import React from 'react';
import { Router, Redirect } from '@reach/router';
import Create from './views/Create';
import List from './views/List';
import Status from './views/Status';
import Edit from './views/Edit';
import './App.css'

function App() {
  return (
    <div className="wrapper">
        <Router>
          <Redirect from="/" to="/players/list" noThrow="true" />
          <List path="/players/list" />
          <Create path="/players/addplayer" />
          <Edit path="/players/:id" />
          <Status path="/status/game/1" />
        </Router>
    </div>
  );
}

export default App;