import React from 'react'

export function Accaount() {
  return (
    <form className="row">
      <h5>Peopile</h5>
      <div className="col-md-6">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Jane Doe" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" />
      </div>
      <h5>Password</h5>
      <div className="col-md-6">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>
      <div className="d-flex p-0">
        <div className="col-md-6" style={{paddingLeft: '12px', paddingRight: '12px'}}>
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" />
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
