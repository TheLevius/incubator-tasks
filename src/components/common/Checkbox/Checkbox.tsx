import React, {useState} from 'react';
import styles from './Checkbox.module.css';
import { v1 as uuidv1 } from 'uuid';

export type checkboxPropsType = {
    id?: string
    name?: string
    description?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked: boolean
}

const Checkbox: React.FC<checkboxPropsType> = ({description = 'enter a description',  id = uuidv1(), onChange}) => {
    const [state, setState] = useState({
        inputContent: '',
        checkboxStatus: false,
        description: description
    })
    return <div>
        <input type='checkbox' id={id} className={styles.switch} onChange={onChange}/>
        <label htmlFor={id}>{description}</label>
    </div>
}

export default Checkbox;