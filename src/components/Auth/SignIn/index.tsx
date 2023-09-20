import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isActive, setIsActive] = useState(true)

  function handleLinkClick() {
    setIsActive(!isActive)
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData()
    form.append('email', email)
    form.append('password', password)

    setEmail('')
    setPassword('')
  }
  return (
    <div className="auth">
      <div className="auth__item">
        <NavLink
          className={`auth__link ${isActive ? "auth__active" : ""}`}
          to={'/auth/signin'}
          onClick={handleLinkClick}
        >
          Sing In
        </NavLink>
        <NavLink className={"auth__link"} to={'/auth/signup'}>Sing Up</NavLink>
      </div>
      <div className="auth__body">
        <form className="form d-flex flex-column" onSubmit={handleSubmit}>
          <div className="col mt-3">
            <label className="auth__label">Email</label>
            <input type="email" className="form-control p-3" onChange={handleChangeEmail} placeholder='Your email' />
          </div>
          <div className="col mt-3">
            <label className="auth__label">Password</label>
            <input type="password" className="form-control p-3" onChange={handleChangePassword} placeholder='Your password' />
          </div>
          <a href="#" className="auth__forgot mt-2">Forgot password ?</a>
          <button className="auth__button mt-5">Sing In</button>
        </form>
      </div>
    </div>
  )
}
