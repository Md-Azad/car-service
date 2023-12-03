import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
const Login = () => {
    const HandleLogin =event =>{
        event.preventDefault();
        console.log("hello");
    }
  return (
    <div className="hero bg-base-200 my-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:text-left w-1/2 mr-12">
            <img src={loginImg} alt="" />
        </div>

        
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={HandleLogin} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='text-center mb-4'>New to Car Service <Link to='/signup'><span className="font-semibold text-red-600">Sign Up</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
