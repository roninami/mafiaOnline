import { React } from 'react'
import './GamePage.scss'
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/imgs/svg/logo.svg'

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function () {
    const navigate = useNavigate()

    function handleForward() {
        navigate(1)
    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <>
            <header className='header'>
                <nav className='header-nav'>
                    <div className="header-nav__arrows">
                        <button type='button' onClick={handleBack}>
                            <ArrowBackIosNewOutlinedIcon />
                        </button>
                        <button type='button' onClick={handleForward}>
                            <ArrowForwardIosOutlinedIcon />
                        </button>
                    </div>
                    <NavLink to="/game" className={({ isActive, isPending }) =>
                        isPending ? "nav-logo pending" : isActive ? "nav-logo active" : "nav-logo"
                    }>
                        <img src={logo} alt="MonoPoly" />
                    </NavLink>

                    <ul className='header-nav-ul'>

                        <li>
                            <NavLink to="/game/inv" className={({ isActive, isPending }) =>
                                isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                            }>
                                Инвентарь
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/game/store" className={({ isActive, isPending }) =>
                                isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                            }>
                                Маркет
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/game/top" className={({ isActive, isPending }) =>
                                isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link"
                            }>
                                Top100
                            </NavLink>
                        </li>

                    </ul>
                </nav>
                <div className="header-currency">
                    <div className="header-currency__item">1488.22 <span className='header-currency__type'>р</span> </div>
                    <div className="header-currency__item">123 <span className='header-currency__type'>W</span> </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}
