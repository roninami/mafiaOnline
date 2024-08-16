import React from 'react'
import { useParams } from 'react-router-dom'

export default function GamePlayerProfile() {
    const { playerId } = useParams()
  return (
    <div>GamePlayerProfile {playerId}</div>
  )
}
