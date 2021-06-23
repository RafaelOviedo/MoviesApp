import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
    render() {
        return (
            <div>
                <h2>Películas Favoritas</h2>
                <ul>
                    {this.props.movies &&
                        this.props.movies.map((movie) => (
                            <div key={movie.imdbID}>
                                <Link to={`/movie/${movie.imdbID}`}>
                                    {movie.title},{movie.Poster}
                                </Link>
                                <button
                                    onClick={() =>
                                        this.props.removeMovie(movie.id)
                                    }
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state.moviesFavourites,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeMovie: (movie) => dispatch(removeMovieFavorite(movie)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
