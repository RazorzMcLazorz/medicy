import React, { useEffect } from 'react'
import useAppData from '../../Hooks/AppDataHook/useAppData'
import useUserInfo from '../../Hooks/UserInfoHook/useUserInfo'
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
                <button className='button'>New</button>
                <button className='button'>Load</button>
              </div>
            ) : (
              <button onClick={URL.login} className='button'>
                Login
              </button>
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
