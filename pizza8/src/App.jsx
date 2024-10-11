import './App.css'
import { useState } from 'react'
import Navbar from "./components/Navbar" 
import Footer from "./components/Footer" 
import Home from "./pages/Home" 
import CardPizza from './pages/CardPizza'
import Register from './pages/Register'
import Login from './pages/Login'
import Pizza from './pages/Pizza'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/p001' element={<Pizza/>}/>
        <Route path='/profile' element={<Profile email="hugomansilla@gmail.com"/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      <div className='row m-3'>
        <CardPizza name="Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
        <CardPizza name="Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>
        <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]} img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"/>
      </div>

      <Footer/>
    </>
  )
}

export default App
