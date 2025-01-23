import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Homepage from './components/homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= { <Navigate to = "/homepage" />}/>
          <Route path='/homepage' element = { <Homepage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App