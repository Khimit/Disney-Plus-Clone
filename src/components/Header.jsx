import logo from "../images/logo.svg";
import homeicon from "../images/home-icon.svg";
import searchicon from "../images/search-icon.svg";
import watchlisticon from "../images/watchlist-icon.svg";
import originalicon from "../images/original-icon.svg";
import moviesicon from "../images/movie-icon.svg";
import seriescon from "../images/series-icon.svg";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.userName);
  const profilePhoto = useSelector((state) => state.user.profilePhoto);
  const userEmail = useSelector((state) => state.user.userEmail);
  console.log(userName);
  console.log(profilePhoto);
  console.log(userEmail);

  const setUser = (displayName, email, photoURL) => {
    const userdata = {
      userName: displayName,
      profilePhoto: photoURL,
      userEmail: email,
    };
    dispatch(setUserData(userdata));
    console.log(userdata);
  };

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
            <li className="mt-9 text-lg tracking-widest">
              <Link
                to="/"
                className="flex items-center no-underline hover:underline"
              >
                <img className="h-6 w-8" src={homeicon} alt="" />
                HOME
              </Link>
            </li>
            <li className="mt-9 text-lg tracking-widest">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={searchicon} alt="" />
                SEARCH
              </Link>
            </li>
            <li className="mt-9 text-lg tracking-widest">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={watchlisticon} alt="" />
                WATCHLIST
              </Link>
            </li>
            <li className="mt-9 text-lg tracking-widest">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={originalicon} alt="" />
                ORIGINALS
              </Link>
            </li>
            <li className="mt-9 text-lg tracking-widest">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={moviesicon} alt="" />
                MOVIES
              </Link>
            </li>
            <li className="mt-9 text-lg tracking-widest">
              <Link to="/" className="flex items-center">
                <img className="h-6 w-8" src={seriescon} alt="" />
                SERIES
              </Link>
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
