import React, { useEffect } from 'react'
import useAppData from '../../hooks/AppDataHook/useAppData'
import useUserInfo from '../../hooks/UserInfoHook/useUserInfo'
import Button from '../../components/button/Button'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import URL from '../../common/helperFunctions/URL/URL'
import './styles.css'

const MainPage = () => {
  const [{ isDataBaseLive, onlineStatus }, { checkDataBaseServiceIsLive, checkOnlineStatus }] =
    useAppData()
  const [{ userName }] = useUserInfo()

  useEffect(() => {
    checkOnlineStatus()
    checkDataBaseServiceIsLive()
  }, [])

  console.log(onlineStatus)

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
              <div>
                <Button onClick={URL.login}>Login</Button>
                {onlineStatus ?? (
                  <Button
                    onClick={() => {
                      console.log('offline')
                    }}>
                    Play Offline Guest
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className='buttonRow'>
            <div>Loading for Database to boot up please wait a minute! =)</div>
            {onlineStatus ?? (
              <Button
                onClick={() => {
                  console.log('offline')
                }}>
                Play Offline
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MainPage
