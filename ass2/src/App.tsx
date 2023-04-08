import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userlayout'
import Home from './pages/home'
import ProductDetail from './pages/product'
import Singup from './pages/singup'
import Singin from './pages/singin'
import AdminLayout from './components/layout/admin'
import Dashboard from './pages/dashboard'



function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Singup />} />
      <Route path='/signin' element={<Singin />} />

      <Route path='/' element={<UserLayout />}> {/* Layout */}
        <Route index element={<Home />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Route>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
