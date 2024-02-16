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
    <div className="grid grid-cols-5 m-10 gap-5">
      <div
        className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800"
      >
        <img src={viewerImg1} alt="" className="w-full z-[1] opacity-100" />
        <video
          src={viewerVideo1}
          autoPlay
          loop
          playsInline
          muted
          className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
        ></video>
      </div>
      <div
        className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800"
      >
        <img src={viewerImg2} alt="" className="w-full z-[1] opacity-100" />
        <video
          src={viewerVideo2}
          autoPlay
          loop
          playsInline
          muted
          className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
        ></video>
      </div>
      <div
        className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800"
      >
        <img src={viewerImg3} alt="" className="w-full z-[1] opacity-100" />
        <video
          src={viewerVideo3}
          autoPlay
          loop
          playsInline
          muted
          className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
        ></video>
      </div>
      <div
        className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800"
      >
        <img src={viewerImg4} alt="" className="w-full z-[1] opacity-100" />
        <video
          src={viewerVideo4}
          autoPlay
          loop
          playsInline
          muted
          className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
        ></video>
      </div>
      <div
        className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800"
      >
        <img src={viewerImg5} alt="" className="w-full z-[1] opacity-100" />
        <video
          src={viewerVideo5}
          autoPlay
          loop
          playsInline
          muted
          className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50"
        ></video>
      </div>
    </div>
  );
};

export default Viewers;
