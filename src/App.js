import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import './App.css';
import Home from './Components/Home/Home'
import SingleCategory from './Components/SingleCategory/SingleCategory'

function App() {
  return (
    <div className="App">
      <img id='chuck-img' src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png" alt="chuck"/>
      <Router>
          <Switch>
            <Route exact path="/"><Home /> </Route>
            <Route exact path="/singleCategory/:category"><SingleCategory /> </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
