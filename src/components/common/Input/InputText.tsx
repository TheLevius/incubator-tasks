import React, {ChangeEvent} from 'react';
import styles from './InputText.module.css';

export type inputTextPropsType = {
    placeholder?: string
    value?: string | undefined
    classProps?: string
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?:(e: ChangeEvent<HTMLInputElement>) => void
}

const InputText: React.FC<inputTextPropsType> = React.memo( (props) => {
    console.log('render Editable span')
    return <input type='text'
                  value={props.value}
                  placeholder={props.placeholder}
                  onKeyPress={props.onKeyPress}
                  onChange={props.onChange}
                  onBlur={props.onBlur}
                  className={`${styles.textInput} ${props.value && styles.textInputFilled} ${props.classProps}`}
    />

})

export default InputText;