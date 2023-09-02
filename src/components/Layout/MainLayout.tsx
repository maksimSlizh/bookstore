import { CardMd } from '../Cards/CardMd'
import { Books, BooksState } from '../../types/interfaces'

export function MainLayout({ data }: BooksState) {
  function renderCards() {
    return data.map((books: Books) => (
        <CardMd key={books.isbn13} book={books} />
    ))
  }
  return (
    <div className="main">
      {renderCards()}
    </div>
  )
}
