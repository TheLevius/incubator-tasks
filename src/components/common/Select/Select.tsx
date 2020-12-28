import React, {ChangeEvent} from 'react'

type SelectPropsType = {
    value: string[]
    required?: boolean
    disabled?: boolean
    multiple?: boolean
    size?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Select: React.FC<SelectPropsType> = ({size, required = false, multiple = false, disabled = false, ...props}) => {

    //для отрисовки сортируем и мапим в опшины массив значений
    const optionsRender = props.value
            .sort((a, b)=>(a < b) ? -1: 1)
            .map((option, i) => {
                return(<option key={i} value={option}>
                    {option}
                </option>)
            });

    return(<select size={multiple ? props.value.length : size}
                   required={required}
                   multiple={multiple}
                   disabled={disabled}>
        {optionsRender}
    </select>);
}

export default Select;