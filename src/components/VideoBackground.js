import {options} from "../utils/API_KEY";
import {useEffect} from "react";

const VideoBackground = ({movieId}) => {
    const fetchMovieTrailer = async () => {
        const videosData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const videos = (await videosData.json()).results;
        const trailer = videos.find(video => video.type === "Trailer");

        console.log(trailer);
    }

    useEffect(() => {
        fetchMovieTrailer();
    })

    return (
        <div>
            <iframe
                className={"w-screen aspect-video pointer-events-none"}
                src="https://www.youtube.com/embed/VWqJifMMgZE?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=1&loop=1&playlist=VWqJifMMgZE"
                title={""}
                    allow="autoplay"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoBackground;