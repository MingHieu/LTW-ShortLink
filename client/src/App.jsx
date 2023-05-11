import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/login'
import DashBoard from './pages/dashboard'
import Deposit from './pages/deposit'
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
import ShortLink from './pages/shortLink'
import Affiliate from './pages/affiliate'
import RequestDetail from './pages/requestDetail'

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
    element: <Affiliate />
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
    path: '/payment/detail/',
    element: <RequestDetail />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/s/:code',
    element: <ShortLink />
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
