import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/Videos.css";
import NoImg from "./no-image-icon.png";
import TrailerTrending from "../trailers/TrailerTrending";

function Trends({ toggle }) {
  const [trendArray, setTrendArray] = useState([]);
  const [trailer, setTrailer] = useState(true);
  const [trendTitle, setTrendTitle] = useState("");
  const Api = "https://api.themoviedb.org/3";
  const TrendsShown = `/trending/all/week`;
  const Images = "https://image.tmdb.org/t/p/w500";
  const Trends = async () => {
    const data = await axios.get(`${Api}${TrendsShown}`, {
      params: {
        api_key: "05e139b62d5b223f6455587d55b66bb0",
      },
    });
    const results = data.data.results;
    setTrendArray(results);
  };

  useEffect(() => {
    setTimeout(() => {
      Trends();
    }, 100);
  }, []);

  const TrendTitle = (trend) => {
    setTrendTitle(trend.title);
    setTrailer((prev) => !prev);
  };

  // console.log(trendArray);

  return (
    <Fragment>
      <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
        <div className="movies-container">
          {trendArray.map((trend) => {
            return (
              <Fragment key={trend.id}>
                <div id={trailer ? "container" : "NoContainer"}>
                  <AiFillPlayCircle
                    color="#fff"
                    fontSize={40}
                    id={trailer ? "playIcon" : "hide"}
                    onClick={() => TrendTitle(trend)}
                  />
                  <img
                    src={
                      trend.poster_path
                        ? `${Images}${trend.poster_path}`
                        : NoImg
                    }
                    alt=""
                    onClick={() => TrendTitle(trend)}
                  />
                  <h3
                    id="smaller-Text"
                    className={toggle ? "mainColor" : "secondaryColor"}
                  >
                    {trend.title}
                  </h3>
                </div>
              </Fragment>
            );
          })}
          {trailer ? (
            console.log
          ) : (
            <TrailerTrending trendTitle={trendTitle} toggle={toggle} />
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

export default Trends;
