import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiOutlineMenu } from 'react-icons/ai'
import { Search } from '../Search'
import { NavLink } from 'react-router-dom'

export function Menu() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <AiOutlineMenu variant="primary" onClick={handleShow}  />

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="header__close" />
        <Offcanvas.Body>
          <div className="d-flex flex-column">
            <Search />
            <div className="d-flex flex-column text-center">
              <NavLink to="/favorite" className={"header__link"}>Favorite</NavLink>
              <NavLink to="/cart" className={"header__link"}>Cart</NavLink>
              <NavLink to="/signin" className={"header__link"}>Account</NavLink>
            </div>

          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
