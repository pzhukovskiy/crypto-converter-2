import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListAbout from './components/about/ListAbout'
import NotFound from './components/notFound/NotFound'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path="/about/:rank" element={<ListAbout/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
 </BrowserRouter>
  )
}

export default App