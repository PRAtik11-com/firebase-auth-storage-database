// import React from 'react'

import { Route, Routes } from "react-router"
import Home from "../component/Home"
import Login from "../component/Login"
import Navbar from "../component/Navbar"
import Product from "../component/Product"
import Private from "../component/Private"
import Addproduct from "../component/Addproduct"

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Product' element={
            <Private>
            <Product />
            </Private>
            }></Route>
        <Route path='/Addproduct' element={<Addproduct />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>

      </Routes>
    </div>
  )
}

export default Mainroute
