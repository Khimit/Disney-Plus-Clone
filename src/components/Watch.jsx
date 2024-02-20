import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import axios from "axios";

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [movieImg, setMovieImg] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieReleaseDate, setMovieReleaseDate] = useState("");
  const [movieRuntime, setMovieRuntime] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
        );
        setMovieData(response.data.videos.results);
        setMovieImg(response.data.poster_path);
        setMovieName(response.data.title);
        setMovieDescription(response.data.overview);
        setMovieReleaseDate(response.data.release_date);
        let hours = Math.trunc(response.data.runtime / 60);
        let minutes = response.data.runtime % 60;
        setMovieRuntime(`${hours} hr  ${minutes} min`);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, [id, API_KEY]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 z-20 text-white bg-gray-700 hover:bg-gray-900 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Go Back
      </button>
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full max-w-6xl p-4 mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieImg}`}
              alt="Movie Poster"
              className="max-h-[500px] w-auto shadow-lg rounded"
            />
          </div>
          <div className="md:w-2/3 md:pl-8 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {movieName}
            </h1>
            <p className="text-gray-400 mb-2">
              {movieReleaseDate.slice(0, 4)} · {movieRuntime}
            </p>
            <p className="text-gray-300 text-sm mb-4">{movieDescription}</p>
            <button
              onClick={handleWatchClick}
              className="self-start bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Watch Trailer
            </button>
          </div>
        </div>
      </div>

      {showTrailer && movieData.length > 0 && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="p-4">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movieData[0].key}`}
              controls={true}
              playing={true}
              loop={true}
              className="react-player"
              width="100%"
              height="100%"
            />
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );

  function handleWatchClick() {
    setShowTrailer(true);
  }
};

export default Watch;
