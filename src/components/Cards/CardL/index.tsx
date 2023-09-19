import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeCart } from '../../../redux/bookSlice'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { PropsCardL } from '../../../types/type'

export function CardL({ data, onUpdatePrice }: PropsCardL) {
  const color = data.isbn13.slice(-6)
  const dispatch = useDispatch()
  const [count, setCount] = useState(1)
  const price: number = parseFloat(data.price.substring(1)) * count
  const [value, setValue] = useState(data.price.substring(1))

  useEffect(() => {
    setValue(price.toString())
  }, [price])
  const handleRemoveFromBasket = () => {
    dispatch(changeCart(data))
  }

  const handleMinus = () => {
    if (count <= 1) return
    setCount((prevCount) => prevCount - 1)
    onUpdatePrice(-parseFloat(data.price.substring(1)))
  }

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1)
    onUpdatePrice(parseFloat(data.price.substring(1)));
  }

  return (
    <div className="cards cards__cart">
      <div className="cards__cart-img col-3 d-flex justify-content-center align-items-center" style={{ background: `#${color}` }}>
        <img src={data.image} className="cards__img" alt="" />
        <RxCross1 size={24} onClick={handleRemoveFromBasket} className="cards__close-hidden" />
      </div>
      <div className="cards__cart-body col-6">
        <div className="mt-3 ms-4" >
          <h3 className="cards__title">{data.title}</h3>
          <p className="cards__info">{data.authors} {data.publisher}</p>
          <div className="cards__count-wrapper">
            <div className="cards__count">
              <AiOutlineMinus size={24} className="text-dark" onClick={handleMinus} />
              <span className="cards__count-value">{count}</span>
              <AiOutlinePlus size={24} className="text-dark" onClick={handlePlus} />
            </div>
            <h2 className="cards__price-cart cards__price-hidden">${value}</h2>
          </div>
        </div>
      </div>
      <div className="cards__cart-wrapper col-3">
        <div className="cards__item col-1 mt-auto mb-auto d-flex justify-content-start">
          <h2 className="cards__price-cart">${value}</h2>
        </div>
        <div className="cards__item col-2 mt-auto mb-auto d-flex justify-content-end">
          <RxCross1 size={24} onClick={handleRemoveFromBasket} />
        </div>
      </div>
    </div>
  )
}
