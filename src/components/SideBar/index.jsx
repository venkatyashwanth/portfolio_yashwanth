import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./sidebar.module.scss";
import { ThemeContext } from '../../Theme';


const isDark = () => {
    const checkstate = localStorage.getItem('checkstate');
    if (!checkstate) {
        localStorage.setItem('checkstate', true);
        return true;
    } else {
        let checkStatus = (checkstate === 'true')? true : false;
        return checkStatus;
    }
};


const SideBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [ischeck, setIscheck] = useState(isDark);

    const updateState = () => {
        setIscheck(ischeck => !ischeck)
        toggleTheme()
    }

    useEffect(() => {
        const refreshCheckBox = () => {
            localStorage.setItem('checkstate', ischeck);
        };
        refreshCheckBox();
    }, [ischeck]);

    return (
        <div className={`${styles.sideBar} ${styles[theme]}`}>
            <div className={`${styles.profileImage}`}>
                <img src="https://i.postimg.cc/8ztdLkZ1/dummy450x450.jpg" alt="avatar" />
            </div>
            <div>
                <ul className={`${styles.navigationList}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="projects">More</Link>
                    </li>
                </ul>
            </div>
            <div className={`${styles.themeToggler}`}>
                <label className={`${styles.switch}`}>
                    <input checked={ischeck} type="checkbox" onChange={() => updateState()} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>
            </div>
        </div>
    )
}

export default SideBar