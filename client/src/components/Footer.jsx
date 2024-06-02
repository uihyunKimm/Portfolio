import React from "react";
import styles from "./../style/Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer__body} >
          <div className={styles.container}>
            <div className={styles.footer__inner}>
              <div className={styles.footer__text}>
                <span>webstoryboy</span>
                <span>© webs</span>
              </div>
              <div className={styles.footer__info}>
                <div className={styles.left}>
                  <div className={styles.title}>
                      <span>sign up</span>
                  </div>
                  <p className={styles.desc}>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div className={styles.right}>
                  <h3>social</h3>
                  <ul className={styles.footer_right}>
                    <li>
                      <span>github</span>
                      <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
                    </li>
                    <li>
                      <span>tistory</span>
                      <em>티스토리에 들어오시면 좋은 정보 볼 수 있습니다.</em>
                    </li>
                    <li>
                      <span>gsap</span>
                      <em>GSAP를 공부하시고 오면 도움이 됩니다.</em>
                    </li>
                    <li>
                      <span>vite</span>
                      <em>비트 강의도 곧 오픈 예정입니다.</em>
                    </li>
                    <li>
                      <span>react</span>
                      <em>리액트 강의도 곧 오픈 예정입니다.</em>
                    </li>
                    <li>
                      <span>vue</span>
                      <em>뷰 강의도 곧 오픈 예정입니다.</em>
                    </li>
                    <li>
                      <span>next</span>
                      <em>넥스트 강의도 곧 오픈 예정입니다.</em>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.footer__right}>
                  © 2023 webstoryboy<br />
                  이 사이트는 비트를 이용하여 제작하였습니다.
              </div>
            </div>
          </div>
        </footer>
    );
};
/* 
export default Footer;

const Footer = () => {
    return (
      <div className="footer-wrap">
        <div className="footer-container">
          <div className='footer-left'>
            <h1>HOT BODY</h1>
  
            <div className="footer-mid">
              <ul className="footer-menu-lists">
                <li>About</li>
                <li>Community</li>
                <li>PT</li>
                <li>Group</li>
                <li>Subscribe</li>
                <li>Profile</li>
              </ul>
              <p>&copy; 2024 All right reserved by hot body</p>
            </div>
          </div>
  
          <ul className='footer-right'>
            <li>
              <img src={TelIcon} alt="tel" />
              TEL : +82 ) 010-XXXX-XXXX
            </li>
            <li>
              <img src={MailIcon} alt="mail" />
              E-Mail : hotbody@gmail.com
            </li>
          </ul>
        </div>
      </div>
    );
  };
   */
  export default Footer;
  