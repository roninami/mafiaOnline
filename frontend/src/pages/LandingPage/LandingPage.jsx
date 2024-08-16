import './LandingPage.scss';
import { Outlet } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <header className='landingHeader'>
                landing page header
            </header>
            <main>
            <Outlet />
            </main>
            <footer className='landingFooter'>
                landing page footer
            </footer>
        </>
    )
}