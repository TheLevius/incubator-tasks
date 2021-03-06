import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const menuItems = useSelector((state: AppStateType) => (state.headerReducer.menuItems))

    const menu = menuItems.map((item, i) => {
        return(
            <li key={String(i)} className={styles.menuItem}><NavLink to={`${item.link}`} activeClassName={styles.activeLink}>{item.name}</NavLink></li>
        )
    })

    return(
        <div>
            <ul className={styles.menuBox}>
                {menu}
            </ul>
        </div>
    )
}

export default Header;