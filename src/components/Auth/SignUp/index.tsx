import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
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
    form.append('name', name)
    form.append('email', email)
    form.append('password', password)

    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className="auth">
      <div className="auth__item">
        <NavLink to={'/signin'} className={"auth__link"}>Sing In</NavLink>
        <NavLink to={'/signup'} className={"auth__link"}>Sing Up</NavLink>
      </div>
      <div className="auth__body">
        <form className="form d-flex flex-column" onSubmit={handleSubmit}>
          <div className="col mt-3">
            <label className="auth__label">Name</label>
            <input type="text" className="form-control p-3" placeholder="Your name" onChange={handleChangeName} />
          </div>
          <div className="col mt-3">
            <label className="auth__label">Email</label>
            <input type="email" className="form-control p-3" onChange={handleChangeEmail} placeholder="Your email" />
          </div>
          <div className="col mt-3">
            <label className="auth__label">Password</label>
            <input type="password" className="form-control p-3" onChange={handleChangePassword} placeholder="Your password" />
          </div>
          <div className="col mt-3">
            <label className="auth__label">Confirm Password</label>
            <input type="password" className="form-control p-3" placeholder="Confirm password" />
          </div>
          <button className="auth__button mt-5">SingIn</button>
        </form>
      </div>
    </div>
  )
}
