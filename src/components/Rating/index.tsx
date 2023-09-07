import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { RatingProps } from '../../types/type'

export function Rating({ rating = '4', isbn13 }: RatingProps) {
  const [selectedRating, setSelectedRating] = useState(parseInt(rating))
  const id = isbn13 + '1'
  const id2 = isbn13 + '2'
  const id3 = isbn13 + '3'
  const id4 = isbn13 + '4'
  const id5 = isbn13 + '5'

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(parseInt(event.target.value))
  }

  return (
    <div className="star d-flex flex-row-reverse justify-content-end align-items-center">
      <input
        className="star__input"
        name={isbn13}
        type="radio"
        value="1"
        id={id}
        checked={selectedRating === 1}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor={id} >
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name={isbn13}
        type="radio"
        value="2"
        id={id2}
        checked={selectedRating === 2}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor={id2} >
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name={isbn13}
        type="radio"
        value="3"
        id={id3}
        checked={selectedRating === 3}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor={id3} >
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name={isbn13}
        type="radio"
        value="4"
        id={id4}
        checked={selectedRating === 4}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor={id4} >
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name={isbn13}
        type="radio"
        value="5"
        id={id5}
        checked={selectedRating === 5}
        onChange={handleRatingChange}
      />
      <label className="star__label" htmlFor={id5} >
        <AiFillStar size={20} />
      </label>
    </div>
  )
}
