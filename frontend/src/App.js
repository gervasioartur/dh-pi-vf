import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//components
import NavBar from './components/layout/NavBar';
import Message from './components/layout/Message'
import Footer from './components/layout/Footer';

//pages
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Recovery from './pages/auth/recovery';
import Home from './templates/home';
import ProductDetails from './pages/Product details';
import Cart from './pages/Cart';

//context
import { UserProvider } from './context/UserContext'


function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <NavBar />
        <Message />
        <Switch>
          <Route path='/login'  >
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/Recovery'>
            <Recovery />
          </Route>
          <Route path='/productdetails/:id'>
              <ProductDetails/>
          </Route>
          <Route path='/cart/'>
              <Cart/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
