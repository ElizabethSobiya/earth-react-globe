import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about/index'
import Features from './components/features/index'
import Users from './components/users/index'
import Partners from './components/partners/index'
import Blog from './components/blog/index'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/index'
import Footer from './components/footer/footer'

function Head() {
  return (
   <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/features' element={< Features />}></Route>
        <Route exact path='/users' element={< Users/>}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/partners' element={< Partners />}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
      </Routes>
    </BrowserRouter>
      <Footer/>
   </>
  )
}

export default Head