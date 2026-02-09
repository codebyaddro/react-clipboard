import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../MainLayout/MainLayout.jsx'
import Home from '../pages/Home.jsx'
import Paste from '../pages/Paste.jsx'
import ViewPaste from '../pages/ViewPaste.jsx'

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/pastes',
                element: <Paste/>
            },
            {
                path: '/pastes/:id',
                element: <ViewPaste/>
            },
        ]
    }
])