import React from 'react'
import './ErrorPage.scss'
import { useRouteError } from "react-router-dom";
import { useNavigate, } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    console.error(error);

    return (
        <>
            <header className='landingHeader'>
                landing page header
            </header>
            <main>
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.status + '  '}{error.statusText || error.message}</i>
                        <button
                            type="button"
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            Go back

                        </button>

                    </p>
                </div>
            </main>
            <footer className='landingFooter'>
                landing page footer
            </footer>
        </>

    );
}
