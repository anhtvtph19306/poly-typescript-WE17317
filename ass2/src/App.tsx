import { useState } from 'react'
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import UserLayout from './components/userlayout'
import Home from './pages/home'
import ProductDetail from './pages/product'
import Singup from './pages/singup'
import Singin from './pages/singin'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/singup' element={<Singup/>} />
      <Route path='/singin' element={<Singin/>} />

      <Route path='/' element={<UserLayout/>}> {/* Layout */}
        <Route index element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
