import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

export function Rating() {
  return (
    <div className="star d-flex flex-row-reverse justify-content-end">
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating1"
      />
      <label className="star__label" htmlFor="rating1">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating2"
      />
      <label className="star__label" htmlFor="rating2">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating3"
      />
      <label className="star__label" htmlFor="rating3">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating4"
      />
      <label className="star__label" htmlFor="rating4">
        <AiFillStar size={20} />
      </label>
      <input
        className="star__input"
        name="rating"
        type="radio"
        id="rating5"
      />
      <label className="star__label" htmlFor="rating5">
        <AiFillStar size={20} />
      </label>
    </div>
  );
}
