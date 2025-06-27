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

  // Links always visible
  const commonNavLinks = [
    { path: "/", label: "Home" },
    { path: "/allGroups", label: "All Items" },
  ];

  // Links for logged out users
  const loggedOutNavLinks = [
    { path: "/about", label: "About Us" },
    { path: "/contactPage", label: "Contact" },
    { path: "/SupportPage", label: "Support" },
  ];

  // Links for logged in users
  const loggedInNavLinks = [
    { path: "/createGroup", label: "Create Group" },
    { path: "/myGroups", label: "My Groups" },
    { path: "/about", label: "About Us" },
  ];

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 font-semibold text-base transition-colors duration-300 ${
      isActive ? "text-secondary" : "text-white hover:text-secondary"
    }`;

  return (
    <nav className="sticky top-0 z-50 shadow bg-primary bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/earth-svgrepo-com.svg"
            alt="HobbyHub Logo"
            className="w-10 h-10"
          />
          <span className="text-3xl font-extrabold tracking-widest text-secondary whitespace-nowrap">
            HobbyHub
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Common links */}
          {commonNavLinks.map(({ path, label }) => (
            <NavLink key={path} to={path} className={navLinkClass}>
              {({ isActive }) => (
                <div className="relative group whitespace-nowrap">
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              )}
            </NavLink>
          ))}

          {/* Conditional links */}
          {(user ? loggedInNavLinks : loggedOutNavLinks).map(({ path, label }) => (
            <NavLink key={path} to={path} className={navLinkClass}>
              {({ isActive }) => (
                <div className="relative group whitespace-nowrap">
                  <span>{label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${
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
                className="w-9 h-9 rounded-full border-2 border-secondary object-cover"
              />
              <span className="text-white font-medium max-w-[150px] truncate whitespace-nowrap">
                {mongoUser?.name || user.displayName || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-1 rounded-md text-sm font-semibold text-primary bg-accent hover:bg-secondary/80 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-1 rounded-md text-sm font-semibold text-primary bg-accent hover:bg-secondary/80 transition whitespace-nowrap"
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-secondary hover:text-secondary/80"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-6 pt-3 space-y-3 rounded-b-xl shadow-md bg-primary bg-opacity-95">
          {commonNavLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-semibold text-base transition-colors duration-200 ${
                  isActive
                    ? "bg-secondary text-primary"
                    : "text-white hover:bg-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {(user ? loggedInNavLinks : loggedOutNavLinks).map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md font-semibold text-base transition-colors duration-200 ${
                  isActive
                    ? "bg-secondary text-primary"
                    : "text-white hover:bg-primary"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <div className="border-t border-secondary pt-4 space-y-3">
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
                    className="w-10 h-10 rounded-full border-2 border-secondary"
                  />
                  <span className="font-medium truncate max-w-[160px] text-secondary whitespace-nowrap">
                    {mongoUser?.name || user.displayName || "User"}
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full py-2 rounded-md font-semibold text-primary bg-secondary hover:bg-secondary/80 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className="block w-full py-2 rounded-md font-semibold text-primary bg-secondary hover:bg-secondary/80 transition whitespace-nowrap"
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
