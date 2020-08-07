import React from 'react';
import styles from './Button.module.css';
import { v1 as uuidv1 } from 'uuid';

const Button = ({ value = 'some button', id = uuidv1(), name= 'one more button', active = false, disabled = false, danger = false, error = '', ...props}:any) => {
    return <button type='button'
                   value={value}
                   disabled={disabled}
                   className={`${styles.btn} ${active ? styles.active : ''} ${danger ? styles.danger : ''} ${error.length > 0 ? styles.error : ''}`}
                   name={name}
                   id={id}
                   onClick={props.onClick}
    >
        {value}
    </button>
}

export default Button;