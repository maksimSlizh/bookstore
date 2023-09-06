import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { FavoriteLayout } from '../Layout/FavoriteLayout'
import { NavLink } from 'react-router-dom'
import { HiArrowLongLeft } from 'react-icons/hi2'

export function Favorite() {
  const data = useSelector((state) => state.favorite)
  const [favoriteData, setFavoriteData] = useState([])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("favorite")!)
    if (storedData) {
      setFavoriteData(storedData)
    }
  }, [data])
  return (
    <>
      <NavLink to={`/`}><HiArrowLongLeft size={30} style={{ transform: "scale(1.5)", marginLeft: "5px", textDecoration: "none", color: "#313037", marginTop: "40px" }} /></NavLink>
      <h1 className="title">Favourite</h1>
      <FavoriteLayout data={favoriteData} />
    </>
  )
}
