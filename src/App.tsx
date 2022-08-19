import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { paths } from 'globals/helperFunctions/URL/constants'
// Pages
import MainPage from 'pages/MainPage/mainPage'
import LoginPage from 'pages/Login/loginPage'
import SignUp from 'pages/SignUp/SignUp'

import './App.css'

const App = ({ client }: { client: any }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.root} element={<MainPage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.signUp} element={<SignUp client={client} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
