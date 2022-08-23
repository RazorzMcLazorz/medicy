import React, { useState } from 'react'
import { Account } from 'appwrite'
import { useNavigate } from 'react-router-dom'
import Button from 'globals/components/button/Button'
import MainPageBackground from 'globals/mainPageBackground/mainPageBackground'
import TextField from 'globals/components/textField/TextField'
import IconButton from 'globals/components/IconButton/IconButton'
import URL from 'globals/helperFunctions/URL/URL'
import './styles.css'

const SignUp = ({ client }: { client: any }) => {
  const [messageState, setMessageState] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const account = new Account(client)

  const onSubmit = () => {
    account.create('unique()', email, password, name).then(
      (response) => {
        console.log(response)
        navigate(URL.login, { replace: true })
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
          <Button onClick={() => onSubmit()} disabled={!name && !password && !email}>
            Sign Up
          </Button>
          <br />
          <a href={URL.login}>Login?</a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
