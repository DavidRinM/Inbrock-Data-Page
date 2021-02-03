import React from "react" 
import {Route} from "react-router-dom"

import { Layout } from 'antd'

import Navbar from "./components/Navbar"
import ReactFooter from "./components/Footer/Footer"
import CoinList from "./components/Coins/CoinList"

import "./App.css";

function App() {
  return(
    <Layout style={{minHeight: '100vh', lineHeight: '1.6rem'}}>
      <Navbar/>
      <Layout>
        <Route path="/" component={CoinList}/>
      </Layout>
      <ReactFooter/>
    </Layout>
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