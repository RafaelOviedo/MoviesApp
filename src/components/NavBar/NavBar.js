import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";

export default function NavBar() {
    return (
        <nav className={styles.navBarContainer}>
            <div className={styles.navbarLogo}>MOVIE APP</div>
            <ul className={styles.navbarList}>
                <Link exact to="/" className={styles.listItem}>
                    Home
                </Link>

                <Link to="/favs" className={styles.listItem}>
                    Favoritas
                </Link>

                <Link to="/about" className={styles.listItem}>
                    About
                </Link>
            </ul>
        </nav>
    );
}
