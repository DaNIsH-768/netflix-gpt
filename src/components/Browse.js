import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
    useNowPlayingMovies(); useTopRatedMovies(); usePopularMovies();
    return (
        <div>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;