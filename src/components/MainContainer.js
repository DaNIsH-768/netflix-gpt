import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import {useSelector} from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import {useState} from "react";

const MainContainer = () => {
    let mainMovie = null;
    useNowPlayingMovies();
    const MOVIES = useSelector(store => store.movies.nowPlayingMovies);
    if (MOVIES) {
        mainMovie = MOVIES[0];
        console.log(mainMovie);
    }

    return (
        mainMovie &&
        <div className={"overflow-hidden"}>
            <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview}/>
            <VideoBackground movieId={mainMovie?.id}/>
        </div>
    )
};

export default MainContainer;