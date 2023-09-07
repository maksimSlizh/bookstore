import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromFavorite } from '../../../redux/favoriteSlice'
import { Rating } from '../../Rating'
import { FcLike } from 'react-icons/fc'
import { PropsFavorite } from '../../../types/type'

export function CardFavorite({ data }: PropsFavorite) {
  console.log(data)
  const color = data.isbn13.slice(-6)
  const dispatch = useDispatch()
  const handleRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(data))
  }
  return (
    <div className="cards">
      <div className="cards__favorite col-4 d-flex justify-content-center align-items-center" style={{background: `#${color}`}}>
        <img src={data.image} className="cards__img" alt="" />
      </div>
      <div className="cards__body col-8 d-flex justify-content-between">
        <div className="mt-3 cards__width" >
          <h3 className="cards__title">{data.title}</h3>
          <p className="cards__info">{data.authors} {data.publisher}</p>
          <div className="cards__value">
            <h2 className="cards__price">{data.price}</h2>
            <Rating rating={data.rating} isbn13={data.isbn13} />
          </div>
        </div>
      </div>
      <div className="cards__like mt-auto mb-auto me-0" >
          <FcLike size={24} onClick={handleRemoveFromFavorite} />
        </div>
    </div>
  )
}
