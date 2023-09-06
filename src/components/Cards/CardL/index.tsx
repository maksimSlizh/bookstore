import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/cartSlice'

export function CardL({ data, onUpdatePrice }) {
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const price = parseFloat(data.price.substring(1)) * count
  const [value, setValue] = useState(data.price.substring(1))

  useEffect(() => {
    setValue(price)
  },[price])
  const handleRemoveFromBasket = () => {
    dispatch(removeFromCart(data))
  }

  const handleMinus = () => {
    if (count <= 1) return
    setCount((prevCount) => prevCount - 1)
    onUpdatePrice(-parseFloat(data.price.substring(1)))
  };

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1)
    onUpdatePrice(parseFloat(data.price.substring(1)));
  };

  return (
    <div className="card d-flex">
      <div className="col-3">
        <img src={data.image} className="card__img" alt="" />
      </div>
      <div className="col-9">
        <div className="col">
          <h3 className="card__title">{data.title}</h3>
          <p className="card__info">{data.authors} {data.publisher}</p>
          <div className="card__count">
            <button className="card__button" onClick={handleMinus} >minus</button>
            <span className="card__count-value">{count}</span>
            <button className="card__button" onClick={handlePlus} >plus</button>
          </div>
        </div>
        <div className="col">
          <h2 className="card__price">${value}</h2>
          <button className="card__button" onClick={handleRemoveFromBasket}>Close</button>
        </div>
      </div>
    </div>
  )
}
