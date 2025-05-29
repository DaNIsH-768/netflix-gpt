import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        featuredMovieTrailer: null,
    },
    reducers: {
        setNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        setFeaturedMovieTrailer: (state, action) => {
            state.featuredMovieTrailer = action.payload;
        }

    }
})

export const {setNowPlayingMovies, setFeaturedMovieTrailer} = movieSlice.actions
export default movieSlice.reducer;