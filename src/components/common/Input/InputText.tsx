import React from 'react';
import styles from './InputText.module.css';

const InputText = (props: any) => {
    return <input type='text' name={props.name} placeholder={props.placeholder} className={styles.textInput} id={props.id}/>
}

export default InputText;