import React, {ChangeEvent, MouseEvent} from 'react';
import styles from './Button.module.css';

export type buttonPropsType = {
    value?: string
    active?: boolean
    disabled?: boolean
    danger?: boolean
    error?: string
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
const Button = ({ value = 'some button', active = false, disabled = false, danger = false, error = '', onClick, ...props}:buttonPropsType):any => {
    return <button type='button'
                   value={value}
                   disabled={disabled}
                   className={`${styles.btn} ${active ? styles.active : ''} ${danger ? styles.danger : ''} ${error.length > 0 ? styles.error : ''}`}
                   onClick={onClick}
    >
        {value}
    </button>
}

export default Button;