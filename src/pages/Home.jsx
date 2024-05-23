import React, {useState} from "react";
import styles from "../style/Home.module.scss"
import HomeContent from "../components/HomeContent";
import HomeTextLoop from  "../components/HomeTextLoop"
import Card from "../components/Card";



const Home = () => {
    return (
        <div className = { styles.layout }>
            <main className={ styles.main2 }>
                <article className={styles.main }>
                    <HomeContent/>
                    <Card/>
                </article>
            </main>
        </div>
    );
};

export default Home;