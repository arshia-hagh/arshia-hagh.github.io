import { Result } from "../../server/types";
type Movie = Result;
function MovieItem({
  poster_path,
  overview,
  title,
  release_date,
  vote_average,
}: Movie) {
  return (
    <div className=" relative  mb-10">
           <span className="bg-secondery--color z-10 font-bold p-1 top-[-4%] left-[-4%] rounded-sm absolute text-black">
          {release_date}
        </span>
      <div className="bg-primery--color group relative  rounded-sm h-fit overflow-y-hidden  border-2 border-[#211f1d] w-[80%]">
      <img
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          alt={title}
        />
      <div className="flex px-1 py-1 relative overflow-hidden   items-center justify-between">
        <h1 className=" w-[70%]  font-semibold">{title}</h1>
        <span
          className={`bg-secondery--color  rounded-sm transition-all font-bold block max-w-[20%] px-2 min-w-fit h-[20%] text-center ${color_voteaverage(
            vote_average
          )}`}
        >
          {vote_average.toFixed(1)}
        </span>

      </div>
      <div
          className="bg-[#fff] transition-all duration-[0.4s] translate-y-[10%] h-[50%]  group-hover:translate-y-[-100%]  lg:block sm:hidden md:hidden overflow-y-auto     w-full invisible group-hover:visible group-hover:top z-10  
       rounded-sm p-4 absolute text-[#000]"
        >
          <h1 className="text-2xl font-bold">Overview</h1>
          <br />
          <p className="font-semibold">{overview}</p>
        </div>
      </div>
   

    </div>
  );
}
function color_voteaverage(vote: number) {
  if (vote >= 8 && vote <= 10) {
    return "text-[#38d92a]";
  } else if (vote >= 5 && vote <= 8) {
    return "text-[#feeb04]";
  } else {
    return "text-[#f40000]";
  }
}
export default MovieItem;
