import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();
  console.log(currentUser)
  

  const handleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch(error) {
      console.log(e)
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello My Queen</h1>
          <p className="py-6">
            Let's chat together 
          </p>
          <button onClick={handleLogin} className="btn btn-primary">Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
