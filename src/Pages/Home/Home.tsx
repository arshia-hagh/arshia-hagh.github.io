import React, { useEffect, useState } from "react";
import MovieItem from "../../Components/movieItem/MovieItem";
import Container from "../../Components/container/Container";
import { getMovie } from "../../services/axios/requsets/Movie";
import { reqApi } from "../../services/axios/configs/Configs";
import { getMovies } from "../../server/types";
import { Link } from "react-router-dom";
import Paginate from "../../Components/paginate/Paginate";

function Home() {
  const [movies, setMovies] = useState<getMovies>();
  const [page,setPage] = useState<number>(1)
  const [limit,setLimit] = useState<number>(5)
  const totalPage = 500
  // console.log(movies?.page)
  const abortController = new AbortController()
  useEffect(() => {
    reqApi({
      signal: abortController.signal
    })
    getMovie(page).then(res => {
      setMovies(res)
    }).catch(err => console.log('Error', err.message))
    // return () => {
    //   abortController.abort()
    // }
  },[movies])
  const handleClick = (value : any) => {
    if(value === '&lsaquo;'){
      setPage((page) => page  !== 1 ? page - 1 : page)
    }
    else if(value === '&rsaquo;'){
      setPage((page) => page  + 1)
    }
    else{
      setPage(value)
    }
  }
  return (
    <>
      <br />
      <Container>
      <h1 className="font-bold">List Movies</h1>
      <br />
        <div className="grid   grid-cols-3">
          {movies?.results.map(items => (
           <Link  key={items.id} to={`/Movie/${items.id}`}>
            <MovieItem  {...items}/>
           </Link>
            
          ))}
        </div>
        <Paginate page={page} totalPage={totalPage} siblings={page} handleclick={handleClick} />
      </Container>
    </>
  );
}

export default Home;
