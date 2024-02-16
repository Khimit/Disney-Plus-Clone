import sliderImg1 from "../images/slider-badag.jpg";
import sliderImg2 from "../images/slider-scales.jpg";
import sliderImg3 from "../images/slider-scale.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img
            className="cursor-pointer border border-sky-500 rounded-lg hover:border-2 hover:border-white "
            src={sliderImg1}
            alt="Slider Image 1"
          />
        </div>
        <div>
          <img
            className="cursor-pointer border border-sky-500 rounded-lg hover:border-2 hover:border-white hover:ease-out"
            src={sliderImg2}
            alt="Slider Image 2"
          />
        </div>
        <div>
          <img
            className="cursor-pointer border border-sky-500 rounded-lg hover:border-2 hover:border-white"
            src={sliderImg3}
            alt="Slider Image 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
