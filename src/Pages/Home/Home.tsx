import React, { useEffect, useState } from "react";
import MovieItem from "../../Components/movieItem/MovieItem";
import Container from "../../Components/container/Container";
import { getMovie } from "../../services/axios/requsets/Movie";
import { reqApi } from "../../services/axios/configs/Configs";
import { getMovies } from "../../server/types";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState<getMovies>();
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
  
  return (
    <>
      <br />
      <Container>
      <h1 className="font-bold">List Movies</h1>
      <br />
        <div className="grid grid-cols-3">
          {movies?.results.map(items => (
            <Link to={`/Movie/${items.id}`}>
            <MovieItem key={items.id} {...items}/>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
