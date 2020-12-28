import React, {ChangeEvent, useState} from 'react';
import styles from './ThirdTask.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import { setNameAC } from '../../redux/thirdTaskReducer';
import Button from '../common/Button/Button';
import InputText from '../common/Input/InputText';


const ThirdTask = () => {

    const dispatch = useDispatch();

    const[name, setName] = useState<string>('');

    const names: ({name: string, id: string})[] = useSelector((state: AppStateType) => state.thirdTaskReducer.names)


    const onInputNameChanged = (e: ChangeEvent<HTMLInputElement>):void => {
        setName(e.currentTarget.value);
    }

    const onBtnInsertNameClick = ():void => {

        if(name.length > 0) {
            dispatch(setNameAC(name));
            alert(`Hi, ${name}!`)
        } else {
            alert(`Name is empty!`)
        }

        setName('')
    }

    const namesList = names.map(n => (<span key={n.id}>{n.name}</span>));

    return <div className={styles.wrap}>
        <div className={styles.col}>
            <InputText value={name}
                       placeholder={'Введите текст'}
                       classProps={`${styles.inputName}`}
                       onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                           e.key === 'Enter' && onBtnInsertNameClick()
                       }}
                       onChange={onInputNameChanged}
                       onBlur={onBtnInsertNameClick}

            />
            <Button value={'Enter'}
                    disabled={false}
                    onClick={onBtnInsertNameClick}
            />

            <div className={styles.namesBox}>
                {names.length > 0 && <span>{`Total ${names.length} ${names.length > 1 ? 'names' : 'name'}:`}</span>}
                {namesList}
            </div>

            </div>
        </div>

}

export default ThirdTask;