import React from "react" 
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import CoinList from "./components/Coinlist"

import "./App.css";


function App() {
  return (
    <Router>
      
      <Navbar/>
      
      <div className="coinatiner">
        <Switch>
          <Route path="/markets" component={CoinList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
