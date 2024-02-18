import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import axios from "axios";

const Watch = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const [movieImgData, setMovieImgData] = useState("");
  const [movieImg, setMovieImg] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [movieRuntime, setMovieRuntime] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
      );
      setMovieData(response.data.videos.results);
      setMovieImgData(response.data.backdrop_path);
      setMovieImg(response.data.poster_path);
      setMovieName(response.data.title);
      setMovieDescription(response.data.overview);
      setMovieReleaseDate(response.data.release_date);

      display(response.data.runtime);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  const handleWatchClick = () => {
    setShowTrailer(true);
  };

  const handleCloseClick = () => {
    setShowTrailer(false);
  };

  function display(a) {
    console.log(typeof a);
    var hours = Math.trunc(a / 60);
    var minutes = a % 60;
    console.log(hours + ":" + minutes);
    setMovieRuntime(`${hours} hr  ${minutes} min`);
  }

    return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieImgData})`,
        }}
        className="bg-cover bg-top bg-no-repeat h-full w-full absolute"
      >
        <div className="h-full w-full bg-black bg-opacity-70"></div>
      </div>

      <div className="relative z-10 p-4">
        <div className="grid grid-cols-3">
          <div className="m-auto">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieImg}`}
              alt=""
              className="h-[460px] w-80 m-8"
            />
          </div>
          <div className="col-span-2 p-8">
            <h1 className="text-4xl mb-3 font-extrabold text-white tracking-widest">
              {`${movieName}`}
            </h1>
            <span className="text-white mr-6">
              {movieReleaseDate.slice(0, 4)}
            </span>
            <span className="text-white mr-6">{movieRuntime}</span>
            <span className="text-white mr-6">Not Rated</span>

            <h6 className=" text-white text-sm mt-3 tracking-widest">
              <span className="mr-6">{`IMDB : 4.7`}</span>
              <span>{`TMDB : 50%`}</span>
            </h6>
            <span className="flex items-center">
              <button
                className="hover:bg-transparent bg-white hover:text-white text-black h-14 w-48 p-1 m-1 mt-2 tracking-widest border hover:border-white border-transparent rounded"
                onClick={handleWatchClick}
              >
                <span>
                  <h1 className="text-xl font-semibold tracking-widest flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                    Watch Trailer
                  </h1>
                </span>
              </button>
              <span className="m-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-14 cursor-pointer text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-14 cursor-pointer text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </span>

            <h1 className="text-base text-white font-semibold tracking-widest">
              {`${movieDescription}`}
            </h1>
          </div>
        </div>

        {showTrailer && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movieData[0].key}`}
                controls={true}
                playing={true}
                loop={true}
                width="80vw"
                height="40vw"
              />
              <button
                onClick={handleCloseClick}
                className="absolute top-0 right-0 text-white text-2xl p-2"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;
