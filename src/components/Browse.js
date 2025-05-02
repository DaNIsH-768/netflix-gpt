import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
    useNowPlayingMovies();
    return (
        <div>
            <h1>Browse Page</h1>
        </div>
    )
}

export default Browse;