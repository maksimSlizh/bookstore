import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { LongLayout } from "../Layout/LongLayout"

export function Basket() {
  const data = useSelector((state) => state.basket)
  const [basketData, setBasketData] = useState([])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("basket"))
    if (storedData) {
      setBasketData(storedData)
    }
  }, [data])
  return (
    <>
      <a href="#">Back</a>
      <h1>Basket</h1>
      <LongLayout data={basketData} />
    </>
  )
}
