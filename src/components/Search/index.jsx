import { BiSearch } from 'react-icons/bi'

export function Search() {
  return (
    <form className="search-form">
      <input type="text" className="search-form__input" placeholder="Search..." />
      <button type="submit" className="search-form__button">
        <BiSearch size={20}  />
      </button>
    </form>
  )
}
