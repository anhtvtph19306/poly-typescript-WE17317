import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/userlayout'
import Home from './pages/home'
import ProductDetail from './pages/product'
import Signup from './pages/signup'
import Signin from './pages/signin'
import AdminLayout from './components/layout/admin'
import Dashboard from './pages/dashboard'



function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />

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
