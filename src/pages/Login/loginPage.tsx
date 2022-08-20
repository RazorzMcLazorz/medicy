import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Account } from 'appwrite'
import useUserInfo from 'hooks/UserInfoHook/useUserInfo'
import Button from 'globals/components/button/Button'
import MainPageBackground from 'globals/mainPageBackground/mainPageBackground'
import TextField from 'globals/components/textField/TextField'
import IconButton from 'globals/components/IconButton/IconButton'
import URL from 'globals/helperFunctions/URL/URL'
import { setLocalStorage } from 'globals/helperFunctions/Utils/utils'
import './styles.css'

const LoginPage = ({ client }: { client: any }) => {
  const [messageState, setMessageState] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [, { setUserName }] = useUserInfo()
  const account = new Account(client)

  const onSubmit = () => {
    account.createEmailSession(email, password).then(
      (accountLoginResponse) => {
        const promise = account.createJWT()
        promise.then(
          function (jwtResponse) {
            console.log(accountLoginResponse)
            console.log(jwtResponse) // Success
            setLocalStorage('sessionId', accountLoginResponse.$id)
            setLocalStorage('userId', accountLoginResponse.userId)
            setLocalStorage('jwt', jwtResponse.jwt)
            account.get().then(
              function (response) {
                console.log(response) // Success
                setUserName(response.name)
                navigate(URL.root, { replace: true })
              },
              function (error) {
                console.log(error) // Failure
              }
            )
          },
          function (error) {
            console.log(error) // Failure
          }
        )
      },
      (error) => {
        setMessageState(error.response.message)
      }
    )
  }

  return (
    <div className='login'>
      <MainPageBackground />
      <div className='iconButtonBackButton'>
        <IconButton icon='arrowBackIcon' onClick={() => navigate(URL.root, { replace: true })} />
      </div>
      <div>
        <div className='loginComponent'>
          <div>Login</div>
          {messageState ? (
            <>
              <br />
              <div>{messageState}</div>
            </>
          ) : null}
          <br />
          <TextField
            id='email'
            name='email'
            label='Email:'
            onChange={(val) => setEmail(val)}
            value={email}
          />
          <br />
          <TextField
            id='password'
            name='password'
            label='Password:'
            onChange={(val) => setPassword(val)}
            value={password}
          />
          <br />
          <Button onClick={() => onSubmit()}>Login</Button>
          <br />
          <a href={URL.signUp}>Sign Up?</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
