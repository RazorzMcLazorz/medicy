import React, { useState } from 'react'
import useUserInfo from 'hooks/UserInfoHook/useUserInfo'
import Button from 'globals/components/button/Button'
import MainPageBackground from 'globals/mainPageBackground/mainPageBackground'
import TextField from 'globals/components/textField/TextField'
import { paths } from 'globals/helperFunctions/URL/constants'
import './styles.css'

const LoginPage = () => {
  const [messageState, setMessageState] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [{ userName }] = useUserInfo()

  return (
    <div className='login'>
      <MainPageBackground />
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
            id='username'
            name='username'
            label='Username:'
            onChange={(val) => setName(val)}
            value={name}
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
          <Button
            onClick={() => {
              console.log('login')
            }}>
            Login
          </Button>
          <br />
          <a href={paths.signUp}>Sign Up?</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
