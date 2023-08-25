import { useSelector, useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { getBooks } from '../../redux/booksSlice'
import { MainLayout } from '../Layout/MainLayout'
import { RootState } from '../../types/interfaces'

export function Main() {
  const { data } = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <MainLayout data={data}/>
  )
}
