import React, { useEffect } from 'react'
import useAppData from '../../hooks/AppDataHook/useAppData'
import useUserInfo from '../../hooks/UserInfoHook/useUserInfo'
import Button from '../../components/button/Button'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import URL from '../../common/helperFunctions/URL/URL'
import './styles.css'

const MainPage = () => {
  const [{ isDataBaseLive }, { checkDataBaseServiceIsLive }] = useAppData()
  const [{ userName }] = useUserInfo()

  useEffect(() => {
    checkDataBaseServiceIsLive()
  })

  return (
    <div>
      <MainPageBackground />
      <div className='mainMenuBody'>
        <h1>Medicy</h1>
        {isDataBaseLive ? (
          <div className='buttonRow'>
            {userName ? (
              <div>
                <Button>New</Button>
                <Button>Load</Button>
              </div>
            ) : (
              <Button onClick={URL.login}>Login</Button>
            )}
          </div>
        ) : (
          <div className='buttonRow'>Loading for Database to boot up please wait a minute! =)</div>
        )}
      </div>
    </div>
  )
}

export default MainPage
