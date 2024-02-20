import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

const Watch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([]);
  const [movieImg, setMovieImg] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieImgData, setMovieImgData] = useState("");
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
        setMovieImgData(response.data.backdrop_path);
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

  const handleWatchClick = () => {
    setShowTrailer(true);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieImgData})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 z-30 text-white bg-gray-700 hover:bg-gray-900 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out"
      >
        Go Back
      </button>
      <div className="relative z-20 p-4 flex flex-col md:flex-row items-center justify-center min-h-screen">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieImg}`}
          alt="Movie Poster"
          className="max-h-[500px] w-auto rounded shadow-lg z-20"
        />
        <div className="text-white p-4 max-w-xl z-20">
          <h1 className="text-3xl font-bold mb-2">{movieName}</h1>
          <p className="mb-2">
            {movieReleaseDate.slice(0, 4)} · {movieRuntime}
          </p>
          <p className="mb-4">{movieDescription}</p>
          {movieData.length > 0 && (
            <button
              onClick={handleWatchClick}
              className="bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded"
            >
              Watch Trailer
            </button>
          )}
        </div>
      </div>
      {showTrailer && movieData.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-40 flex justify-center items-center">
          <div
            className="player-wrapper"
            
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movieData[0].key}`}
              controls={true}
              playing={true}
              width="80vw"
              height="80vh"
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
};

export default Watch;
