import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FavoriteLayout } from '../components/Layout/FavoriteLayout'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { RootState } from '../types/interfaces'

export function Favorite() {
  const { dataLocal: data } = useSelector((state: RootState) => state.book)
  const dataIsFavorite = data.filter((book) => book.isFavorite === true)
  const [favoriteData, setFavoriteData] = useState([])

  useEffect(() => {
    setFavoriteData(dataIsFavorite)
  }, [data])
  return (
    <>
      <NavLink to={`/`}><HiArrowLongLeft size={30} style={{ transform: "scale(1.5)", marginLeft: "5px", textDecoration: "none", color: "#313037", marginTop: "40px" }} /></NavLink>
      <h1 className="title">Favourite</h1>
      <FavoriteLayout data={favoriteData} />
    </>
  )
}
