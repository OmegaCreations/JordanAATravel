import { useState } from "react";
import { Link, NavLink } from "react-router";
import tripAdvisorIcon from "../welcome/tripadvisor.png";
import facebookIcon from "../welcome/facebook.png";

const TripadvisorIcon = () => (
  <div className=" !text-white hover:bg-[#5a6150] transition-colors px-3 py-2 rounded-md text-center flex w-full flex-row gap-2 justify-center items-center self-center">
    <img src={tripAdvisorIcon} className="h-5 w-5" />
    <span
      className="text-xl text-white"
      style={{ color: "#f7f7f7 !important" }}
    >
      TripAdvisor
    </span>
  </div>
);

const FacebookIcon = () => (
  <div className=" !text-white hover:bg-[#5a6150] transition-colors px-3 py-2 rounded-md text-center flex w-full flex-row gap-2 justify-center items-center self-center">
    <img src={facebookIcon} className="h-10 w-10" />
    <span
      className="text-xl text-white"
      style={{ color: "#f7f7f7 !important" }}
    ></span>
  </div>
);

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
          style={{ color: "#f7f7f7 !important" }}
        >
          Jordan AA Trips
        </Link>

        {/* Hamburger Menu Button (mobile only) */}
        <button
          className="md:hidden !text-white focus:outline-none"
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
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <NavItem to="/" label="Home" onClick={closeMenu} />
          <NavItem to="/offers" label="Offer Plans" onClick={closeMenu} />
          <NavItem to="/places" label="Places" onClick={closeMenu} />

          {/* Tripadvisor Icon */}
          <a
            href="https://www.tripadvisor.co.uk/Attraction_Review-g293986-d29452369-Reviews-Ammar_Best_Trips-Amman_Amman_Governorate.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f2a65a] transition-colors"
            title="Read reviews on Tripadvisor"
          >
            <TripadvisorIcon />
          </a>

          {/* Facebook group */}
          <a
            href="https://www.facebook.com/groups/718044214509374/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f2a65a] transition-colors"
            title="Read reviews on Tripadvisor"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3f4238] py-4 px-4">
          <div className="flex flex-col space-y-4">
            <NavItem to="/" label="Home" onClick={closeMenu} />
            <NavItem to="/offers" label="Offer Plans" onClick={closeMenu} />
            <NavItem to="/places" label="Places" onClick={closeMenu} />

            {/* Tripadvisor Icon - Mobile */}
            <a
              href="https://www.tripadvisor.co.uk/Attraction_Review-g293986-d29452369-Reviews-Ammar_Best_Trips-Amman_Amman_Governorate.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f2a65a] flex items-center space-x-2"
            >
              <TripadvisorIcon />
            </a>

            {/* Facebook group */}
            <a
              href="https://www.facebook.com/groups/718044214509374/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#f2a65a] transition-colors"
              title="Read reviews on Tripadvisor"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

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
          ? "!text-[#f2a65a] font-semibold"
          : "!text-white hover:bg-[#5a6150] transition-colors"
      }`
    }
    onClick={onClick}
  >
    {label}
  </NavLink>
);

export default Navbar;
