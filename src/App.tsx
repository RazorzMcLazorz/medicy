import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { paths } from './common/helperFunctions/URL/constants'
import './App.css'

import MainPage from './pages/MainPage/mainPage'
import LoginPage from './pages/Login/loginPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.root} element={<MainPage />} />
        <Route path={paths.login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
