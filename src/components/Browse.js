import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {useSelector} from "react-redux";

const Browse = () => {
    useNowPlayingMovies();
    const {nowPlayingMovies} = useSelector(store => store.movies);
    if (nowPlayingMovies) {
        const mainMovie = nowPlayingMovies[0];
        console.log(mainMovie);
    }

    return (
        <div>
            <h1>Browse Page</h1>
        </div>
    )
}

export default Browse;