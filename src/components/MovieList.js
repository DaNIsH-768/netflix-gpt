import MovieItem from "./MovieItem";

const MovieList = ({movies, title}) => {
    return (movies &&
        (<div className={"-mt-64 relative z-20 m-2"}>
            <h3 className={"py-4 font-semibold text-white text-xl"}>{title}</h3>
            <div className={"flex overflow-x-scroll"}>
                {movies.map((movie, index) => (
                    <MovieItem key={index} image={movie?.poster_path}/>
                ))}
            </div>
        </div>)
    )
}

export default MovieList;