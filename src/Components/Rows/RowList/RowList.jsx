import Row from '../Row/Row'
import { useState } from "react";
import requests from '../../../utils/requests'
import TrailerPopup from "../TrailerPopup"; 

function RowList() {

  const [trailerUrl, setTrailerUrl] = useState("");

  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="TV Show"
        fetchUrl={requests.fetchTvShow}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Action Movie"
        fetchUrl={requests.fetchActionMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Animation Movies"
        fetchUrl={requests.fetchAnimationMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Comedy Movie"
        fetchUrl={requests.fetchComedyMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Horror Movie"
        fetchUrl={requests.fetchHorrorMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Romance Movie"
        fetchUrl={requests.fetchRomanceMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Documentary"
        fetchUrl={requests.fetchDocumentaryMovies}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Upcoming"
        fetchUrl={requests.fetchUpcoming}
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
      />

      {/* Render TrailerPopup only once here */}
      {trailerUrl && (
        <TrailerPopup
          trailerUrl={trailerUrl}
          onClose={() => setTrailerUrl("")}
        />
      )}
    </>
  );
}

export default RowList

