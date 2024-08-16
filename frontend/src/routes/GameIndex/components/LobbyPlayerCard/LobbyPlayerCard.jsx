import './LobbyPlayerCard.scss'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

/* const player = {
    name: String,
    id: Number,
    imgSrc: String,
} */

export default function LobbyPlayerCard( {children} ) {
  return (
    <div className="player-lobby__player-card">
    {children}
  </div>
  )
}
