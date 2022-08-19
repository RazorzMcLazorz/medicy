import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { paths } from './common/helperFunctions/URL/constants'
import './App.css'

import MainPage from './pages/MainPage/mainPage'
import LoginPage from './pages/Login/loginPage'
import SignUp from './pages/SignUp/SignUp'

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
