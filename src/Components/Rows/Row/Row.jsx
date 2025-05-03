import React, { useEffect,useState } from 'react'
import './Row.css';
import axios from "../../../utils/axios";

    
    function Row({ title, fetchUrl, isLargeRow }) {
      const [movies, setMovie] = useState([]);
      const [trailerUrl, setTrailerUrl] = useState("")

      //base_url to get the poster of the movies(you can get this from the documentation)....base_url + poster path(smaller image than the movie banner)
      const base_url = "https://image.tmdb.org/t/p/original";

      useEffect(() => {
        (async () => {
          try {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results);
          } catch (error) {
            console.log("error", error);
          }
        })();
      }, [])


       const handelClick = (movie) => {
         if (trailerUrl) {
           setTrailerUrl("");
         } else {
           movieTrailer(
             movie?.title || movie?.original_name || movie?.name
           ).then((url) => {
             const urlParams = new URLSearchParams(new URL(url).search);
             console.log(url);
             console.log(urlParams);
             setTrailerUrl(urlParams.get("v"));
           });
         }
       };

      const opts = {
        height: "390",
        width: "100%",
        playerVars: { autoplay: 1 },
      };
      
      return (
        <div className="row">
          <h1 className=" text-lg font-serif">{title}</h1>

          <div className="row__posters">
            {movies?.map((movie, i) => {
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
          <div style={{ padding: "40px" }}>
            {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
          </div>
        </div>
      );
    }


    

export default Row