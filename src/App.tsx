import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Account } from 'appwrite'
import useUserInfo from 'hooks/UserInfoHook/useUserInfo'
import URL from 'globals/helperFunctions/URL/URL'
import { getLocalStorage } from 'globals/helperFunctions/Utils/utils'
// Pages
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import SignUp from 'pages/SignUp/SignUp'
import CreateGame from 'pages/CreateGame/CreateGame'
import Game from 'pages/Game/Game'

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
          console.log(JSON.stringify(error)) // Failure
        }
      )
    }
    // This is meant to only run once on mount of the page
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={URL.root} element={<Home client={client} />} />
        <Route path={URL.login} element={<Login client={client} />} />
        <Route path={URL.signUp} element={<SignUp client={client} />} />
        <Route path={URL.createGame} element={<CreateGame client={client} />} />
        <Route path={URL.game} element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
