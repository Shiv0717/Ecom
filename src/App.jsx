import React from 'react'
import Home from './Pages/Home'
import ProductDet from './components/ProductDetails/ProductDet'
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="/ProductDet/:id" element={<ProductDet />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
