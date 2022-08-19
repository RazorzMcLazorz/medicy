import React, { useEffect } from 'react'
import useAppData from '../../hooks/AppDataHook/useAppData'
import useUserInfo from '../../hooks/UserInfoHook/useUserInfo'
import Button from '../../globals/components/button/Button'
import MainPageBackground from '../../globals/mainPageBackground/mainPageBackground'
import URL from '../../globals/helperFunctions/URL/URL'
import './styles.css'

const MainPage = () => {
  const [{ isDataBaseLive, onlineStatus }, { checkDataBaseServiceIsLive, checkOnlineStatus }] =
    useAppData()
  const [{ userName }] = useUserInfo()

  useEffect(() => {
    checkOnlineStatus()
    checkDataBaseServiceIsLive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                {onlineStatus ? null : (
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
        ) : (
          <div className='buttonRow'>
            <div>Loading for Database to boot up please wait a minute! =)</div>
            {onlineStatus ? null : (
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
