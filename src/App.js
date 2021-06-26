import React from "react";
import HomePage from "./components/homePage/homePage";
import Favourites from "./components/Favourites/favourites";
import NavBar from "./components/NavBar/navBar";
import { Route } from "react-router-dom";
import Movie from "./components/MovieDetail/movieDetail";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/About/about";

function App() {
    return (
        <React.Fragment>
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={HomePage} />
            <Route path="/favs" component={Favourites} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/about" component={About} />
        </React.Fragment>
    );
}

export default App;
