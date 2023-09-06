import React from 'react'
import { NavLink } from 'react-router-dom'
import { Book } from '../../../types/interfaces'
import style from './card.module.css'
import { Rating } from '../../Rating'

export function CardMd({ book }: { book: Book }) {
  const color = book.isbn13.slice(-6)
  const author = book.authors || 'by Lentin Joseph,  Apress 2018'
  return (
    <div className={style.card} >
      <NavLink to={`/book/${book.isbn13}`} className={style.card__link}>
      <div className="" style={{ background: `#${color}` }}>
        <img className={style.card__img} src={book.image} alt={book.title} />
      </div>
      <div className={style.card__body}>
        <h5 className={style.card__title}>{book.title}</h5>
        <p className={style.card__text}>{author}</p>
      </div>
      </NavLink>
      <div className={style.card__footer}>
          <div className={style.card__footer_item}>{book.price}</div>
          <Rating rating={book.rating || '2'} isbn13={book.isbn13} />
        </div>
    </div>
  )
}
