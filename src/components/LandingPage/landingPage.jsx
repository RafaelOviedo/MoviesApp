import React from "react";
import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";

function LandingPage() {
    return (
        <div className={styles.landingPageComponent}>
            <div className={styles.welcomeTextBox}>
                <p className={styles.welcomeText}>
                    Welcome to Movie App, find anything about your favourites
                    movies here
                </p>
            </div>
            <div className={styles.textAndButtonBox}>
                <p className={styles.mainText}>
                    To the main page, press the button
                </p>

                <button className={styles.landingButton}>
                    <Link to="/home">Go to main page</Link>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
