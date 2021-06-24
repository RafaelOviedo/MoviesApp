import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import styles from "./movieDetail.module.css";

class Movie extends React.Component {
    componentDidMount() {
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID);
    }

    render() {
        return (
            <div>
                <div className={styles.movieDetailContainer}>
                    <div>Detalle de la pelicula</div>
                    <h2>{this.props.movie.Title}</h2>
                    <img src={this.props.movie.Poster} alt="movie art" />
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
