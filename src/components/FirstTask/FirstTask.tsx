import React from 'react';
import styles from './FirstTask.module.css';
import avatar from './../../assets/images/jpg/valakas.jpg';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';

export const FirstTask = () => {

    const users = useSelector((state:AppStateType) => state.firstTaskReducer.users)
    const user = users[0];

    return (
        <div className={styles.wrap}>
            <div className={styles.box}>
                <div className={styles.colPic}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.colMsg}>
                    <div className={styles.mountMsg}>
                        <div className={styles.mountBox}>
                            <h3 className={styles.userName}>{user.name}</h3>
                            <span className={styles.msg}>
                            {user.msg}
                            </span>
                            <div className={styles.boxDate}>
                                <span>{user.date}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstTask;