import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions";
import { addMovieFavourite } from "../../actions";
import styles from "./searchBar.module.css";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getMovies(this.state.title);
    }

    render() {
        const { title } = this.state;
        return (
            <div>
                <form
                    className={styles.formContainer}
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <h2 className={styles.searchBarText}>Search a movie</h2>

                    <input
                        className={styles.searchBarInput}
                        placeholder="Type your movie here..."
                        type="text"
                        value={title}
                        onChange={(e) => this.handleChange(e)}
                    />

                    <button type="submit" className={styles.searchBarButton}>
                        Search
                    </button>
                </form>

                <ul className={styles.movieCardsContainer}>
                    {this.props.movies &&
                        this.props.movies.map((movie) => (
                            <div
                                key={movie.imdbID}
                                className={styles.movieCard}
                            >
                                <p className={styles.movieTitle}>
                                    Name: {movie.Title}
                                </p>

                                <p className={styles.movieDate}>
                                    Release date: {movie.Year}
                                </p>
                                <Link
                                    to={`/movie/${movie.imdbID}`}
                                    className={styles.moreInfoLink}
                                >
                                    More info
                                </Link>

                                <button
                                    onClick={() =>
                                        this.props.addMovieFavourite({
                                            title: movie.Title,
                                            id: movie.imdbID,
                                        })
                                    }
                                    className={styles.movieButton}
                                >
                                    Add to Favourite
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
        movies: state.moviesLoaded,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addMovieFavourite: (movie) => dispatch(addMovieFavourite(movie)),
        getMovies: (title) => dispatch(getMovies(title)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
