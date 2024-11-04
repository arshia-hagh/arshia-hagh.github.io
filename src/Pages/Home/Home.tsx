import React, { useEffect, useState } from "react";
import MovieItem from "../../Components/movieItem/MovieItem";
import Container from "../../Components/container/Container";
import { getMovie } from "../../services/axios/requsets/Movie";
import { reqApi } from "../../services/axios/configs/Configs";

function Home() {
  const [movies, setMovies] = useState();
  const abortController = new AbortController()
  useEffect(() => {
    reqApi({
      signal: abortController.signal
    })
    getMovie().then(res => {
      setMovies(res)
    }).catch(err => console.log('Error', err.message))
    return () => {
      abortController.abort()
    }
  },[setMovies])
  console.log(movies)
  return (
    <div>
      <h1>Movies</h1>
      <br />

      <Container>
        <div className="grid grid-cols-3">
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </div>
      </Container>
    </div>
  );
}

export default Home;
