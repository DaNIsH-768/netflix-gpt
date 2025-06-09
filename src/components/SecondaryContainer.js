import {useSelector} from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    console.log(movies);
    return (
        <div className={"bg-black"}>
            <MovieList movies={movies} title={"Now Playing Movies"} />
        </div>
    )
}
export default SecondaryContainer;