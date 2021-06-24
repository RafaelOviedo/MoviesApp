import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./favourites.module.css";
import { removeMovieFavorite } from "../../actions";

export class Favourites extends Component {
    render() {
        return (
            <div>
                <h2 className={styles.favouriteTitle}>Favourite Movies</h2>

                <ul className={styles.favouriteList}>
                    {this.props.moviesFavourites &&
                        this.props.moviesFavourites.map((movie) => (
                            <div
                                key={movie.imdbID}
                                className={styles.favouriteCard}
                            >
                                <div className={styles.movieTitle}>
                                    {movie.title}
                                </div>

                                <Link
                                    to={`/movie/${movie.imdbID}`}
                                    className={styles.moreInfoLink}
                                >
                                    More Info
                                </Link>

                                <button
                                    onClick={() =>
                                        this.props.removeMovie(movie.id)
                                    }
                                    className={styles.movieButton}
                                >
                                    Remove
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
        moviesFavourites: state.moviesFavourites,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeMovie: (movie) => dispatch(removeMovieFavorite(movie)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
