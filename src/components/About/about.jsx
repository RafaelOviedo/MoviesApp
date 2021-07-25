import React, { Component } from "react";
import styles from "./about.module.css";

export class About extends Component {
    render() {
        return (
            <div className={styles.aboutComponent}>
                <h2 className={styles.aboutTitle}>About this page</h2>

                <div className={styles.textBox}>
                    <p className={styles.aboutText}>
                        This app was created in the HENRY bootcamp. The main
                        purpose was to achieve the understanding of the workflow
                        with React-Redux.
                        <br />
                        <br />
                        In this App you can:
                        <br />
                        <br />
                        -Search movies and list them.
                        <br />
                        -Being able to see all the details of a particular
                        movie.
                        <br />
                        -Being able to add the movies to your favorites list.
                        <br />
                        -Being able to remove movies from your favorites list.
                        <br />
                        <br />
                        We retrieved the data about the movies from OMDB's API,
                        with a provided api key.
                    </p>

                    <h3 className={styles.socialMediaText}>My Social Media</h3>

                    <a
                        href="https://github.com/RafaelOviedo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.githubIcon}
                            src="https://pngimg.com/uploads/github/github_PNG58.png"
                            alt="github icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rafael-oviedo/?locale=en_US"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            className={styles.linkedinIcon}
                            src="https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668696_960_720.png"
                            alt="linkedin icon"
                        />
                    </a>
                </div>
            </div>
        );
    }
}

export default About;
