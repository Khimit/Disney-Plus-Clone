import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Carousel.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import.meta.env.VITE_API_KEY;

const ChildCarousel = ({page}) => {
  const [movieData, setMovieData] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  const IMG_BASE_URL = import.meta.env.VITE_IMG_BASE_URL;
  const MOVIE_BASE_URL = import.meta.env.VITE_MOVIE_BASE_URL;

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `${MOVIE_BASE_URL}api_key=${API_KEY}&page=${page}`
      );
      setMovieData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="m-4">
      <Slider {...settings}>
        {movieData.map((data, key) => {
          return (
            <div key={key} className="h-72 p-2">
              <img
                className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800 h-full"
                src={`${IMG_BASE_URL}${data.poster_path}`}
                alt="Slider Image 1"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ChildCarousel;