import { useState, useEffect } from 'react'

export const usePartyCode = (socket) => {
  const [partyCode, setPartyCode] = useState('')

  const getPartyCode = () => {
    socket.emit('create-party')
    socket.on('party-code', (code) => {
      console.log(`Party code: ${code}`)
      setPartyCode(code)
    })
  }

  return { partyCode, getPartyCode }
}
