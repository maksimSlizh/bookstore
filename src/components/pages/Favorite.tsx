import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { FavoriteLayout } from "../Layout/FavoriteLayout"

export function Favorite() {
  const data = useSelector((state) => state.favorite)
  const [favoriteData, setFavoriteData] = useState([])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("favorite"))
    if (storedData) {
      setFavoriteData(storedData)
    }
  }, [data])
  return (
    <>
      <a href="#">Back</a>
      <h1>Favourite</h1>
      <FavoriteLayout data={favoriteData} />
    </>
  )
}
