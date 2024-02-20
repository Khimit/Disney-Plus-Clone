import loginBackground from "../images/login-background.jpg";
import logo1 from "../images/cta-logo-one.png";
import logo2 from "../images/cta-logo-two.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const exploreWithoutLoginClicked = () => {
    navigate("/home");
  };

  return (
    <div
      style={{ backgroundImage: `url(${loginBackground})` }}
      className="bg-cover bg-top bg-no-repeat min-h-screen flex justify-center items-center"
    >
      <div className="p-4 bg-black bg-opacity-50 rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src={logo1}
            alt="Logo 1"
            className="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3"
          />
          <button
            onClick={exploreWithoutLoginClicked}
            className="bg-blue-700 w-full md:w-3/4 lg:w-2/3 h-16 mt-5 mb-3 rounded cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out flex items-center justify-center"
          >
            <h3 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-widest">
              GET ALL HERE
              <span className="block text-xs md:text-sm font-light">
                [ WITHOUT LOGIN ]
              </span>
            </h3>
          </button>
          <p className="w-3/4 md:w-2/3 text-white text-center text-xs md:text-sm lg:text-base mt-2 leading-6 tracking-widest">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/24, the price of Disney+
            and The Disney Bundle will increase by $100.
          </p>
          <img
            src={logo2}
            alt="Logo 2"
            className="w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
