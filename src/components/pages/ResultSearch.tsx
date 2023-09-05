import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { fetchBooks } from '../../redux/booksSearchSlice'
import { MainLayout } from '../Layout/MainLayout'

export function ResultSearch() {
  const { data, total } = useSelector((state) => state.booksSearch)
  const dispatch = useDispatch()
  const { query } = useParams()
  const [page, setPage] = useState(1)
  useEffect(() => {
    dispatch(fetchBooks({ query, page }))
  }, [dispatch, query, page])

  function renderPagination() {
    const pages = []
    for (let i = 1; i <= Math.ceil(total / 10); i++) {
      pages.push(i)
    }
    return pages.map(page => {
      return <li key={Math.random()} className={`page-item ${page === page ? 'active' : ''}`}><NavLink className="page-link" onClick={() => setPage(page)} to={`/search/${query}/${page}`}>{page}</NavLink></li>
    })
  }
  return (
    <>
      <h1>Result {query}</h1>
      <MainLayout data={data} />
      <ul className="pagination d-flex gap-2">
        {renderPagination()}
      </ul>
    </>
  )
}
