import React, { useEffect } from 'react'
import useAppData from '../../Hooks/AppDataHook/useAppData'
import useUserInfo from '../../Hooks/UserInfoHook/useUserInfo'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import URL from '../../common/helperFunctions/URL/URL'
import './styles.css'

const LoginPage = () => {
  const [{ isDataBaseLive }, { checkDataBaseServiceIsLive }] = useAppData()
  const [{ userName }] = useUserInfo()

  useEffect(() => {
    checkDataBaseServiceIsLive()
  })

  return (
    <div className='login'>
      <MainPageBackground />
      <div>
        <div className='loginComponent'>
          <div>Enter your login credentials even if you havent created an account before.</div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
