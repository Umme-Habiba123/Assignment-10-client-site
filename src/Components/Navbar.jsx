import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router';
import userPhoto from '../assets/user.png';
import { AuthContext } from '../Provider/AuthContext';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => console.log('Signed out successfully'))
      .catch((error) => console.log(error));
    setMobileMenuOpen(false);
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-2 hover:text-green-600 transition-colors ${isActive ? 'text-green-600 font-bold' : ''}`
        }
        onClick={() => setMobileMenuOpen(false)}
      >
        HOME
      </NavLink>
      <NavLink
        to="/addTasks"
        className={({ isActive }) =>
          `py-2 hover:text-green-600 transition-colors ${isActive ? 'text-green-600 font-bold' : ''}`
        }
        onClick={() => setMobileMenuOpen(false)}
      >
        ADD TASKS
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `py-2 hover:text-green-600 transition-colors ${isActive ? 'text-green-600 font-bold' : ''}`
        }
        onClick={() => setMobileMenuOpen(false)}
      >
        CONTACT
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          `py-2 hover:text-green-600 transition-colors ${isActive ? 'text-green-600 font-bold' : ''}`
        }
        onClick={() => setMobileMenuOpen(false)}
      >
        BLOGS
      </NavLink>

      {/* Services Dropdown */}
      <div className="relative">
        <button
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          className="flex items-center gap-1 py-2 hover:text-green-600 transition-colors"
        >
          SERVICES <FaChevronDown />
        </button>
        {servicesDropdownOpen && (
          <ul className="absolute left-0 mt-2 w-48 bg-white border border-green-300 rounded shadow-lg z-50">
            <li>
              <NavLink
                to="/services/web-development"
                className="block px-4 py-2 hover:bg-green-100"
                onClick={() => setServicesDropdownOpen(false)}
              >
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/design"
                className="block px-4 py-2 hover:bg-green-100"
                onClick={() => setServicesDropdownOpen(false)}
              >
                Design & Creative
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services/marketing"
                className="block px-4 py-2 hover:bg-green-100"
                onClick={() => setServicesDropdownOpen(false)}
              >
                Digital Marketing
              </NavLink>
            </li>
          </ul>
        )}
      </div>

      {user && (
        <>
          <NavLink
            to="/brouseTasks"
            className={({ isActive }) =>
              `py-2 hover:text-green-600 transition-colors ${isActive ? 'text-green-600 font-bold' : ''}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            BROWSE TASKS
          </NavLink>
          <NavLink
            to="/myPostedTasks"
            className={({ isActive }) =>
              `py-2 hover:text-green-600 transition-colors ${isActive ? 'text-green-600 font-bold' : ''}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            MY POSTED TASKS
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-green-500 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 flex-wrap">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black lg:ml-8">
          💻 Flexora
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center text-black font-medium text-sm">
          {links}
        </div>

        {/* Actions & Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
          {user ? (
            <>
              <span className="hidden sm:block text-black text-sm md:text-base truncate max-w-xs">
                {user.email}
              </span>
              <button
                onClick={handleLogOut}
                className="bg-white font-semibold text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition"
              >
                LOG OUT
              </button>
            </>
          ) : (
            <Link to="/logIn">
              <button className="bg-white text-green-500 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition">
                LOG IN
              </button>
            </Link>
          )}

          <Link to="/signUp">
            <button className="bg-green-500 text-white border border-green-500 px-4 py-2 rounded hover:bg-white hover:text-green-500 transition">
              SIGN UP
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden ml-2 p-2 border rounded-md border-green-500 text-green-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 flex flex-col items-center pt-20 gap-6 text-green-600 text-xl font-semibold transition-all duration-300 overflow-y-auto">
          {/* User Info */}
          {user && (
            <div className="flex flex-col items-center mb-6">
              <img
                className="w-20 h-20 rounded-full border-2 border-green-500 mb-2 object-cover"
                src={user.photoURL || userPhoto}
                alt="user"
              />
              <span className="text-green-600 text-xs">{user.displayName || 'User'}</span>
              <span className="text-green-600 text-xs truncate max-w-xs">{user.email}</span>
            </div>
          )}

          {/* Navigation Links */}
          <ul className="flex flex-col items-center gap-4 text-center">{links}</ul>

          {/* Mobile Actions */}
          <div className="flex flex-col items-center gap-3 mt-6">
            {user ? (
              <button
                onClick={handleLogOut}
                className="px-3 py-2 border rounded-2xl border-green-500 hover:bg-green-500 hover:text-white transition"
              >
                LOG OUT
              </button>
            ) : (
              <Link to="/logIn" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-3 py-2 border border-green-500 hover:bg-green-500 hover:text-white rounded transition">
                  LOG IN
                </button>
              </Link>
            )}
            <Link to="/signUp" onClick={() => setMobileMenuOpen(false)}>
              <button className="px-3 py-2 border font-semibold border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-500 rounded transition">
                SIGN UP
              </button>
            </Link>
          </div>

          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-green-600 text-3xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
