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
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/");
      })
      .catch((error) => {
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
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Google login successful!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google login failed",
          text: error.message,
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-secondary text-primary p-8 rounded-2xl shadow-2xl border-t-4 border-accent">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back!</h2>

        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block text-primary font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-accent/40 rounded-lg px-4 py-2 bg-white text-primary placeholder:text-primary/50"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-primary font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-accent/40 rounded-lg px-4 py-2 bg-white text-primary placeholder:text-primary/50"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-secondary hover:text-primary text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-primary/20" />
          <span className="px-3 text-primary/60 text-sm">OR</span>
          <div className="flex-grow h-px bg-primary/20" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-accent/50 rounded-lg py-2 hover:bg-primary/10 transition"
        >
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-primary">Continue with Google</span>
        </button>

        <p className="mt-4 text-sm text-center text-primary/70">
          Don’t have an account?{" "}
          <Link to="/register" className="text-accent font-medium hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
