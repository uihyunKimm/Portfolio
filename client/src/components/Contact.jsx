import React from "react";
import styles from "./../style/Contact.module.scss"

const Contact = () => {
    return (
      <section className={styles.contact_body}>
    <div className={styles.contact__inner}>
        <h2 className={styles.contact__title}>Contact</h2>
        <div className={styles.contact__lines_top} aria-hidden="true">
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
        <div className={styles.contact__text}>
            <div className={styles.text}>
                <div>
                    <a href="https://open.kakao.com/o/gM7YLzwf" target="_blank">KAKAO : Webstroyboy</a>
                </div>
                <div>
                    <a href="mailto:webstoryboy@naver.com" target="_blank">mail : WEBSTORYBOY@NAVER.COM</a>
                </div>
            </div>
        </div>
        <div className={styles.contact__lines_bottom} aria-hidden="true">
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </div>
    </div>
</section>
    );
};

  export default Contact;
  