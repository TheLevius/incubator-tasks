import React, {ChangeEvent, KeyboardEventHandler} from 'react';
import styles from './InputText.module.css';

export type inputTextPropsType = {
    placeholder?: string
    value?: string | undefined
    classProps?: string
    onKeyPress?: KeyboardEventHandler
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<inputTextPropsType> = (props) => {

    return <input type='text'
                  value={props.value}
                  placeholder={props.placeholder}
                  onKeyPress={props.onKeyPress}
                  onChange={props.onChange}
                  className={`${styles.textInput} ${props.value && styles.textInputFilled} ${props.classProps}`}
    />

}

export default InputText;