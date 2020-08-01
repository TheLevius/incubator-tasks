import React, {ChangeEvent, useState} from 'react';
import styles from './ThirdTask.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import { setNameAC } from '../../redux/thirdTaskReducer';

const ThirdTask = () => {


    const dispatch = useDispatch();

    let[name, setName] = useState<string>('');

    const names: ({name: string, id: string})[] = useSelector((state: AppStateType) => state.thirdTaskReducer.names)


    const onInputNameChanged = (name:string):void => {
        setName(name);
    }

    const onBtnNameEnterClick = ():void => {

        if(name.length > 0) {
            dispatch(setNameAC(name));
            alert(`Hi, ${name}!`)
        } else {
            alert(`Name is empty!`)
        }
        setName('')
    }

    const namesCount = names.length > 0
        ? <span>{`Total ${names.length} ${names.length > 1 ? 'names': 'name'}:`}</span>
        : undefined;

    const namesList = names.map(n => (<span key={n.id}>{n.name}</span>));

    return <div className={styles.wrap}>
            <div className={styles.col}>
                <input type='text'
                       value={name}
                       onChange={(e:ChangeEvent<HTMLInputElement>) => onInputNameChanged(String(e.currentTarget.value))}
                       onKeyPress={(e) => { if(e.charCode === 13) onBtnNameEnterClick() }}
                       className={styles.inputName}
                />
                <button className={styles.btnNameEnter} onClick={()=>onBtnNameEnterClick()}>
                    <span>Enter</span>
                </button>
                <div className={styles.namesBox}>

                    {namesCount}
                    {namesList}
                </div>
            </div>
        </div>

}

export default ThirdTask;