import React from 'react'
import MainPageBackground from '../../common/mainPageBackground/mainPageBackground'
import './styles.css'

const MainPage = () => {
  return (
    <div>
      <MainPageBackground />
      <div className='mainMenuBody'>
        <h1>Medicy</h1>
        {/* {this.props.db ? (
          <div className='buttonRow'>
            {this.props.user ? (
              <div>
                <a className='button' href='/create'>
                  New
                </a>
                <a className='button'>Load</a>
              </div>
            ) : (
              <a className='button' href='/login'>
                Login
              </a>
            )}
          </div>
        ) : (
          <div className='buttonRow'>Loading for Database to boot up please wait a minute! =)</div>
        )} */}
      </div>
    </div>
  )
}

export default MainPage
