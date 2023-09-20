import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from '../components/Layout/index'
import { Main } from '../pages/Main'
import { ResultSearch } from '../pages/ResultSearch'
import { BookPage } from '../pages/BookPage'
import { Cart } from '../pages/Cart'
import { Favorite } from '../pages/Favorite'
import { Auth } from '../pages/Auth'
import { Account } from '../components/Auth/Account'
import { SignIn } from '../components/Auth/SignIn'
import { SignUp } from '../components/Auth/SignUp'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/search/:query/:page',
        element: <ResultSearch />
      },
      {
        path: '/book/:isbn13',
        element: <BookPage />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/favorite',
        element: <Favorite />
      },
      {
        path: '/auth',
        element: <Auth />,
        children: [
          {
            path: '/auth/account',
            element: <Account />
          },
          {
            path: '/auth/signin',
            element: <SignIn />
          },
          {
            path: '/auth/signup',
            element: <SignUp />
          },
          {
            path: '/auth',
            element: <Navigate to="/auth/signin" />
          }
        ]
      }
    ]
  }
])
