import React, { useState } from 'react'
import useUserInfo from '../../hooks/UserInfoHook/useUserInfo'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import TextField from '../../components/textField/TextField'
import URL from '../../common/helperFunctions/URL/URL'
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
          <div>Enter your login credentials even if you havent created an account before.</div>
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
        </div>
      </div>
    </div>
  )
}

export default LoginPage
