import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/login'
import DashBoard from './pages/dashboard'
import Deposit from './pages/deposit'
import LinkAffiliate from './pages/LinkAffiliate'
import Amount from './pages/amount'
import Statistics from './pages/statistic'
import AdminUrls from './pages/adminUrls'
import Users from './pages/users'
import Payment from './pages/payment'
import Home from './pages/home'
import Register from './pages/register'
import MyUrls from './pages/myUrls'
import UrlDetail from './pages/urlDetail/UrlDetail'
import UserDetail from './pages/userDetail/UserDetail'
import Profile from './pages/profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/dashboard',
    element: <DashBoard />
  },
  {
    path: '/my-urls',
    element: <MyUrls />
  },
  {
    path: '/deposit',
    element: <Deposit />
  },
  {
    path: '/link-affiliate',
    element: <LinkAffiliate />
  },
  {
    path: '/amount',
    element: <Amount />
  },
  {
    path: '/statistics',
    element: <Statistics />
  },
  {
    path: '/urls',
    element: <AdminUrls />
  },
  {
    path: '/urls/detail/:id',
    element: <UrlDetail />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/users/detail/:username',
    element: <UserDetail />
  },
  {
    path: '/payment',
    element: <Payment />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
