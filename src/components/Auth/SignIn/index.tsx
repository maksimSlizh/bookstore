import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangePassword(e) {
    setPassword(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData()
    form.append('email', email)
    form.append('password', password)

    setEmail('')
    setPassword('')
  }
  return (
    <div className="d-flex justify-content-center flex-column" style={{width: '544px', margin: '0 auto'}}>
      <div className="d-flex justify-content-between">
        <NavLink to={'/signin'} style={{margin: '0 auto'}}>SingIn</NavLink>
        <NavLink to={'/signup'} style={{margin: '0 auto'}}>SingUp</NavLink>
      </div>
      <form className="form d-flex flex-column"  onSubmit={handleSubmit}>
        <div className="col">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" onChange={handleChangeEmail} />
        </div>
        <div className="col">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChangePassword} />
        </div>
        <a href="">Forgot password?</a>
        <button>SingIn</button>
      </form>
    </div>
  )
}
