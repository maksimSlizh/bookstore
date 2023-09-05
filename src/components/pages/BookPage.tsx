import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../Cards/Card/index'
import { useParams } from 'react-router-dom'
import { fetchBook } from '../../redux/bookSlice'

export function BookPage() {
  const { data } = useSelector((state) => state.book)
  const dispatch = useDispatch()
  const { isbn13 } = useParams()
  useEffect(() => {
    dispatch(fetchBook(isbn13))
  }, [dispatch, isbn13])

  return (
    <>
      <Card data={data} />
    </>
  )
}
