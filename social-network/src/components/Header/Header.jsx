import classes from './Header.module.css';
import logo from './../../assets/images/logo.png';
import searchButton from './../../assets/images/search.png';
import userLogo from './../../assets/images/user.png';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authAPI, profileAPI } from '../../API/api';
import { setAuthProfileAction, setUserDataAction } from '../../redux/auth';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const dispatch = useDispatch();
    const login = useSelector(state => state.auth.login);
    const isAuth = useSelector(state => state.auth.isAuth);
    const authProfile = useSelector(state => state.auth.authProfile);
    async function authMe() {
        const response = await authAPI.authMe();
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserDataAction(id, email, login));
            const responseProfile = await profileAPI.getProfile(response.data.id);
            dispatch(setAuthProfileAction(responseProfile));
        }
    }
    useEffect(() => {
        authMe();
    }, []);


    return (
        <div className={classes.header}>
            <div className={classes.header_left}>
                <img src={logo} alt="user photo" className={classes.logo} />
            </div>
            {isAuth && authProfile ? 
            <div className={classes.header_right}>
                <div className={classes.search_box}>
                    <a className={classes.search_button}>
                        <img src={searchButton} alt="search button"/>
                    </a>
                    <input type="text" placeholder="Search user..." />
                </div>
                <div className={classes.header_user_icon}>
                    <a href="">
                        {authProfile.photos.small ? <img src={authProfile.photos.small} /> : <img src={userLogo} alt=""/>}
                        <p>{login}</p>
                    </a>
                </div>
            </div>
            : 
            <NavLink to="/login">Login</NavLink>}
        </div>
    )
}

export default Header;