import React from 'react'
import { CardMd } from '../Cards/CardMd'
import { Book} from '../../types/interfaces'
import { PropsBooksArray } from '../../types/type'

export function MainLayout({ data }: PropsBooksArray) {
  function renderCards() {
    return data.map((books: Book) => (
        <CardMd key={books.isbn13} book={books} />
    ))
  }
  return (
    <div className="main">
      {renderCards()}
    </div>
  )
}
