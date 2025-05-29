import {useDispatch} from "react-redux";
import {options} from "../utils/API_KEY";
import {setFeaturedMovieTrailer} from "../utils/movieSlice";
import {useEffect} from "react";

const useMainMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieId) return; // Don't run if movie is undefined

        const fetchMovieTrailer = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,options
                );

                if (!response.ok) {
                    console.error("Failed to fetch trailer:", response.statusText);
                    return;
                }

                const data = await response.json();

                const trailer = data.results?.find(
                    (video) => video.type === "Trailer"
                );

                if (trailer) {
                    dispatch(setFeaturedMovieTrailer(trailer));
                } else {
                    console.warn("No YouTube trailer found for this movie.");
                }
            } catch (error) {
                console.error("Error fetching movie trailer:", error);
            }
        };

        fetchMovieTrailer();
    }, []);
};

export default useMainMovieTrailer;