import {useDispatch} from "react-redux";
import {options} from "../utils/API_KEY";
import {setNowPlayingMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async () => {
        const rawData = await fetch("https://api.themoviedb.org/3/movie/now_playing", options);
        const json_data = await rawData.json();
        dispatch(setNowPlayingMovies(json_data.results));
        console.log(json_data.results);
    }

    useEffect( () => {
        fetchNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;