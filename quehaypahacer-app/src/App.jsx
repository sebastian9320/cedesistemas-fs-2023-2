import { GlobalStyles } from "./globalStyles"

/* PAGES */
import { EventDetail } from "./pages/EventDetail"
import { Home } from "./pages/Home"
import { Profile } from './pages/Profile'
import { Confirmation } from './pages/Confirmation'
import { Login } from './pages/Login'
import { SignUp } from "./pages/SignUp"

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { UserContextStore } from "./context/UserContext"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/detail/:id',
    element: <EventDetail/>
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/confirmation',
    element: <Confirmation />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }

])

export const App = () => {

  const appName = `Que hay pa' hacer`

  return (
    <>
      <GlobalStyles />
      <UserContextStore>
        <RouterProvider router={router} />
      </UserContextStore>
    </>

  )
}
