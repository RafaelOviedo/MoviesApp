import {React, useState} from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import 'boxicons';

export default function NavBar() {
    const [toggleButton, setToggleButton] = useState(true);

    function handleToggle() {
        setToggleButton(false);
    };

    return (
        <nav className={styles.navBarContainer}>
            <Link to="/" className={styles.arrowButton}>
                &#10094; Back
            </Link>
            <div className={styles.navbarLogo}>MOVIE APP</div>
            <button className={toggleButton ? styles.menuIcon : styles.notVisible} onClick={() => handleToggle()}>
                <box-icon name='menu'></box-icon>
            </button>
            <ul className={toggleButton ? styles.notVisible : styles.navbarList}>
                <Link exact to="/home" className={styles.listItem}>
                    Home
                </Link>

                <Link to="/favs" className={styles.listItem}>
                    Favourites
                </Link>

                <Link to="/about" className={styles.listItem}>
                    About
                </Link>
            </ul>
        </nav>
    );
}
