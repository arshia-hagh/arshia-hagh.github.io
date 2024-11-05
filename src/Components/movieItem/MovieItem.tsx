import React from "react";
import Container from "../container/Container";
import { Result } from "../../server/types";
type Movie = Result;
function MovieItem({ poster_path, title, vote_average }: Movie) {
  return (
    <div className=" bg-primery--color  border-2 border-[#211f1d] w-[50%]">
      <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`}  alt={title} />

      <div className="flex justify-between">
        <h1 >{title}</h1>
        <span>{vote_average}</span>
      </div>
    </div>
  );
}

export default MovieItem;
