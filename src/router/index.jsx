import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/Layout/index'
import { Main } from '../components/pages/Main'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      }
    ]
  }
])
