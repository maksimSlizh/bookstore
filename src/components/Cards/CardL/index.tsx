import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../redux/cartSlice'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

export function CardL({ data, onUpdatePrice }) {
  const color = data.isbn13.slice(-6)
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const price = parseFloat(data.price.substring(1)) * count
  const [value, setValue] = useState(data.price.substring(1))

  useEffect(() => {
    setValue(price)
  }, [price])
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
    <div className="cards">
      <div className="col-3 d-flex justify-content-center align-items-center" style={{ maxWidth: '256px', maxHeight: '192px', background: `#${color}` }}>
        <img src={data.image} className="cards__img" alt="" />
      </div>
      <div className="col-6">
        <div className="mt-3 ms-4" >
          <h3 className="cards__title">{data.title}</h3>
          <p className="cards__info">{data.authors} {data.publisher}</p>
          <div className="cards__count">
            <AiOutlineMinus size={24} className="text-dark" onClick={handleMinus} />
            <span className="cards__count-value">{count}</span>
            <AiOutlinePlus size={24} className="text-dark" onClick={handlePlus} />
          </div>
        </div>
      </div>
      <div className="col-1 mt-auto mb-auto d-flex justify-content-start">
        <h2 className="cards__price-cart">${value}</h2>
      </div>
      <div className="col-2 mt-auto mb-auto d-flex justify-content-end">
        <RxCross1 size={24} onClick={handleRemoveFromBasket} />
      </div>
    </div>
  )
}
