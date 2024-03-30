import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Videos.css";
import NoImg from "./no-image-icon.png";
import TrailerMovies from "../trailers/TrailerMovies";

function Movies({ toggle, inputValue }) {
  const [moviesData, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const Shown = inputValue ? "search" : "discover";
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`;
  const Images = "https://image.tmdb.org/t/p/w500";
  const [moviesTitle, setMovieTitle] = useState("");

  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: "05e139b62d5b223f6455587d55b66bb0",
        query: inputValue,
      },
    });
    const results = data.data.results;
    setMoviesData(results);
  };

  useEffect(() => {
    setTimeout(() => {
      MovieCall();
    }, 100);
  }, [inputValue]);

  const MovieTitle = (movie) => {
    setMovieTitle(movie.title);
    setTrailer((prev) => !prev);
  };

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {moviesData.map((movie) => {
            return (
              <Fragment key={movie.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => MovieTitle(movie)}
                  />
                  <img
                    src={
                      movie.poster_path
                        ? `${Images}${movie.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => MovieTitle(movie)}
                  />
                  <h3
                    id={movie.title.length > 28 ? "smaller-Text" : ""}
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {movie.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerMovies moviesTitle={moviesTitle} toggle={toggle} />
          )}
          <AiOutlineClose
            id={trailer ? "Nothing" : "Exit1"}
            className={toggle ? "DarkTheme" : "LightThemeClose"}
            fontSize={55}
            color="#fff"
            cursor="pointer"
            onClick={() => setTrailer(true)}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Movies;
