import React from 'react'
import { Link } from 'react-router-dom';

//MUI
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';

//Components
import LobbyPlayerCard from './components/LobbyPlayerCard/LobbyPlayerCard'
import PlayerLobbyLayout from './components/PlayerLobbyLayout/PlayerLobbyLayout'
import MainMenuChat from './components/MainMenuChat/MainMenuChat.jsx'
import FriendsList from './components/FriendsList/FriendsList.jsx'
import LobbyCard from './components/LobbyCard/LobbyCard'

//scss
import './GameIndex.scss'

//placeholder
const placeholderProfileLink = 'profile/1'
const placeholderGameRoomLink = '/gameroom/1'
/* 
Схема свойств игрока в лобби (в центре)
const playerInLobby = { 
    name: String,
    id: Number,
    imgSrc: String,
} */

/* Схема свойств лобби в списке лобби (центр)
const lobbyCenter = {
    type: String,
    mods: array<Sting>,
    player: array<LobbyPlayerCard>
} */

export default function GameIndex() {
    return (
        <>
            <div className="wrapper">
                <section className='main-left'>
                    <div className="main-left__profile-snippet">
                        <div className="profile-snippet__top">

                        </div>
                        <div className="profile-snippet__stats">

                        </div>
                    </div>
                    <FriendsList>

                    </FriendsList>
                </section>
                <section className='main-middle'>
                    <div className="main-middle-top">
                        {/* Заглушка лобби */}
                        <PlayerLobbyLayout>
                            <LobbyPlayerCard>
                                <AddIcon />
                                Пригласить
                            </LobbyPlayerCard>
                            <LobbyPlayerCard>
                                <AddIcon />
                                Пригласить
                            </LobbyPlayerCard>
                            <LobbyPlayerCard>
                                <PersonIcon />
                                <Link to={placeholderProfileLink}>
                                    PersonName
                                </Link>
                            </LobbyPlayerCard>
                            <LobbyPlayerCard>
                                <AddIcon />
                                Пригласить
                            </LobbyPlayerCard>
                            <LobbyPlayerCard>
                                <AddIcon />
                                Пригласить
                            </LobbyPlayerCard>
                        </PlayerLobbyLayout>

                        <Button variant="contained" className='main-middle-top__start-btn' size='medium'>
                            <Link to={placeholderGameRoomLink}>
                                <AddIcon />
                                Создать игру
                                {/*  <PlayArrowRoundedIconn />
                            Играть */}
                            </Link>
                        </Button>

                        <div className="main-middle-top_lobby-list">
                            <LobbyCard>
                                <div className="lobby-top">
                                    <div className="lobby-top__type">
                                        <StarBorderIcon />
                                        GameType
                                    </div>
                                    <div className="lobby-top__mods">
                                        <div className="mods__card">
                                            <StarRateIcon />
                                            GameModd
                                        </div>
                                        <div className="mods__card">
                                            <StarRateIcon />
                                            GameModd
                                        </div>
                                        <div className="mods__card">
                                            <StarRateIcon />
                                            GameModd
                                        </div>
                                    </div>
                                </div>
                                <PlayerLobbyLayout>
                                    <LobbyPlayerCard>
                                        <AddIcon />
                                    </LobbyPlayerCard>
                                    <LobbyPlayerCard>
                                        <AddIcon />
                                    </LobbyPlayerCard>
                                    <LobbyPlayerCard>
                                        <PersonIcon />
                                        PersonName
                                    </LobbyPlayerCard>
                                    <LobbyPlayerCard>
                                        <AddIcon />
                                    </LobbyPlayerCard>
                                    <LobbyPlayerCard>
                                        <AddIcon />
                                    </LobbyPlayerCard>
                                </PlayerLobbyLayout>
                            </LobbyCard>
                        </div>

                    </div>

                    <div className="main-middle-bottom">
                        {/* Заглушка чата */}
                        <MainMenuChat />
                    </div>
                </section>
                <section className='main-right'></section>
            </div>
        </>
    )
}
