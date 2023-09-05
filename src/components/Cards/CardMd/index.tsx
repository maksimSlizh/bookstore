import { NavLink } from 'react-router-dom'
import { Book } from '../../../types/interfaces'
import style from './card.module.css'

export function CardMd({ book }: { book: Book }) {
  const color = book.isbn13.slice(-6)
  return (
    <div className={style.card} >
      <NavLink to={`/book/${book.isbn13}`} className={style.card__link}>
      <div className="" style={{ background: `#${color}` }}>
        <img className={style.card__img} src={book.image} alt={book.title} />
      </div>
      <div className={style.card__body}>
        <h5 className={style.card__title}>{book.title}</h5>
        <p className={style.card__text}>Author</p>
      </div>
      </NavLink>
      <div className={style.card__footer}>
          <div className={style.card__footer_item}>{book.price}</div>
          <div className={style.card__footer_item}>Quantity</div>
        </div>
    </div>
  )
}
