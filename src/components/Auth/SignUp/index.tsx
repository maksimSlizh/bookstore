export function SignUp() {
  return (
    <div className="d-flex justify-content-center flex-column" style={{width: '544px', margin: '0 auto'}}>
      <div className="d-flex justify-content-between">
        <a href="#" style={{margin: '0 auto'}}>SingIn</a>
        <a href="#" style={{margin: '0 auto'}}>SingUp</a>
      </div>
      <form className="form d-flex flex-column">
      <div className="col">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="" />
      </div>
        <div className="col">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="col">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <div className="col">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" />
        </div>
        <a href="">Forgot password?</a>
        <button>SingIn</button>
      </form>
    </div>
  )
}
