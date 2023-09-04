import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/index'
import { Main } from '../components/pages/Main'
import { ResultSearch } from '../components/pages/ResultSearch'
import { BookPage } from '../components/pages/BookPage'
import { Basket } from '../components/pages/Basket'
import { Favorite } from '../components/pages/Favorite'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/search/:query',
        element: <ResultSearch />
      },
      {
        path: '/book/:isbn13',
        element: <BookPage />
      },
      {
        path: '/basket',
        element: <Basket />
      },
      {
        path: '/favorite',
        element: <Favorite />
      }
    ]
  }
])
