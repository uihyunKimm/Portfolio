import React, {useState} from "react";
import styles from "./HomeContainer.module.scss"
import HomeContent from "../components/HomeContent";
import Card from "../components/Card";




const HomeContainer = () => {
    return (
        <article className={styles.main}>
            <HomeContent/>
            <Card/>
        </article>
    );
};

export default HomeContainer;