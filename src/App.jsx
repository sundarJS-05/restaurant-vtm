import { useState } from 'react'
import Layout from './components/Layout/Layout'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import PageNotFound from './pages/PageNotFound'

// Routes - acts as container |  Route - helps create reoutes


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>

          {/* All routes added below */}
          <Route path='/' element={<Home/>} />

          <Route path='about' element={<About/>} />

          <Route path='contact' element={<Contact/>} />

          <Route path='menu' element={<Menu/>} />

          <Route path='*' element={<PageNotFound/>} />


        </Routes>
      </BrowserRouter>

     
    </div>
  )
}

export default App
