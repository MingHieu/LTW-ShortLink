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

const router = createBrowserRouter([
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
    path: '/users',
    element: <Users />
  },
  {
    path: '/payment',
    element: <Payment />
  },
  {
    path: '/',
    element: <Home />
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
