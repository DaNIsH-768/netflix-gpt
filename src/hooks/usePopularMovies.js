import {useDispatch} from "react-redux";
import {options} from "../utils/API_KEY";
import {setPopularMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const fetchPopularMovies = async () => {
        const rawData = await fetch("https://api.themoviedb.org/3/movie/popular", options);
        const json_data = await rawData.json();
        dispatch(setPopularMovies(json_data.results));
    }

    useEffect( () => {
        fetchPopularMovies();
    }, [])
}

export default usePopularMovies;