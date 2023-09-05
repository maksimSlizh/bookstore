import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/index'
import { Main } from '../components/pages/Main'
import { ResultSearch } from '../components/pages/ResultSearch'
import { BookPage } from '../components/pages/BookPage'
import { Cart } from '../components/pages/Cart'
import { Favorite } from '../components/pages/Favorite'
import { Auth } from '../components/pages/Auth'
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
        element: <Auth />,
        children: [
          {
            path: '/account',
            element: <Account />
          },
          {
            path: '/signin',
            element: <SignIn />
          },
          {
            path: '/signup',
            element: <SignUp />
          }
        ]
      }
    ]
  }
])
