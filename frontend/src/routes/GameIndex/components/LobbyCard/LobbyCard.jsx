import './LobbyCard.scss'
import React from 'react'

/* const lobby = {
    type: String,
    mods: array<Sting>,
    player: array<LobbyPlayerCard>
} */

export default function LobbyCard( {children}) {
  return (
    <div className='lobby-list__lobby'>{children}</div>
  )
}
