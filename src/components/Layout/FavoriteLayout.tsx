import { CardFavorite } from '../Cards/CardF'

export function FavoriteLayout({ data }) {
  function renderCards() {
    return data.map((books: Books) => (
      <CardFavorite key={books.isbn13} data={books} />
    ))
  }
  return (
    <div className="d-flex flex-column">
      {renderCards()}
    </div>
  )
}
