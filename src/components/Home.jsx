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
      <Recommends compName="Recommanded For You" page="1" />
      <Recommends compName="Trending" page="2" />
      <Recommends compName="New Releases" page="3" />
    </div>
  );
};

export default Home;
