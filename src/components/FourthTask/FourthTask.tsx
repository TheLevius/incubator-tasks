import React, {ChangeEvent, useState} from 'react';
import sytles from './FourthTask.module.css';
import Checkbox from '../common/Checkbox/Checkbox';
import Button from '../common/Button/Button';
import InputText from '../common/Input/InputText';

export const FourthTask = () => {

    const [state, setState] = useState({
            inputContent: '',
            checkboxStatus: false
    });

    const onInputChanged = (e: ChangeEvent<HTMLInputElement>):void => {
        setState({...state, inputContent: e.currentTarget.value})
    }

    const onCheckboxChanged = (e:ChangeEvent<HTMLInputElement>):void => {
        setState({...state, checkboxStatus: e.currentTarget.checked})
    }

    return(
        <div className={sytles.wrap}>
            <div>
                <InputText value={state.inputContent} onChange={onInputChanged} placeholder={'Enter a value'}/>
            </div>
            <Button value={'Demo button'}/>
            <Checkbox onChange={onCheckboxChanged} checked={state.checkboxStatus}/>
            <p>{state.checkboxStatus}</p>
        </div>
    )
}

export default FourthTask;