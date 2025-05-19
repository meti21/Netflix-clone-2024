import  { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";


function Row({ title, fetchUrl, isLargeRow, trailerUrl, setTrailerUrl}) {

  const [movies, setMovie] = useState([]);

  //base_url to get the poster of the movies(you can get this from the documentation)....base_url + poster path(smaller image than the movie banner)
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
      } catch (error) {
        // console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handelClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //this will response a youtube url(This tries to find a YouTube trailer URL by searching the movie title.)
      movieTrailer(movie?.title || movie?.original_name || movie?.name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          //  console.log(urlParams)
          //  console.log(urlParams.get('v'))
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  return (
    <>
      <div className={`row ${trailerUrl ? "content--blurred" : ""}`}>
        <h1 className=" text-lg font-serif">{title}</h1>

        <div className="row__posters">
          {movies?.map((movie, i) => {
            //() here after img is used just for readability not return
            let img = (
              <img
                onClick={() => handelClick(movie)}
                key={i}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              />
            );
            return img;
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
