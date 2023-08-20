import { Provider } from 'react-redux'
import { store } from './redux/store'
import { MainLayout } from './components/Cards/MainLayout'
export function App() {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>

  )
}


