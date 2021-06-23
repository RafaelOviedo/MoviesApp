import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions";
import { addMovieFavourite } from "../../actions";
import styles from "./Buscador.module.css";

export class Buscador extends Component {
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
        this.props.getMovies(this.state.title); //revisar
    }

    render() {
        const { title } = this.state;
        return (
            <div>
                <h2>Search a movie</h2>
                <form
                    className={styles.formContainer}
                    onSubmit={(e) => this.handleSubmit(e)}
                >
                    <div>
                        <label className={styles.formLabel} htmlFor="title">
                            Movie:
                        </label>
                        <input
                            type="text"
                            id="title"
                            autoComplete="off"
                            value={title}
                            onChange={(e) => this.handleChange(e)}
                        />
                    </div>
                    <button type="submit">Search</button>
                </form>
                <ul>
                    {this.props.movies &&
                        this.props.movies.map((movie) => (
                            <div key={movie.imdbID}>
                                <Link to={`/movie/${movie.imdbID}`}>
                                    {movie.Title}
                                </Link>
                                <button
                                    onClick={() =>
                                        this.props.addMovieFavourite({
                                            title: movie.Title,
                                            id: movie.imdbID,
                                        })
                                    }
                                >
                                    Favourite
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

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
