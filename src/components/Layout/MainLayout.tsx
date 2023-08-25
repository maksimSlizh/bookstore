import { CardMd } from '../Cards/CardMd'
import { Book, BooksState } from '../../types/interfaces'

export function MainLayout ({data}: BooksState) {
  function renderCards () {
    return data.map((books: Book, index: number) => (
      <CardMd key={index} book={books} />
    ))
  }
  return (
    <div className="container">
      <div className="d-flex flex-column">
        {renderCards()}
      </div>
    </div>
  )
}
