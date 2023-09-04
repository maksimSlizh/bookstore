import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBooks } from '../../redux/booksSearchSlice'
import { MainLayout } from '../Layout/MainLayout'
import { Pagination } from '../Pagination'

export function ResultSearch() {
  const { data } = useSelector((state) => state.booksSearch)
  const [currentPage, setCurrentPage]: [number, Function] = useState(1)
  const dispatch = useDispatch()
  const { query } = useParams()
  useEffect(() => {
    dispatch(fetchBooks({ query }))
  }, [dispatch, query])
  const { paginatedData, renderPagination } = Pagination(data, currentPage, setCurrentPage)
  return (
    <>
      <h1>Result {query}</h1>
      <MainLayout data={paginatedData} />
      <ul className="pagination d-flex gap-2">
        {renderPagination()}
      </ul>
    </>
  )
}
