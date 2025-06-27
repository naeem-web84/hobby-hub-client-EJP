import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("https://hobby-hub-server-theta.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then(async (data) => {
            if (data.insertedId) {
              await Swal.fire({
                position: "top-end",
                icon: "success",
                title: "🎉 Registration Successful!",
                text: "Redirecting to homepage...",
                showConfirmButton: false,
                timer: 2000,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Something went wrong",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-secondary text-primary p-8 rounded-2xl shadow-2xl border-t-4 border-accent">
        <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-primary font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="w-full border border-accent/40 rounded-lg px-4 py-2 bg-white text-primary placeholder:text-primary/50"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-primary font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="w-full border border-accent/40 rounded-lg px-4 py-2 bg-white text-primary placeholder:text-primary/50"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-primary font-medium mb-1">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="https://your-photo-url.com"
              className="w-full border border-accent/40 rounded-lg px-4 py-2 bg-white text-primary placeholder:text-primary/50"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-primary font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full border border-accent/40 rounded-lg px-4 py-2 bg-white text-primary placeholder:text-primary/50"
              required
            />
            <p className="text-xs text-primary/60 mt-1">
              Must contain at least 1 uppercase, 1 lowercase & be 6+ characters.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-accent hover:bg-secondary hover:text-primary text-white font-semibold py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        {/* Link to login */}
        <p className="mt-4 text-sm text-center text-primary/70">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
