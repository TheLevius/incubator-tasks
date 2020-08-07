import React from 'react';
import styles from './Checkbox.module.css';
import { v1 as uuidv1 } from 'uuid';
import {checkboxPropsType} from '../../../types/entities';

const Checkbox = ({description = 'enter a description', name = 'one more checkbox', id = uuidv1(), onChange}:checkboxPropsType) => {
        return <div className={'switchWrap'}>
            <input type='checkbox' id={id} className={styles.switch} name={name} onChange={onChange}/>
            <label htmlFor={id}>{description}</label>
        </div>
}

export default Checkbox;