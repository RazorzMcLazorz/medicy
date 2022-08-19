import React from 'react'
import ReactDOM from 'react-dom'
import { Client } from 'appwrite'
import AppDataContextProvider from './hooks/AppDataHook/AppDataContext'
import UserInfoContextProvider from './hooks/UserInfoHook/UserInfoContext'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const client = new Client()

// Init your Web SDK
client
  .setEndpoint('http://localhost/v1') // Your API Endpoint
  .setProject('62ff1eb4d780e717924d') // Your project ID

ReactDOM.render(
  <React.StrictMode>
    <AppDataContextProvider>
      <UserInfoContextProvider>
        <App client={client} />
      </UserInfoContextProvider>
    </AppDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
