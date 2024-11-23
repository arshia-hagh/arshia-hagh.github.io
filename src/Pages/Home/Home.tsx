import MovieItem from "../../Components/movieItem/MovieItem";
import Container from "../../Components/container/Container";
import { getMovie } from "../../services/axios/requsets/Movie";
import { reqApi } from "../../services/axios/configs/Configs";
import { Link } from "react-router-dom";
import Paginate from "../../Components/paginate/Paginate";
import i18n from "../../i18n";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

function Home() {
  const [page, setPage] = useState<number>(1);
  const [totalPage] = useState<number>(500);
  const { data, isLoading, isError } = useQuery(["Movies"], () => {
    return getMovie(page, i18n.language, "popluarity.desc");
  });
  const abortController = new AbortController();
  useEffect(() => {
    reqApi({
      signal: abortController.signal,
    });
    // return () => {
    //   abortController.abort()
    // }
  }, []);
  if (isLoading) {
  }
  if (isError) {
  }
  const handleClick = (value: any) => {
    if (value === "&lsaquo;") {
      setPage((page) => (page !== 1 ? page - 1 : page));
    } else if (value === "&rsaquo;") {
      setPage((page) => page + 1);
    } else {
      setPage(value);
    }
  };
  return (
    <>
      <br />
      <Container>
        <h1 className="font-bold">LIST MOVIE</h1>
        <br />
        <br />

        <div className="grid   grid-cols-3">
          {data?.results.map((items) => (
            <Link key={items.id} to={`/Movie/${items.id}`}>
              <MovieItem {...items} />
            </Link>
          ))}
        </div>
        <Paginate
          page={page}
          totalPage={totalPage}
          siblings={page}
          handleclick={handleClick}
        />
      </Container>
    </>
  );
}

export default Home;
//https://api.themoviedb.org/3/discover/movie?sort_by=release_date.desc&api_key=a0814a81d9e0ea8e164320078c18b3cb&page=500%27
