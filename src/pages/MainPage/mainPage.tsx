import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Account } from 'appwrite'
import ButtonMUI from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import useAppData from 'hooks/AppDataHook/useAppData'
import useUserInfo from 'hooks/UserInfoHook/useUserInfo'
import Button from 'globals/components/button/Button'
import MainPageBackground from 'globals/mainPageBackground/mainPageBackground'
import URL from 'globals/helperFunctions/URL/URL'
import Drawer from 'globals/components/drawer/Drawer'
import './styles.css'

const MainPage = ({ client }: { client: any }) => {
  const [{ isDataBaseLive, onlineStatus }, { checkDataBaseServiceIsLive, checkOnlineStatus }] =
    useAppData()
  const [{ userName }, { setUserName }] = useUserInfo()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const account = new Account(client)

  useEffect(() => {
    checkOnlineStatus()
    checkDataBaseServiceIsLive()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('onlineStatus', onlineStatus)

  const DrawerButtons = [
    {
      text: 'Sign Out',
      onClick: () => {
        account.deleteSession('current').then(
          function (response) {
            console.log(response) // Success
            setUserName('')
          },
          function (error) {
            console.log(error) // Failure
          }
        )
      },
    },
  ]

  return (
    <>
      <Drawer onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Box sx={{ width: 250 }}>
          <List>
            {DrawerButtons.map((button) => (
              <ListItem key={button.text} disablePadding>
                <ListItemButton onClick={button.onClick}>
                  <ListItemText primary={button.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <div>
        <MainPageBackground />
        <div className='accountButton'>
          <ButtonMUI variant='text' sx={{ color: '#000000' }} onClick={() => setIsOpen(true)}>
            {userName}
          </ButtonMUI>
        </div>
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
                  <Button onClick={() => navigate(URL.login, { replace: true })}>Login</Button>
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
    </>
  )
}

export default MainPage
