import logo from "../images/logo.svg";
import homeicon from "../images/home-icon.svg";
import searchicon from "../images/search-icon.svg";
import watchlisticon from "../images/watchlist-icon.svg";
import originalicon from "../images/original-icon.svg";
import moviesicon from "../images/movie-icon.svg";
import seriescon from "../images/series-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { removeUserData, setUserData } from "../features/user/userSlice";
import { useEffect, useState, useRef } from "react";
import { useCallback } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userName);
  const profilePhoto = useSelector((state) => state.user.profilePhoto);
  const userEmail = useSelector((state) => state.user.userEmail);

  const [signOutBtnFlag, setSignOutBtnFlag] = useState(false);
  const elementRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const setUser = useCallback((displayName, email, photoURL) => {
    const userdata = {
      userName: displayName,
      profilePhoto: photoURL,
      userEmail: email,
    };
    dispatch(setUserData(userdata));
    console.log(userdata);
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUser(displayName, email, photoURL);
        navigate("/home");
      }
    });
  }, [setUser, navigate]);

  const handleAuthClick = () => {
    console.log("sign out clicked");
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          const { displayName, email, photoURL } = result.user.multiFactor.user;
          console.log(displayName);
          console.log(email);
          console.log(photoURL);
          setUser(displayName, email, photoURL);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(removeUserData());
          navigate("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  useEffect(() => {
    // Function to handle click events
    function handleClickOutside(event) {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setTimeout(() => setSignOutBtnFlag(false), 100);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openSignOutBtn = () => {
    setSignOutBtnFlag(true);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return userName ? (
    <>
      <div className="w-full h-[90px] bg-[#090b13] fixed flex md:justify-between z-[1000]">
        <Link to="/home" className="cursor-pointer">
          <img
            className="md:h-30 md:w-60 h-16 w-40 m-4 p-1"
            src={logo}
            alt=""
          />
        </Link>
        <div className="text-white flex-grow md:block hidden ml-8">
          <ul className="flex items-center gap-9">
            <li className="mt-9 md:text-sm lg:text-lg tracking-widest group">
              <Link to="/home" className="flex items-center">
                <img className="h-6 w-8" src={homeicon} alt="" />
                HOME
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 md:text-sm lg:text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={searchicon} alt="" />
                SEARCH
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 md:text-sm lg:text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={watchlisticon} alt="" />
                WATCHLIST
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 md:text-sm lg:text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={originalicon} alt="" />
                ORIGINALS
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 md:text-sm lg:text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={moviesicon} alt="" />
                MOVIES
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 md:text-sm lg:text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={seriescon} alt="" />
                SERIES
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          </ul>
        </div>

        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-black`}
        >
          {/* Mobile Navigation Menu */}
          <Link
            to="/home"
            className="block px-5 py-3 text-white hover:border-2 hover:border-white tracking-widest border-[1px] border-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/"
            className="block px-5 py-3 text-white hover:border-2 hover:border-white tracking-widest border-[1px] border-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Search
          </Link>
          <Link
            to="/"
            className="block px-5 py-3 text-white hover:border-2 hover:border-white tracking-widest border-[1px] border-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Watchlist
          </Link>
          <Link
            to="/"
            className="block px-5 py-3 text-white hover:border-2 hover:border-white tracking-widest border-[1px] border-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Originals
          </Link>
          <Link
            to="/"
            className="block px-5 py-3 text-white hover:border-2 hover:border-white tracking-widest border-[1px] border-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Movies
          </Link>
          <Link
            to="/"
            className="block px-5 py-3 text-white hover:border-2 hover:border-white tracking-widest border-[1px] border-zinc-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Series
          </Link>
        </div>

        <div className="sm:w-full w-[70%]">
          <img
            className="h-14 w-16 rounded-full m-5 ml-auto mr-0 p-2 cursor-pointer "
            ref={elementRef}
            src={profilePhoto}
            alt="userName"
            onClick={openSignOutBtn}
          />
          <div
            className={`text-white w-16 md:w-24 ml-auto md:mr-2 bg-stone-500 rounded-lg cursor-pointer tracking-wider font-semibold ${
              !signOutBtnFlag ? "hidden" : ""
            }`}
            onClick={(event) => handleAuthClick(event)}
          >
            <h1 className="text-center text-base p-1">Sign Out</h1>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 mt-8 mr-4 md:hidden"
          onClick={toggleMobileMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </>
  ) : (
    <>
      <div className="w-full h-[90px] bg-[#090b13] fixed flex justify-between">
        <img className="h-16 w-40 m-4 p-1" src={logo} alt="" />
        <button
          className="bg-transparent hover:bg-white text-white hover:text-black h-14 w-32 p-1 m-4 mr-8 tracking-widest border border-white hover:border-transparent rounded"
          onClick={handleAuthClick}
        >
          <h1 className="text-xl font-semibold tracking-widest">LOGIN</h1>
        </button>
      </div>
    </>
  );
};

export default Header;
