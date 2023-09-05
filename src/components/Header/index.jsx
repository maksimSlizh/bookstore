import { NavLink } from 'react-router-dom'
import { Search } from '../Search/index'
import { GrFavorite } from 'react-icons/gr'
import { SlBasket } from 'react-icons/sl'
import { AiOutlineUser } from 'react-icons/ai'

export function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Bookstore</h1>
        <div className="header__search">
          <Search />
        </div>
        <nav className="header__nav">
          <NavLink to="/favorite"><GrFavorite size={20} className="text-dark" /></NavLink>
          <NavLink to="/cart"><SlBasket size={20} className="text-dark" /></NavLink>
          <a href="#"><AiOutlineUser size={20} className="text-dark" /></a>
        </nav>
      </header>
    </>
  )
}
