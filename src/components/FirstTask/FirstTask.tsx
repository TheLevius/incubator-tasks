import React from 'react';
import styles from './FirstTask.module.css';
import avatar from './../../assets/images/jpg/valakas.jpg';

export const FirstTask = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.box}>
                <div className={styles.colPic}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.colMsg}>
                    <div className={styles.mountMsg}>
                        <h3 className={styles.userName}>Artem</h3>
                        <span className={styles.msg}>
                            npm start нажимал?
                        </span>
                        <div className={styles.boxDate}>
                            <span>20:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstTask;