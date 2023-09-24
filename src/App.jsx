import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";
import SingleProduct from './SingleProduct/SingleProduct'
import Navbar from "./Component/Navbar/Navbar";


function App() {
  
return(
  <>
 <Navbar/>
<Routes>
  <Route index element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/singleproduct/:productid' element={<SingleProduct/>}/>
<Route path='*' element={<NotFound/>}/>
</Routes>

    </>
  )
}

export default App
