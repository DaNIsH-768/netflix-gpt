import useMainMovieTrailer from "../hooks/useMainMovieTrailer";
import {useSelector} from "react-redux";

const VideoBackground = ({movieId}) => {
    useMainMovieTrailer(movieId);
    console.log(movieId);
    const trailer = useSelector(store => store.movies.featuredMovieTrailer);
    const key = trailer?.key;

    if (!trailer) return null;

    return (
        <div className={"w-screen aspect-video pointer-events-none"}>
            <iframe
                className={"w-[300%] h-[100%] ml-[-100%]"}
                src={`https://www.youtube.com/embed/${key}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=${key}`}
                title={""}
                    allow="autoplay"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground;