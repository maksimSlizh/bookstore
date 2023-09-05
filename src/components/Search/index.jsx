import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'

export function Search() {
  const navigate = useNavigate()
  const [books, setBooks] = useState('')

  function handleChange(e) {
    setBooks(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search/${books}/1`)
    setBooks('')
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" className="search-form__input" placeholder="Search..." value={books} onChange={handleChange} />
      <button type="submit" className="search-form__button">
        <BiSearch size={20}  />
      </button>
    </form>
  )
}
