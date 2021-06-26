import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import styles from "./movieDetail.module.css";

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }

    render() {
        return (
            <div className={styles.movieDetailContainer}>
                <div className={styles.detailComponentTitle}>Movie Detail</div>
                <div className={styles.movieDetailCard}>
                    <h2 className={styles.movieTitle}>
                        Title: {this.props.movie.Title}
                    </h2>
                    <p className={styles.movieRelease}>
                        Release date: {this.props.movie.Released}
                    </p>
                    <p className={styles.movieGenre}>
                        Genre: {this.props.movie.Genre}
                    </p>
                    <div className={styles.plotBox}>
                        <p className={styles.moviePlot}>
                            Plot: {this.props.movie.Plot}
                        </p>
                    </div>
                    <p className={styles.movieRating}>
                        Rating: {this.props.movie.imdbRating}
                    </p>
                    <p className={styles.movieRuntime}>
                        Runtime: {this.props.movie.Runtime}
                    </p>
                    <p className={styles.movieLanguage}>
                        Laguage: {this.props.movie.Language}
                    </p>
                    <p className={styles.movieCountry}>
                        Country: {this.props.movie.Country}
                    </p>
                    <div className={styles.movieImage}>
                        <img src={this.props.movie.Poster} alt="Movie Poster" />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieDetail,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
