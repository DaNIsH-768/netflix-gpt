import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        featuredMovieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setFeaturedMovieTrailer: (state, action) => {
            state.featuredMovieTrailer = action.payload;
        },
        setTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        }

    }
})

export const {setNowPlayingMovies, setFeaturedMovieTrailer, setTopRatedMovies, setPopularMovies} = movieSlice.actions
export default movieSlice.reducer;