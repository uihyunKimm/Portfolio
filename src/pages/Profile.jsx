import React, {useState} from "react";
import styles from "../style/Profile.module.scss"



const Profile = () => {
    return (
        <section className = { styles.layout }>
            <img src="" alt="" title="" className={ styles.main2 } />
            <div>
                <article className={styles.main }>
                <p className={ styles.profile }>안녕하세요! 웹 퍼블리셔 김의현입니다.
                    <span className={ styles.aka }>
                        a.k.a, KUH
                    </span>
                    &nbsp;<br/>
                    좋아하면 더 잘한다는 마음으로 UI 개발 일을 하고 있습니다.</p>
                </article>
            </div>
        </section>
    );
};

export default Profile;