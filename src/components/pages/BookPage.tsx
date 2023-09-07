import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { Card } from '../Cards/Card/index'
import { useParams } from 'react-router-dom'
import { fetchBook } from '../../redux/bookSlice'
import { RootState } from '../../types/interfaces'
import { Book } from '../../types/interfaces'

export function BookPage() {
  const { data } = useSelector((state: RootState) => state.book)
  const dispatch = useDispatch<ThunkDispatch<Book, string, AnyAction>>()
  const { isbn13 } = useParams()
  useEffect(() => {
    if (isbn13) {
      dispatch(fetchBook(isbn13))
    }
  }, [dispatch, isbn13])

  return (
    <>
      <Card data={data} />
    </>
  )
}
