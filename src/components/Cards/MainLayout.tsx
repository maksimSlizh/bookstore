import { useSelector, useDispatch } from 'react-redux'
import { useEffect} from 'react'
import { getBooks } from '../../redux/booksSlice'
import { CardMd } from '../Cards/CardMd'

export function MainLayout() {
  const { data} = useSelector((state) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooks())
    console.log(data)
  }, [dispatch])

  return (
    <div className="container">
      <div className="d-flex flex-column">
        {data.map((book) => (
          <CardMd key={book.id} books={book} />
        ))}
      </div>
    </div>
  )
}
