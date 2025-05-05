import React from 'react'

import Row from '../Row/Row'
import requests from '../../../utils/requests'

function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TV Show" fetchUrl={requests.fetchTvShow} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary" fetchUrl={requests.fetchDocumentaryMovies} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
    </>
  );
}

export default RowList

