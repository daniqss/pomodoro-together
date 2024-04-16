import { useState } from 'react'
import io from 'socket.io-client'
import { usePartyCode } from './hooks/usePartyCode'
import './App.css'

const WS_URL = 'http://localhost:3000'
const socket = io('/')

const App = () => {
  const { partyCode, getPartyCode } = usePartyCode(socket)

  const handleCreateButton = () => {
    getPartyCode()
  }

  return (
    <>
      <nav className="navbar">
        <h1>Pomodoro</h1>
        <h1>🍅</h1>
      </nav>
      <main>
        <section className="party-management-container">
          <button className="create-button" onClick={handleCreateButton}>
            create
          </button>
          {/* <p>Copy this code and share it with your friends</p>
          <section>
            <p className="copy-text">{partyCode}</p>
            <button className="copy-button">Copy</button>
          </section> */}
          <button className="refresh-button">Refresh</button>
        </section>
        <section className="timer-container">
          <h1 className="timer">25:00</h1>
          <button className="start-button">Start</button>
          <button className="stop-button">Stop</button>
        </section>
      </main>
    </>
  )
}

export default App
