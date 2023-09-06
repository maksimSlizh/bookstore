import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromFavorite } from '../../../redux/favoriteSlice'
import { Rating } from '../../Rating'

export function CardFavorite({ data }) {
  const dispatch = useDispatch()
  const handleRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(data))
  }
  return (
    <div className="card">
      <div className="col">
        <img src={data.image} className="card__img" alt="" />
      </div>
      <div className="col">
        <div className="col">
          <h3 className="card__title">{data.title}</h3>
          <p className="card__info">{data.authors} {data.publisher}</p>
          <div className="card__value">
            <h2 className="card__price">{data.price}</h2>
            <Rating />
          </div>
        </div>
        <div className="col">
          <button className="card__button" onClick={handleRemoveFromFavorite}>Favourite</button>
        </div>
      </div>
    </div>
  )
}
