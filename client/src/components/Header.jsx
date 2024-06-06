import React from "react";
import styles from "./../style/Header.module.scss"
import { Link} from "react-router-dom";


const Header = () => {
    return (
        <header className={styles.Header_}>
          <div className={styles.container}>
            <div className={styles.contents}>
                <Link to="/">로고</Link>
                <p>dmlxld@gmail.com</p>
                <p><span className={styles.navigation}>2024 <strong>Portfolio</strong></span></p>
            </div>
            <div className={styles.contents_low}>
                <span className={styles.contents_low_low}>화면기획/ 웹디자인 출신 개발자</span>
            </div>
            <nav className={styles.header__nav} role="navigation" aria-label="메인 메뉴">
              <ul>
                <li><Link to="#intro">intro</Link></li>
                <li><Link to="#skill">skill</Link></li>
                <li><Link to="#site">site</Link></li>
                <li><Link to="#port">portfolio</Link></li>
                <li><Link to="#contact">contact</Link></li>
              </ul>
            </nav>
            <div 
              className={styles.header__nav__mobile} 
              id="headerToggle" 
              aria-controls="primary-menu" 
              aria-expanded="false" 
              role="button" 
              tabindex="0"
              >
              <span></span>
            </div>
          </div>
        </header>
    );
};

export default Header;


/* const navLinks = [
    {
      link: "/",
      menuName: "홈",
    },
    {
      link: "/community",
      menuName: "커뮤니티",
    },
    {
      link: "/pt",
      menuName: "PT",
    },
    {
      link: "/group",
      menuName: "모임",
    },
    {
      link: "/sub",
      menuName: "구독",
    },
  ];
  
  const Navbar = () => {
    const navigate = useNavigate();
    const { setUser, isAuthenticated, setIsAuthenticated } = useUserContext();

    const handleLogout = () => {
      setUser({});
      setIsAuthenticated(false);
      localStorage.removeItem("accessToken");
      window.location.reload();
    };
  
    toast.info('로그아웃 되었습니다.');
  
    return (
      <nav className="navContainer">
        <img
          src={Logo}
          alt="logo"
          className="nav-logo"
          onClick={() =>  navigate("/") }
        />
  
        <div className="linkWrap">
          {navLinks.map((nav) => (
            <span
              key={nav.menuName}
              to={`${nav.link}`}
              className={({ isActive }) =>
                isActive ? "navActive navlink" : "navlink"
              }
            >
              {nav.menuName}
            </span>
          ))}
          {isAuthenticated && (
            <NavLink
              key={"마이페이지"}
              to={"/profile/account"}
              className={({ isActive }) =>
                isActive ? "navActive navlink" : "navlink"
              }
            >
              마이페이지
            </NavLink>
          )}
        </div>
        {isAuthenticated ? (
          <button className="navButton" onClick={handleLogout} >
            로그아웃
          </button>
        ) : (
          <button className="navButton" onClick={() => navigate("/login")}>
            로그인 / 회원가입
          </button>
        )}
      </nav>
    );
  }; */