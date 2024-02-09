import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeComponent from './components/HomeComponent/HomeComponent'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
      <div className='myapp'>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomeComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App