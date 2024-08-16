import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import reportWebVitals from './reportWebVitals';

import LandingPage from './pages/LandingPage/LandingPage.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import LandingIndex from './routes/LandingIndex/LandingIndex'
import AuthPage from './pages/AuthPage/AuthPage.jsx'
import GamePage from './pages/GamePage/GamePage.jsx'
import GameIndex from './routes/GameIndex/GameIndex.jsx'
import GameInventory from './routes/GameInventory/GameInventory.jsx'
import GameStore from './routes/GameStore/GameStore.jsx'
import GameTop from './routes/GameTop/GameTop.jsx'
import GamePlayerProfile from './routes/GamePlayerProfile/GamePlayerProfile.jsx'
import GameRoomPage from './pages/GameRoomPage/GameRoomPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingIndex />,
      },
      {
        path: "auth",
        element: <AuthPage />,
      }

    ],
  },
  {
    path: "/game",
    element: <GamePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GameIndex />,
      },
      {
        path: "inv",
        element: <GameInventory />,
      }, {
        path: "store",
        element: <GameStore />,
      }, {
        path: "top",
        element: <GameTop />,
      }, {
        path: "profile/:playerId",
        element: <GamePlayerProfile />,
      },

    ],
  }, {
    path: "/gameroom/:gameId",
    element: <GameRoomPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
