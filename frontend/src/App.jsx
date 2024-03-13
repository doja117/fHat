import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admin from './admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainApp from './calculatorpage'


function App() {
  return (<BrowserRouter>
    <Routes>
      <Route
      exact
      path='/admin'
      element={<admin />}
      ></Route>
      <Route
      exact
      path='/'
      element={<MainApp />}
      ></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App
