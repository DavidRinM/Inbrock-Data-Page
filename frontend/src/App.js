import React from "react" 
import { BrowserRouter as Router, Route} from "react-router-dom"

import { Layout } from 'antd'

import Navbar from "./components/Navbar"
import ReactFooter from "./components/Footer/Footer"
import CoinList from "./components/Coins/CoinList"
import Login from "./components/Login/Login"
import About from "./components/General/About"
import Events from "./components/Events/Events"

import "./App.css";

function App() {
  return(
    <Router>
      <Layout style={{minHeight: '100vh', lineHeight: '1.6rem'}}>
        <Navbar/>
          <Layout>
            <Route path="/" exact component={CoinList}/>
            <Route path="/about" exact component={About}/>
            <Route path="/events" exact component={Events}/>
            <Route path="/signin" exact component={Login}/>
          </Layout>
        <ReactFooter/>
      </Layout>
    </Router>
  );
}

export default App;

// export default class App extends Component {
//   render() {
//       return (
//           <Layout style={{minHeight: '100vh', lineHeight: '1.6rem'}}>    
//               <Navbar/>
//               <Layout>
//                   <Route path='/coins' component={CoinList}/>
//                   {/* <Route path='/coins/:coinId/' exact component={ReactCoinsDetail}/>
//                   <Route path='/exchanges/list' exact component={ReactExchangesList}/>
//                   <Route path='/global' exact component={ReactGlobal}/>
//                   <Route path='/events/list' exact component={ReactEvents}/>
//                   <Route path='/exchange-rates' exact component={ReactExchangeRates}/> */}
//               </Layout>
//               <ReactFooter/>
//           </Layout>
//       )
//   }
// }