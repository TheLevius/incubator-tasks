import React from 'react';
import styles from './InputText.module.css';
import { v1 as uuidv1 } from 'uuid';

const InputText = ({value, id = uuidv1(), placeholder = 'enter a value', name = 'one more textarea', ...props}: any) => {

    return <input type='text'
                  onKeyPress={props.onKeyPress}
                  onChange={props.onChange}
                  name={name}
                  placeholder={placeholder}
                  className={`${styles.textInput} ${value.length && styles.textInputFilled} ${props.classProps}`}
                  id={id}
                  value={value}
    />

}

export default InputText;