import React, {useState} from 'react';
import styles from './FirstTask.module.css';
import avatar from './../../assets/images/jpg/valakas.jpg';
import {UsersType, UserType} from '../../types/entities';

export const FirstTask = (props: any) => {
    let [users, setUsers] = useState<UsersType>(props.state.users)

    const user = users[0];
    return (
        <div className={styles.wrap}>
            <div className={styles.box}>
                <div className={styles.colPic}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.colMsg}>
                    <div className={styles.mountMsg}>
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
    )
}

export default FirstTask;