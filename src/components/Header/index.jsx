import { NavLink } from 'react-router-dom'
import { Search } from '../Search/index'
import { GrFavorite } from 'react-icons/gr'
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
          <NavLink to="/favorite"><GrFavorite size={24} className="text-dark" /></NavLink>
          <NavLink to="/cart"><SlBasket size={24} className="text-dark" /></NavLink>
          <NavLink to="/signin"><AiOutlineUser size={24} className="text-dark" /></NavLink>
        </nav>

        <div className="header__menu">
          <Menu />
        </div>
      </header>
    </>
  )
}
