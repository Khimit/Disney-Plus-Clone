import viewerImg1 from "../images/viewers-disney.png";
import viewerImg2 from "../images/viewers-marvel.png";
import viewerImg3 from "../images/viewers-national.png";
import viewerImg4 from "../images/viewers-pixar.png";
import viewerImg5 from "../images/viewers-starwars.png";
import viewerVideo1 from "../videos/1564674844-disney.mp4";
import viewerVideo2 from "../videos/1564676115-marvel.mp4";
import viewerVideo3 from "../videos/1564676296-national-geographic.mp4";
import viewerVideo4 from "../videos/1564676714-pixar.mp4";
import viewerVideo5 from "../videos/1608229455-star-wars.mp4";

const Viewers = () => {
  return (
    <div className=" mt-10 grid m-5 gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {[viewerImg1, viewerImg2, viewerImg3, viewerImg4, viewerImg5].map(
        (img, index) => (
          <div
            key={index}
            className="border-2 border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
          >
            <img src={img} alt="" className="w-full z-10 opacity-100" />
            <video
              src={
                [
                  viewerVideo1,
                  viewerVideo2,
                  viewerVideo3,
                  viewerVideo4,
                  viewerVideo5,
                ][index]
              }
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0 top-0 left-0 right-0 bottom-0 w-full h-full rounded-lg opacity-0 hover:opacity-50"
            ></video>
          </div>
        )
      )}
    </div>
  );
};

export default Viewers;
