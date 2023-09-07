import { NavLink } from 'react-router-dom'
import { Search } from '../Search/index'
import { MdFavoriteBorder } from 'react-icons/md'
import { SlBasket } from 'react-icons/sl'
import { AiOutlineUser } from 'react-icons/ai'
import { Menu } from '../Menu'

export function Header() {
  return (
    <>
      <header className="header mt-3">
        <h1 className="header__title">Bookstore</h1>
        <div className="header__search">
          <Search />
        </div>
        <nav className="header__nav">
          <NavLink to="/favorite"><MdFavoriteBorder size={24} className="header__nav-icon" /></NavLink>
          <NavLink to="/cart"><SlBasket size={24} className="header__nav-icon" /></NavLink>
          <NavLink to="/signin"><AiOutlineUser size={24} className="header__nav-icon" /></NavLink>
        </nav>

        <div className="header__menu">
          <Menu />
        </div>
      </header>
    </>
  )
}
