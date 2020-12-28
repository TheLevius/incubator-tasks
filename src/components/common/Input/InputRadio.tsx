import React, {ChangeEvent} from 'react';

type InputRadioPropsType = {
    name: string
    value: string[]
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputRadio: React.FC<InputRadioPropsType> = (props) => {


    //Для отрисовки мапим массив в радио-инпуты
    const radioRender = props.value.map((inputValue, i)=>{
        return(<li key={i}>
            <input type='radio' value={inputValue} name={props.name} />
            {inputValue}
        </li>)
    });

    return(<>
        {radioRender}
    </>)
}

export default InputRadio;