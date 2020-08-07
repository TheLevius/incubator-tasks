import React, {useState} from 'react';
import sytles from './FourthTask.module.css';
import Checkbox from '../common/Checkbox/Checkbox';
import Button from '../common/Button/Button';
import InputText from '../common/Input/InputText';

export const FourthTask = () => {

    let [state, setState] = useState({
            inputContent: '',
            checkboxStatus: false
    });

    const onInputChanged = (value: string):void => {
        setState({...state, inputContent: value})
    }

    const onCheckboxChanged = (checked: boolean):void => {
        checked
            ? setState({...state, checkboxStatus: true})
            : setState({...state, checkboxStatus: false})
    }

    return(
        <div className={sytles.wrap}>
            <div>
                <InputText value={state.inputContent} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{onInputChanged(String(e.currentTarget.value))}} />
            </div>
            <Button value={'Demo button'} />
            <Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => {onCheckboxChanged(e.currentTarget.checked)}} checked={state.checkboxStatus}/>
            <p>{state.checkboxStatus}</p>
        </div>
    )
}

export default FourthTask;