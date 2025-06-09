import MovieItem from "./MovieItem";

const MovieList = ({movies, title}) => {
    return (movies &&
        (<div>
            <h2 className={"py-4 font-bold text-white text-xl tracking-wide"}>{title}</h2>
            <div>
                <div className={"flex overflow-x-scroll overflow-y-hidden scrollbar-hide"}>
                    {movies.map((movie, index) => (
                        <MovieItem key={index} image={movie?.poster_path}/>
                    ))}
                </div>
            </div>
        </div>)
    )
}

export default MovieList;