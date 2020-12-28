import React, {ChangeEvent, useState} from 'react';
import InputText from '../Input/InputText';
import styles from './editableSpan.module.css';

export type EditableSpanPropsType = {
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
    isSpanEmpty: () => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = React.memo((props) => {

    const[isEditMode, setIsEditMode] = useState(false)

    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
        props.isSpanEmpty();
    }

    return isEditMode
        ? (<InputText onChange={props.onChange}
                      onKeyPress={(e)=>{
                          e.key === 'Enter' && toggleEditMode()
                      }}
                      value={props.value}
                      onBlur={(e)=>{
                          toggleEditMode()
                      }}
            />)
        : (<span onClick={(e)=>(setIsEditMode(!isEditMode))} className={styles.viewSpan}>{props.value}</span>);

});

export default EditableSpan;