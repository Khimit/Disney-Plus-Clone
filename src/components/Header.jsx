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
import { setUserData } from "../features/user/userSlice";
import { useEffect } from "react";
import { useCallback } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.userName);
  const profilePhoto = useSelector((state) => state.user.profilePhoto);
  const userEmail = useSelector((state) => state.user.userEmail);
  console.log(userName);
  console.log(profilePhoto);
  console.log(userEmail);
  
  const setUser = useCallback((displayName, email, photoURL) => {
    const userdata = {
      userName: displayName,
      profilePhoto: photoURL,
      userEmail: email,
    };
    dispatch(setUserData(userdata));
    console.log(userdata);
    },[]);

    
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUser(displayName, email, photoURL);
        navigate("/home");
      }
    });
  }, [setUser,navigate]);


  const handleAuthClick = () => {
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
  };

  return userName ? (
    <>
      <div className="w-full h-[90px] bg-[#090b13] fixed flex justify-between">
        <img className="h-16 w-40 m-4 p-1" src={logo} alt="" />
        <div className="text-white flex-grow">
          <ul className="flex items-center gap-3">
            <li className="mt-9 text-lg tracking-widest group">
              <Link to="/home" className="flex items-center">
                <img className="h-6 w-8" src={homeicon} alt="" />
                HOME
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={searchicon} alt="" />
                SEARCH
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={watchlisticon} alt="" />
                WATCHLIST
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={originalicon} alt="" />
                ORIGINALS
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={moviesicon} alt="" />
                MOVIES
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
            <li className="mt-9 text-lg tracking-widest group">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={seriescon} alt="" />
                SERIES
              </Link>
              <div className="bg-amber-500 h-[2px] ml-2 mt-1 w-0 group-hover:w-full transition-all duration-500"></div>
            </li>
          </ul>
        </div>
        <img
          className="h-14 w-16 rounded-full m-5 p-1 cursor-pointer"
          src={profilePhoto}
          alt="userName"
        />
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
