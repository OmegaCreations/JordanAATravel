// app/components/Navbar.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#3f4238] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold text-white"
          onClick={closeMenu}
          style={{ color: "#f7f7f7" }}
        >
          Jordan AA Trips
        </Link>

        {/* Hamburger Menu Button (mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden md:flex space-x-4 md:space-x-6">
          <NavItem to="/" label="Home" onClick={closeMenu} />
          <NavItem to="/offers" label="Offer Plans" onClick={closeMenu} />
          <NavItem to="/places" label="Places" onClick={closeMenu} />
        </div>
      </div>

      {/* Mobile Menu (shown when toggled) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3f4238] py-4 px-4">
          <div className="flex flex-col space-y-4">
            <NavItem to="/" label="Home" onClick={closeMenu} />
            <NavItem to="/offers" label="Offer Plans" onClick={closeMenu} />
            <NavItem to="/places" label="Places" onClick={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper component for navigation items
const NavItem = ({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick: () => void;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-md text-center ${
        isActive
          ? "text-[#f2a65a] font-semibold"
          : "text-white hover:bg-[#5a6150]"
      }`
    }
    onClick={onClick}
    style={{ color: "#f7f7f7" }}
  >
    {label}
  </NavLink>
);

export default Navbar;
