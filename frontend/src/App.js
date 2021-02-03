import React from "react" 
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"
import CoinList from "./components/Coins/CoinList"

import "./App.css";


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="coinatiner">
        <Switch>
          <Route path="/" component={CoinList}/>
        </Switch>
      </div>

      <Footer />
    </Router>

  );
}

export default App;
