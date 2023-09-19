import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { CardL } from '../components/Cards/CardL/index'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'
import { RootState, Book } from '../types/interfaces'
import { getDataLocalStorage } from '../helpers'

export function Cart() {
  const { dataLocal: data } = useSelector((state: RootState) => state.book)
  const dataIsCart = data.filter((book) => book.isCart === true)
  const [basketData, setBasketData] = useState<Book[]>([])
  const [totalPrice, setTotalPrice] = useState("0")
  console.log(totalPrice)

  useEffect(() => {
    setBasketData(dataIsCart)
  }, [data])

  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0
      basketData.forEach((item) => {
        sum += parseFloat(item.price.substring(1))
      })
      return sum.toFixed(2)
    }

    const updatedTotalPrice = parseFloat(calculateTotalPrice()).toString()
    setTotalPrice(updatedTotalPrice)
  }, [basketData])

  const updatePrice = (amount: number) => {
    setTotalPrice((prevPrice) => (parseFloat(prevPrice) + amount).toString())
  }

  function renderCards() {
    return dataIsCart.map((books: Book) => (
      <CardL key={books.isbn13} data={books} onUpdatePrice={updatePrice} />
    ))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const vat = (Number(totalPrice) * 0.18).toFixed(2)
    const total = (Number(totalPrice) * 1.18).toFixed(2)

    const form = {
      totalPrice,
      vat,
      total
    }
  }

  return (
    <>
      <NavLink to={'/'}><HiArrowLongLeft size={30} style={{ transform: "scale(1.5)", marginLeft: "5px", textDecoration: "none", color: "#313037", marginTop: "40px" }} /></NavLink>
      <h1 className="title">Basket</h1>
      <div className="d-flex flex-column">
        {renderCards()}
      </div>
      <div className="cart mt-5 mb-5">
        <form onSubmit={handleSubmit}>
          <div className="cart__item">
            <p className="cart__item-text">Sum total</p>
            <p className="cart__item-value">{totalPrice}</p>
          </div>
          <div className="cart__item">
            <p className="cart__item-text">Vat</p>
            <p className="cart__item-value">{(Number(totalPrice) * 0.18).toFixed(2)}</p>
          </div>
          <div className="cart__item">
            <p className="cart__item-total">Total</p>
            <p className="cart__item-total">{(Number(totalPrice) * 1.18).toFixed(2)}</p>
          </div>
          <button className="cart__button">Check out</button>
        </form>
      </div>
    </>
  )
}
