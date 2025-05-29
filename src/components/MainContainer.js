import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    useNowPlayingMovies();
    const movies = useSelector(store => store.movies.nowPlayingMovies);

    if (!movies) return null;
    const mainMovie = movies[0];

    return (
        <div className={"overflow-hidden"}>
            <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview}/>
            {/*<VideoTitle/>*/}
            <VideoBackground movieId={mainMovie?.id}/>
            {/*<VideoBackground/>*/}
        </div>
    )
};

export default MainContainer;