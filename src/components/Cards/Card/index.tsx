import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Book } from '../../types/interfaces'
import style from './card.module.css'
import { MdFavoriteBorder } from 'react-icons/md'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { FiFacebook, FiTwitter, FiMoreHorizontal } from 'react-icons/fi'
import { addToCart } from '../../../redux/cartSlice'
import { addToFavorite, removeFromFavorite } from '../../../redux/favoriteSlice'
import { Rating } from '../../Rating'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

export function Card({ data }: Book) {
  const favoriteData = useSelector((state) => state.favorite)
  const isFavorite = favoriteData.some((book) => book.isbn13 === data.isbn13)
  const dispatch = useDispatch()
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState('1')

  const color = data.isbn13 ? data.isbn13.slice(-6) : '000'
  const colorIcon = isFavorite ? '' : 'text-light'

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(data))
    } else {
      dispatch(addToFavorite(data))
    }
  }

  const handleAddToBasket = () => {
    dispatch(addToCart(data))
  }

  const handleToggleDetails = () => {
    setDetailsOpen(!detailsOpen)
  }

  const handleCardChange = (e) => {
    setSelectedCard(e.target.value)
  }

  return (
    <div className={style.card}>
      <NavLink className={style.card__link_back} to={`/`}><HiArrowLongLeft size={30} style={{ transform: "scale(1.5)", marginLeft: "5px" }} /></NavLink>
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
            <div className={style.card__value}>
              <div className={style.card__price}>{data.price}</div>
              <Rating rating={data.rating} />
            </div>
            <div className={style.card__feature}>
              <div className={style.card__feature_item}>
                <span className={style.card__feature_name}>Author</span>
                <span className="text-end">{data.authors}</span>
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
              {detailsOpen && (
                <>
                  <div className={style.card__feature_item}>
                    <span className={style.card__feature_name}>Pages</span>
                    <span>{data.pages}</span>
                  </div>
                  <div className={style.card__feature_item}>
                    <span className={style.card__feature_name}>Year</span>
                    <span>{data.year}</span>
                  </div>
                </>
              )}
              <div className="card__dropdown mb-4" onClick={handleToggleDetails}>
                More details <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column start-0">
            <button className={style.card__button} onClick={handleAddToBasket}>
              Add to cart
            </button>
            <a href="#" className={style.card__link}>
              Preview book
            </a>
          </div>
        </div>
      </div>
      <div className={style.card__toggle}>
        <input
          className={style.card__input}
          name="card"
          type="radio"
          id="card1"
          value="1"
          checked={selectedCard === '1'}
          onChange={handleCardChange}
        />
        <label className={style.card__label} htmlFor="card1">
          Description
        </label>
        <input
          className={style.card__input}
          name="card"
          type="radio"
          id="card2"
          value="2"
          checked={selectedCard === '2'}
          onChange={handleCardChange}
        />
        <label className={style.card__label} htmlFor="card2">
          Authors
        </label>
        <input
          className={style.card__input}
          name="card"
          type="radio"
          id="card3"
          value="3"
          checked={selectedCard === '3'}
          onChange={handleCardChange}
        />
        <label className={style.card__label} htmlFor="card3">
          Reviews
        </label>
      </div>

      <div className="mt-5 mb-5">
        {selectedCard === '1' && (
          <p className={style.card__text}>{data.desc}</p>
        )}
        {selectedCard === '2' && (
          <p className={style.card__text}>{data.authors}</p>
        )}
        {selectedCard === '3' && (
          <p className={style.card__text}>{data.review}</p>
        )}
      </div>
      <div className={style.card__social}>
        <a href="#" className={style.card__social_link}><FiFacebook size={22} /></a>
        <a href="#" className={style.card__social_link}><FiTwitter size={22} /></a>
        <a href="#" className={style.card__social_link}><FiMoreHorizontal size={22} /></a>
      </div>
    </div>
  )
}
