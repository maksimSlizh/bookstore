import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { fetchBooks } from '../../redux/booksSearchSlice'
import { MainLayout } from '../Layout/MainLayout'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { RootState } from '../../types/interfaces'

export function ResultSearch() {
  const { data, total } = useSelector((state: RootState) => state.booksSearch)
const dispatch = useDispatch<ThunkDispatch<RootState, string | number, AnyAction>>()
  const { query = '' } = useParams()
  const navigate = useNavigate()
  const [page, setPage] = useState(Number('1'))

  useEffect(() => {
    dispatch(fetchBooks({ query, page }))
  }, [dispatch, query, page, total])

  function handlePrevPage() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1)
      navigate(`/search/${query}/${page - 1}`)
    }
  }

  function handleNextPage() {
    if (page < Math.ceil(total! / 10)) {
      setPage((prevPage) => prevPage + 1)
      navigate(`/search/${query}/${page + 1}`)
    }
  }

  function buildPaginationScheme(total: number | undefined) {
    const pagesCounter = Math.ceil(total! / 10)
    const prevPageNumber = page - 1
    const nextPageNumber = page + 1
    const scheme = [1, prevPageNumber, page, nextPageNumber, pagesCounter]
    const filteredScheme = scheme.filter((item) => item > 0 && item <= pagesCounter)
    const set = new Set(filteredScheme)
    const result = Array.from(set)
    if (result[1] - result[0] > 1) result.splice(1, 1, '...')
    if (result[result.length - 1] - result[result.length - 2] > 1) result.splice(result.length - 1, 0, '...')

    return result
  }

  function renderPagination() {
    const pages = buildPaginationScheme(total)
    return pages.map((pageNum) => (
      <li
        key={Math.random()}
        className={`page-item ${pageNum === page ? 'active' : ''}`}
      >
        <NavLink
          className="page-link"
          onClick={() => setPage(pageNum)}
          to={`/search/${query}/${pageNum}`}
        >
          {pageNum}
        </NavLink>
      </li>
    ));
  }

  return (
    <>
      <h1 className="title">'{query}' Search results</h1>
      <MainLayout data={data} />
      <ul className="pagination d-flex gap-2 mt-3 justify-content-between">
        <li className={`page-item ${page === 1 ? 'disabled' : 'active'}`}>
          <a className="page-link" onClick={handlePrevPage}>
            <BsArrowLeft /> Prev
          </a>
        </li>
        <ul className="pagination d-flex gap-2">
          {renderPagination()}
        </ul>
        <li className={`page-item ${page === Math.ceil(total! / 10) ? 'disabled' : 'active'}`}>
          <a className="page-link" onClick={handleNextPage}>
            Next <BsArrowRight />
          </a>
        </li>
      </ul>
    </>
  )
}
