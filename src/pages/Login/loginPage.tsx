import React, { useEffect } from 'react'
import useUserInfo from '../../hooks/UserInfoHook/useUserInfo'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import URL from '../../common/helperFunctions/URL/URL'
import './styles.css'

const LoginPage = () => {
  const [{ userName }] = useUserInfo()

  return (
    <div className='login'>
      <MainPageBackground />
      <div>
        <div className='loginComponent'>
          <div>Enter your login credentials even if you havent created an account before.</div>
          <label htmlFor='username'>Username:</label>
          <input type='type' id='username' name='username' className='cgsText' />
          <br />
          <label htmlFor='username'>Password:</label>
          <input type='password' id='password' name='password' className='cgsText' />
          <br />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
