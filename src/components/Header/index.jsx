import { Search } from "../Search/index"
import { GrFavorite } from "react-icons/gr"
import { SlBasket } from "react-icons/sl"
import { AiOutlineUser } from "react-icons/ai"

export function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">Bookstore</h1>
        <div className="header__search">
          <Search />
        </div>
        <nav className="header__nav">
          <a href="#"><GrFavorite size={20} className="text-dark" /></a>
          <a href="#"><SlBasket size={20} className="text-dark" /></a>
          <a href="#"><AiOutlineUser size={20} className="text-dark" /></a>
        </nav>
      </header>
    </>
  )
}
