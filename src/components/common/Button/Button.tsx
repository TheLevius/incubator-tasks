import React from 'react';
import styles from './Button.module.css';

const Button = (props: any) => {
    return <button type='button'
                   value={props.value}
                   disabled={props.disabled}
                   className={styles.btn}
                   name={props.name}
                   id={props.id}
    >
        {props.value}
    </button>
}

export default Button;