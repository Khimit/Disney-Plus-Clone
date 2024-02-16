import homeBg from "../images/home-background.png";
import Carousel from "./Carousel";
import Recommends from "./Recommends";
import Viewers from "./Viewers";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        width: "98.7vw",
        minHeight: "100vh",
      }}
      className="text-2xl mt-20 absolute p-10"
    >
      <Carousel />
      <Viewers />
      <Recommends/>
    </div>
  );
};

export default Home;
