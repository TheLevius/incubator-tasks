import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = (props: any) => {
        return <div className={'switchWrap'}>
            <input type='checkbox' id={props.id} className={styles.switch} name={props.name}/>
            <label htmlFor={props.id}>{props.description}</label>
        </div>
}

export default Checkbox;