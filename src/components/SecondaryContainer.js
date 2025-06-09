import {useSelector} from "react-redux";
import MovieList from "./MovieList";
import {setNowPlayingMovies} from "../utils/movieSlice";

const SecondaryContainer = () => {
    const nowPlayingmovies = useSelector(store => store.movies.nowPlayingMovies);
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
    const popularMovies = useSelector(store => store.movies.popularMovies);

    return (
        <div className={"bg-black"}>
            <div className={"-mt-64 relative z-20 ml-16"}>
                <MovieList movies={nowPlayingmovies} title={"Now Playing Movies"} />
                <MovieList movies={topRatedMovies} title={"Top Rated"} />
                <MovieList movies={popularMovies} title={"Popular Movies"} />
            </div>
        </div>
    )
}
export default SecondaryContainer;