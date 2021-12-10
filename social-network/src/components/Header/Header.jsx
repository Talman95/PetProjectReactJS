import classes from './Header.module.css';
import logo from './../../assets/images/logo.png';
import searchButton from './../../assets/images/search.png';
import userLogo from './../../assets/images/user.png';

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.header_left}>
                <img src={logo} alt="user photo" className={classes.logo} />
            </div>

            <div className={classes.header_right}>
                <div className={classes.search_box}>
                    <a className={classes.search_button}>
                        <img src={searchButton} alt="search button"/>
                    </a>
                    <input type="text" placeholder="Search user..." />
                </div>
                <div className={classes.header_user_icon}>
                    <a href="">
                        <img src={userLogo} alt=""/>
                        <p>Profile Name</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header;