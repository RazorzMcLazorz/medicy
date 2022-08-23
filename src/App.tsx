import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Account } from 'appwrite'
import useUserInfo from 'hooks/UserInfoHook/useUserInfo'
import { paths } from 'globals/helperFunctions/URL/constants'
import { getLocalStorage } from 'globals/helperFunctions/Utils/utils'
// Pages
import MainPage from 'pages/MainPage/mainPage'
import LoginPage from 'pages/Login/loginPage'
import SignUp from 'pages/SignUp/SignUp'

import './App.css'

const App = ({ client }: { client: any }) => {
  const [, { setUserName }] = useUserInfo()

  useEffect(() => {
    const jwt = getLocalStorage('jwt')
    if (jwt) {
      client.setJWT(jwt)
      const account = new Account(client)

      account.get().then(
        function (response) {
          console.log(response) // Success
          setUserName(response.name)
        },
        function (error) {
          console.log(error) // Failure
        }
      )
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.root} element={<MainPage client={client} />} />
        <Route path={paths.login} element={<LoginPage client={client} />} />
        <Route path={paths.signUp} element={<SignUp client={client} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
