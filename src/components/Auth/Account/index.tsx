import React, { useState } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { NavLink } from 'react-router-dom'

export function Account() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }
  function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }
  function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }
  function handleChangeNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(e.target.value)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData()
    form.append('name', name)
    form.append('email', email)
    form.append('password', password)
    form.append('newPassword', newPassword)

    setName('')
    setEmail('')
    setPassword('')
    setNewPassword('')
  }
  return (
    <div className="account">
      <NavLink to={`/`}><HiArrowLongLeft size={30} style={{ transform: "scale(1.5)", marginLeft: "5px", textDecoration: "none", color: "#313037", marginTop: "40px" }} /></NavLink>
      <h1 className="title">Account</h1>
      <form className="row" onSubmit={handleSubmit}>
        <div className="account__body">
          <h5 className="account__title">Peopile</h5>
          <div className="account__item">
            <div className="col-6">
              <label className="auth__label">Name</label>
              <input type="text" className="form-control p-3" placeholder="Harry Potter" onChange={handleChangeName} />
            </div>
            <div className="col-6">
              <label className="auth__label">Email</label>
              <input type="email" className="form-control p-3" placeholder="wizzard@example.com" onChange={handleChangeEmail} />
            </div>
          </div>
          <h5 className="account__title">Password</h5>
          <div className="account__item">
            <div className="col-md-6">
              <label className="auth__label">Password</label>
              <input type="password" className="form-control p-3" onChange={handleChangePassword} placeholder="Your password" />
            </div>
          </div>
          <div className="account__item">
            <div className="col-md-6">
              <label className="auth__label">New Password</label>
              <input type="password" className="form-control p-3" onChange={handleChangeNewPassword}
                placeholder="Your new password" />
            </div>
            <div className="col-md-6">
              <label className="auth__label">Confirm Password</label>
              <input type="password" className="form-control p-3" placeholder="Confirm new password" />
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-end mt-5 mb-5">
          <button type="submit" className="account__button">Save Changes</button>
          <button type="button" className="account__button account__button-cancel">Cancel</button>
        </div>
      </form>
    </div>
  )
}
