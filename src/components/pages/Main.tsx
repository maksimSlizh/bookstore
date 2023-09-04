import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getBooks } from '../../redux/booksSlice'
import { MainLayout } from '../Layout/MainLayout'
import { RootState } from '../../types/interfaces'
import { Pagination } from '../Pagination/index'

export function Main() {
  const { data } = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage]: [number, Function] = useState(1)

  useEffect(() => {
    dispatch(getBooks(currentPage))
  }, [dispatch, currentPage])

  const { paginatedData, renderPagination } = Pagination(data, currentPage, setCurrentPage)

  return (
    <>
      <h1 className="title">New release books</h1>
      <MainLayout data={paginatedData} />
      <ul className="pagination d-flex gap-2">
        {renderPagination()}
      </ul>
    </>
  )
}
