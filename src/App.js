import React from "react";
import Favorites from "./components/Favorites/Favorites";
import Search from "./components/Search/search";
import NavBar from "./components/NavBar/navBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Route exact path="/" component={Search} />
            <Route path="/favs" component={Favorites} />
            <Route path="/movie/:id" component={Movie} />
        </React.Fragment>
    );
}

export default App;
