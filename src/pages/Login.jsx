import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => { 
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
 
        navigate("/");
      })
      .catch((error) => {
        console.error("Login error:", error);
 
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: error.message,
          confirmButtonColor: "#d33",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log("Google login success:", result.user);
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Google login successful!',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google login error:", error);
        Swal.fire({
          icon: "error",
          title: "Google login failed",
          text: error.message,
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#2D6CDF] mb-6">Welcome Back!</h2>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#2D6CDF] hover:bg-[#1e4bb8] text-white font-semibold py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-gray-700">Continue with Google</span>
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-[#2D6CDF] font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
