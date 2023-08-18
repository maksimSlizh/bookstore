export function Header() {
  return (
    <div className="">
      <header className="header">
        <h1 className="header__title">Bookstore</h1>
        <div className="header__search">
          <input type="text" />
        </div>
        <nav className="header__nav">
          <a href="#">favorites</a>
          <a href="#">basket</a>
          <a href="#">login</a>
        </nav>
      </header>
    </div>
  )
}
