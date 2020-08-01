import React, {ChangeEvent, useState} from 'react';
import styles from './ThirdTask.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import { setNameAC } from '../../redux/thirdTaskReducer';
import Button from '../common/Button/Button';
import InputText from '../common/Input/InputText';
import Checkbox from '../common/Checkbox/Checkbox';

const ThirdTask = () => {


    const dispatch = useDispatch();

    let[name, setName] = useState<string>('');

    const names: ({name: string, id: string})[] = useSelector((state: AppStateType) => state.thirdTaskReducer.names)


    const onInputNameChanged = (name:string):void => {
        setName(name);
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
                <input type='text'
                       value={name}
                       onChange={(e:ChangeEvent<HTMLInputElement>) => onInputNameChanged(String(e.currentTarget.value))}
                       onKeyPress={(e) => { e.charCode === 13 && onBtnInsertNameClick() }}
                       className={styles.inputName}
                />
                <button className={styles.btnNameEnter} onClick={()=>onBtnInsertNameClick()}>
                    <span>Enter</span>
                </button>
                <div className={styles.namesBox}>
                    {names.length > 0 && <span>{`Total ${names.length} ${names.length > 1 ? 'names': 'name'}:`}</span>}
                    {namesList}
                    <Button value={'Button-text'} disabled={false} name={'testButton'} id={'button1'}/>
                    <InputText name={'inputText'} placeholder={'Введите текст'} id={'inputText1'}/>
                    <div>
                        <Checkbox name={'checkbox'} id={'checkbox'} description={''}/>
                    </div>
                </div>
            </div>
        </div>

}

export default ThirdTask;