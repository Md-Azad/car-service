import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  
  const HandleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = user.email;
        fetch("http://localhost:5000/token", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({loggedUser }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response", data);
            // Warning: local storage is not the best place to store token;

            localStorage.setItem('access-token',data.token);
             navigate(from, { replace: true });
          });
       
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
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
                name="email"
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
                name="password"
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
          <GoogleLogin></GoogleLogin>
          
          <p className="text-center mb-4">
            New to Car Service{" "}
            <Link to="/signup">
              <span className="font-semibold text-red-600">Sign Up</span>
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
