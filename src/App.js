import React from 'react'
import 'materialize-css/dist/css/materialize.min.css';

import NavBar from './components/NavBar';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
    <NavBar />
    <Routes>
       <Route exact path='/' Component={Home}/>
       <Route exact path='/cart' Component={Cart}/>
    </Routes>
   
    
    </div>
    </BrowserRouter>
  )

}

export default App;
