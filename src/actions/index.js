export function getMovies(titulo) {
    return function (dispatch) {
        return fetch(
            `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=` +
                titulo
        )
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: "GET_MOVIES", payload: json });
            });
    };
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch(
            `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=` +
                id
        )
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
            });
    };
}

export function addMovieFavourite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function removeMovieFavorite(payload) {
    return {
        type: "REMOVE_MOVIE",
        payload,
    };
}
