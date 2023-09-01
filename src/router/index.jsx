import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/index'
import { Main } from '../components/pages/Main'
import { ResultSearch } from '../components/pages/ResultSearch'
import { BookPage } from '../components/pages/BookPage'

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
      }
    ]
  }
])
