import React from "react";
import styles from "./HomeContainer.module.scss"

const HomeContainer = () => {
    return (
        <article className={styles.main}>
            <div className={styles.title}>
                <div className={styles.title_inner}>
                    <strong className={styles.title_inner_text}>군더더기 없는 인터페이스를 좋아하는</strong>
                    <div className={styles.title_inner_logo}></div>
                    <p className={styles.title_inner_info}>
                        <span>탄탄한 코드 위에 감각적인 인터페이스를 그리는 김의현입니다.</span>
                        <span>직관적인 UI와 기억에 남는 UX를 개발하려고 노력합니다.</span>
                        <span>도메인 지식을 바탕으로 개발의 범위를 늘려나가고 있습니다.</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default HomeContainer;