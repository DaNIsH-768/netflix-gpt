import {useDispatch} from "react-redux";
import {options} from "../utils/API_KEY";
import {setTopRatedMovies} from "../utils/movieSlice";
import {useEffect} from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const fetchTopRatedMovies = async () => {
        const rawData = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options);
        const json_data = await rawData.json();
        dispatch(setTopRatedMovies(json_data.results));
    }

    useEffect( () => {
        fetchTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;