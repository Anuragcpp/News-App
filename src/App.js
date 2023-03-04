import React, { Component } from 'react'
import News from './component/News';
import Navbar from './component/Navbar';
import FirstNews from './component/FirstNews'
import SecondNews from './component/SecondNews'
import ThiredNews from './component/ThiredNews'
import ForthNews from './component/ForthNews'
import FifthNews from './component/FifthNews'
// import { Anchor } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// const {Link}= Anchor;

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
              <Navbar />
              <Routes> 
                  <Route exact path='/' element={ <News /> } />
              </Routes>
              <Routes> 
                  <Route exact path='/firstNews' element={ <FirstNews/> } />
              </Routes><Routes> 
                  <Route exact path='/SecondNews' element={ <SecondNews/> } />
              </Routes>
              <Routes> 
                  <Route exact path='/ThiredNews' element={ <ThiredNews/> } />
              </Routes>
              <Routes> 
                  <Route exact path='/ForthNews' element={ <ForthNews/> } />
              </Routes>
              <Routes> 
                  <Route exact path='/FifthNews' element={ <FifthNews/> } />
              </Routes>
        </div>
      </Router>
    )
  }
}

export default App
