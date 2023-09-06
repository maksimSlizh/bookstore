import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

export function Rating({ rating }: { rating: string }) {
  const [selectedRating, setSelectedRating] = useState(parseInt(rating))

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(parseInt(event.target.value))
  }

  return (
    <div className="star d-flex flex-row-reverse justify-content-end">
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating1"
        value="1"
        checked={selectedRating === 5}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor="rating1">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating2"
        value="2"
        checked={selectedRating === 4}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor="rating2">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating3"
        value="3"
        checked={selectedRating === 3}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor="rating3">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating4"
        value="4"
        checked={selectedRating === 2}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor="rating4">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating5"
        value="5"
        checked={selectedRating === 1}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor="rating5">
        <AiFillStar size={20} />
      </label>
    </div>
  )
}
