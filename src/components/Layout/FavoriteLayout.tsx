import React from 'react'
import { CardFavorite } from '../Cards/CardF'
import { Book } from '../../types/interfaces'
import { PropsBooksArray } from '../../types/type'

export function FavoriteLayout({ data }: PropsBooksArray) {
  function renderCards() {
    return data.map((books: Book) => (
      <CardFavorite key={books.isbn13} data={books} />
    ))
  }
  return (
    <div className="d-flex flex-column">
      {renderCards()}
    </div>
  )
}
