import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { CardL } from '../Cards/CardL/index'

export function Cart() {
  const data = useSelector((state) => state.cart)
  const [basketData, setBasketData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cart')!)
    if (storedData) {
      setBasketData(storedData)
    }
  }, [data])

  useEffect(() => {
    const calculateTotalPrice = () => {
      let sum = 0
      basketData.forEach((item) => {
        sum += parseFloat(item.price.substring(1))
      })
      return sum.toFixed(2)
    }

    const updatedTotalPrice = calculateTotalPrice()
    setTotalPrice(updatedTotalPrice)
  }, [basketData])

  const updatePrice = (amount) => {
    setTotalPrice((prevPrice) => parseFloat(prevPrice) + amount);
  };

  function renderCards() {
    return data.map((books: Books) => (
      <CardL key={books.isbn13} data={books} onUpdatePrice={updatePrice} />
    ))}

    return (
      <>
        <a href="#">Back</a>
        <h1>Basket</h1>
        <div className="d-flex flex-column">
          {renderCards()}
        </div>
        <div className="">
          <p>Total price: {totalPrice}</p>
        </div>
      </>
    );
  }
