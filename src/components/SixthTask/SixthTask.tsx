import React, {ChangeEvent, useState} from 'react';
import EditableSpan from '../common/EditableSpan/EditableSpan';
import Button from '../common/Button/Button';
import styles from './SixthTask.module.css';

type StateType = {
    editableSpanState: string,
    keyOfLocalStorage: string
}

function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}
function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

const SixthTask = () => {
    //State компонента
    const [spanState, setSpanState] = useState({
        editableSpanState: 'Enter a value',
        keyOfLocalStorage: 'EditableSpanState'
    });
    //Сохраняем State в LocalStorage браузера
    const onSaveStateClick = () => {
        saveState<StateType>(spanState.keyOfLocalStorage, spanState);
    }
    //Восстанавливаем и сетаем состояние из localStorage
    const onRestoreStateClick = () => {
        setSpanState(restoreState<StateType>(spanState.keyOfLocalStorage, spanState));
    }
    //Реагируем на изменения в инпуте
    const onSpanChanged = (e: ChangeEvent<HTMLInputElement>):void => {
        setSpanState({
            ...spanState,
            editableSpanState: e.currentTarget.value
        })
    }
    //Проверяем, не пусто ли значение поля
    const isSpanEmpty = ():void => {
        spanState.editableSpanState.length === 0
        && setSpanState({...spanState, editableSpanState: 'Enter a value'})
    }

    return(<div className={styles.sixthTaskBg}>
        <EditableSpan value={spanState.editableSpanState} onChange={onSpanChanged} isSpanEmpty={isSpanEmpty} />
        <Button value={'Save state'} onClick={onSaveStateClick}/>
        <Button value={'Restore state'} onClick={onRestoreStateClick}/>
    </div>)
}

export default SixthTask;