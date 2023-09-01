import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams} from 'react-router-dom'
import { fetchBooks } from '../../redux/booksSearchSlice'
import { MainLayout } from '../Layout/MainLayout'


export function ResultSearch() {
  const { data } = useSelector((state) => state.booksSearch)
  const dispatch = useDispatch()
  const { query } = useParams()
  useEffect(() => {
    dispatch(fetchBooks({query}))
  }, [dispatch, query])
  return (
    <>
    <h1>Result {query}</h1>
    <MainLayout data={data} />
    </>
  )
}
