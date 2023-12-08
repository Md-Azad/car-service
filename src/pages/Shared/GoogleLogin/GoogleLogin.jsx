import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            navigate(from, { replace: true });
        })
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-primary bg-black font-bold">
            G
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
