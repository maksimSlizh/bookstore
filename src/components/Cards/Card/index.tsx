import React, { useState } from "react"
import { Book } from "../../types/interfaces"
import style from "./card.module.css"
import { MdFavoriteBorder } from 'react-icons/md'
import { HiArrowLongLeft } from 'react-icons/hi2'

export function Card({ data }: Book) {
  const [isFavorite, setIsFavorite] = useState(false)

  const color = data.isbn13 ? data.isbn13.slice(-6) : '000'
  const colorIcon = !isFavorite ? 'text-light' : ''

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={style.card}>
      <HiArrowLongLeft size={30} style={{ transform: "scale(1.5)", marginLeft: "5px" }} />
      <h1 className={style.card__title}>{data.title}</h1>
      <div className={style.card__wrapper}>
        <div className="col-6 position-relative" style={{ background: `#${color}` }} >
          <div className={style["icon-wrapper"]}>
            <input className={style["icon-like"]} type="checkbox" checked={isFavorite} onChange={handleFavoriteToggle} id={`favorite-${data.id}`} />
            <label className={style["custom-icon"]} htmlFor={`favorite-${data.id}`}>
              <MdFavoriteBorder size={20} className={colorIcon} />
            </label>
          </div>

          <img className={style.card__img} src={data.image} alt={data.title} />
        </div>
        <div className="col-5 d-flex flex-column justify-content-between">
          <div className={style.card__info}>
            <br />
            <div className={style.card__value}>
              <div className="card__price">{data.price}</div>
              <input type="radio" />
            </div>
            <div className={style.card__feature}>
              <div className={style.card__feature_item}>
                <span className={style.card__feature_name}>Author</span>
                <span className="card__feature_value">{data.authors}</span>
              </div>
              <div className={style.card__feature_item}>
                <span className={style.card__feature_name}>Publisher</span>
                <span>{data.publisher}</span>
              </div>
              <div className={style.card__feature_item}>
                <span className={style.card__feature_name}>Language</span>
                <span>{data.language}</span>
              </div>
              <div className={style.card__feature_item}>
                <span className={style.card__feature_name}>Format</span>
                <span>PDF</span>
              </div>
              <div className="card__dropdown">More</div>
            </div>
          </div>
          <div className="d-flex flex-column start-0">
            <button className={style.card__button}>Add to cart</button>
            <a href="#" className={style.card__link}>Preview book</a>
          </div>
        </div>
      </div>
      <div className="card__toggle">
        <input type="radio" />
      </div>
      <p className="card__text">{data.desc}</p>
      <div className="card__social">
        <a href="#" className="card__link">Facebook</a>
        <a href="#" className="card__link">Twitter</a>
        <a href="#" className="card__link">Instagram</a>
      </div>
    </div>
  )
}
