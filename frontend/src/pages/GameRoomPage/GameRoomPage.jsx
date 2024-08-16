import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function GameRoomPage() {
    const { gameId } = useParams()
    return (
        <div>
            <h1>
                Добро пожаловать в комнату номер <span> {gameId}</span>
            </h1>
            <Link to='/game'>
                Выйти
            </Link>
            <p>GameRoomPage</p>
        </div>
    )
}
