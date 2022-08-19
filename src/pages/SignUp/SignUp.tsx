import React, { useState } from 'react'
import { Account } from 'appwrite'
import useUserInfo from '../../hooks/UserInfoHook/useUserInfo'
import Button from '../../components/button/Button'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import TextField from '../../components/textField/TextField'
import URL from '../../common/helperFunctions/URL/URL'
import './styles.css'

const SignUp = ({ client }: { client: any }) => {
  const [messageState, setMessageState] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [{ userName }] = useUserInfo()
  const account = new Account(client)

  // Register User
  account.create('unique()', 'me@example.com', 'password', 'Jane Doe').then(
    (response) => {
      console.log(response)
    },
    (error) => {
      console.log(error)
    }
  )

  return (
    <div className='login'>
      <MainPageBackground />
      <div>
        <div className='loginComponent'>
          <div>Registration</div>
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
              console.log('sign up')
            }}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
