import React, { useState } from 'react'
import { Account } from 'appwrite'
import Button from '../../globals/components/button/Button'
import MainPageBackground from '../../globals/mainPageBackground/mainPageBackground'
import TextField from '../../globals/components/textField/TextField'
import { paths } from '../../globals/helperFunctions/URL/constants'
import './styles.css'

const SignUp = ({ client }: { client: any }) => {
  const [messageState, setMessageState] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
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
            }}
            disabled={!name && !password}>
            Sign Up
          </Button>
          <br />
          <a href={paths.login}>Login?</a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
