import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const [mongoUser, setMongoUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    logOutUser()
      .then(() => console.log("Logout successful"))
      .catch((error) => console.error("Logout error", error));
  };

  useEffect(() => {
    if (user?.email) {
      fetch(`https://hobby-hub-server-theta.vercel.app/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMongoUser(data))
        .catch((err) => console.error("Failed to fetch user:", err));
    }
  }, [user]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/allGroups", label: "All Groups" },
    { path: "/createGroup", label: "Create Group" },
    { path: "/myGroups", label: "My Groups" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative px-3 py-2 font-semibold text-lg transition-all duration-300 ${
      isActive ? "text-purple-700" : "text-indigo-700 hover:text-purple-600"
    }`;

  return (
    <nav className="bg-gradient-to-r from-indigo-100 via-white to-purple-100 backdrop-blur-xl shadow-md fixed top-0 left-0 w-full z-50 border-b border-purple-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg">
            H
          </div>
          <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-widest">
            HobbyHub
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ path, label }) => (
            <NavLink key={path} to={path} className={navLinkClass}>
              {({ isActive }) => (
                <div className="relative group">
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Auth/User Section */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <img
                src={
                  mongoUser?.photoURL ||
                  user.photoURL ||
                  "https://i.pravatar.cc/40"
                }
                alt="User"
                className="w-9 h-9 rounded-full border-2 border-purple-500 object-cover"
              />
              <span className="text-indigo-900 font-medium max-w-[150px] truncate">
                {mongoUser?.name || user.displayName || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-md text-sm bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-5 py-2 rounded-md text-sm bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-purple-700 hover:text-purple-900"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-4 bg-white/90 backdrop-blur-lg rounded-b-xl shadow-md animate-fadeInDown">
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-semibold ${
                  isActive
                    ? "bg-purple-100 text-purple-900"
                    : "hover:bg-purple-50 text-indigo-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="border-t pt-4 space-y-3">
            {user ? (
              <>
                <div className="flex items-center space-x-3">
                  <img
                    src={
                      mongoUser?.photoURL ||
                      user.photoURL ||
                      "https://i.pravatar.cc/40"
                    }
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-purple-500"
                  />
                  <span className="font-medium text-purple-800 truncate max-w-[160px]">
                    {mongoUser?.name || user.displayName || "User"}
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className="block w-full text-center bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
