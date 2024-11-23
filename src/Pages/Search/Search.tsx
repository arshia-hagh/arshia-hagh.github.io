import { useEffect, useState } from "react";
import Container from "../../Components/container/Container";
import { Link, useLocation } from "react-router-dom";
import { getMovies } from "../../server/types";
import { getSearchMovie } from "../../services/axios/requsets/SearchMovie";
import MovieItem from "../../Components/movieItem/MovieItem";

function Search() {
  const [result, setResult] = useState<getMovies>();
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  useEffect(() => {
    getSearchMovie(query as string).then((res) => {
      setResult(res);
    });
  }, [result]);
  return (
    <>
      <br />
      <Container>
        <h1 className="font-bold">List Movies</h1>
        <br />
        <div className="grid   grid-cols-3">
          {result?.results.map((items) => (
            <Link key={items.id} to={`/Movie/${items.id}`}>
              <MovieItem {...items} />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Search;
