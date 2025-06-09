import MovieItem from "./MovieItem";

const MovieList = ({movies, title}) => {
    return (movies &&
        (<div>
            <h2 className={"py-4 font-bold text-white text-xl tracking-wide"}>{title}</h2>
            <div className={"flex overflow-x-scroll scrollbar-hide"}>
                {movies.map((movie, index) => (
                    <MovieItem key={index} image={movie?.poster_path}/>
                ))}
            </div>
        </div>)
    )
}

export default MovieList;