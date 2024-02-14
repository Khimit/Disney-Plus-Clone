import loginBackground from "../images/login-background.jpg";
import logo1 from "../images/cta-logo-one.png";
import logo2 from "../images/cta-logo-two.png";
import Header from "./Header";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${loginBackground})` }}
      className="bg-cover bg-top absolute bg-no-repeat h-screen w-screen z-[-1]"
    >
      <Header/>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={logo1} alt="Logo 1" />
          <div className="bg-blue-700 w-2/4 h-16 m-3 rounded-md cursor-pointer hover:bg-blue-600">
            <h3 className="text-white font-bold text-xl tracking-widest text-center py-4">
              GET ALL THERE
            </h3>
          </div>
          <div className="w-2/4 text-white text-center text-sm m-2 leading-6 tracking-widest">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/24, the price of Disney+
            and The Disney Bundle will increase by $100.
          </div>
          <img className="w-2/4" src={logo2} alt="Logo 2" />
        </div>
      </div>
    </div>
  );
};

export default Login;
