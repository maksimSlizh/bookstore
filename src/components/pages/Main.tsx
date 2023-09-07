import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { getBooks } from '../../redux/booksSlice'
import { MainLayout } from '../Layout/MainLayout'
import { RootState, Book } from '../../types/interfaces'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

export function Main() {
  const { data } = useSelector((state: RootState) => state.books)
  const dispatch = useDispatch<ThunkDispatch<Book, number, any>>()
  const [currentPage, setCurrentPage]: [number, Function] = useState(1)
  const totalPages = Math.ceil(data.length / 6)
  const paginatedData = data.slice((currentPage - 1) * 6, currentPage * 6)

  useEffect(() => {
    dispatch(getBooks(currentPage))
  }, [dispatch, currentPage])



  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  function renderPagination() {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
    return pageNumbers.map((number) => {
      return (
        <li
          key={number}
          className={`page-item ${number === currentPage ? 'active' : ''}`}
          style={{ cursor: 'pointer' }}
          onClick={() => handlePage(number)}
        >
          <a className="page-link">{number}</a>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className="title">New release books</h1>
      <MainLayout data={paginatedData} />
      <ul className="pagination d-flex gap-2 mt-4 justify-content-between">
        <li onClick={handlePrevPage} className={`page-item ${currentPage === 1 ? 'disabled' : 'active'}`}><a className="page-link" style={{ cursor: 'pointer' }}><BsArrowLeft /> Prev</a></li>
        <ul className="pagination d-flex gap-2">
          {renderPagination()}
        </ul>
        <li onClick={handleNextPage} className={`page-item ${currentPage === totalPages ? 'disabled' : 'active'}`}><a className="page-link" style={{ cursor: 'pointer' }}>Next <BsArrowRight /></a></li>
      </ul>
    </>
  )
}
