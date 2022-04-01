import React from 'react'
import ReactDOM from 'react-dom'
import AppDataContextProvider from './Hooks/AppDataHook/AppDataContext'
import UserInfoContextProvider from './Hooks/UserInfoHook/UserInfoContext'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <AppDataContextProvider>
      <UserInfoContextProvider>
        <App />
      </UserInfoContextProvider>
    </AppDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
