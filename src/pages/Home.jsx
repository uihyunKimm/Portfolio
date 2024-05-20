import React, {useState} from "react";
import styles from "../style/Home.module.scss"
import HomeContent from "../components/HomeContent";
import Card from "../components/Card";



const HomeContainer = () => {
    return (
        <div className = { styles.layout }>
            <div className = { styles.main }>
                <main className={ styles.main2 }>
                    <article className={styles.main}>
                        <HomeContent/>
                        <Card/>
                    </article>
                </main>
            </div>
        </div>
    );
};

export default HomeContainer;