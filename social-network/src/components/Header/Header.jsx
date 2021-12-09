import styles from './Header.module.css';
import logo from './../../assets/images/logo.png';
import searchButton from './../../assets/images/search.png';
import userLogo from './../../assets/images/user.png';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <img src={logo} className={styles.logo} />
            </div>

            <div className={styles.header_right}>
                <div className={styles.search_box}>
                    <a className={styles.search_button}>
                        <img src={searchButton} />
                    </a>
                    <input type="text" placeholder="Search user..." />
                </div>
                <div className={styles.header_user_icon}>
                    <a href="">
                        <img src={userLogo} />
                        <p>Profile Name</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;