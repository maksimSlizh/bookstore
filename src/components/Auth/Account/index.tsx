import React, { useState } from 'react'

export function Account() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  function handleChangeName(e) {
    setName(e.target.value)
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangePassword(e) {
    setPassword(e.target.value)
  }
  function handleChangeNewPassword(e) {
    setNewPassword(e.target.value)
  }

  function handleSubmit(e) {
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
    <form className="row" onSubmit={handleSubmit}>
      <h5>Peopile</h5>
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Jane Doe" onChange={handleChangeName} />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="c1B9b@example.com" onChange={handleChangeEmail} />
      </div>
      <h5>Password</h5>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" onChange={handleChangePassword} />
      </div>
      <div className="d-flex p-0">
        <div className="col-md-6" style={{paddingLeft: '12px', paddingRight: '12px'}}>
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" onChange={handleChangeNewPassword} />
        </div>
        <div className="col-md-6" style={{paddingLeft: '12px', paddingRight: '12px'}}>
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
      </div>
      <br />
      <div className="d-flex gap-3 justify-content-end mt-5">
        <button type="submit" className="btn btn-primary">Save Changes</button>
        <button type="button" className="btn btn-secondary">Cancel</button>
      </div>
    </form>
  )
}
