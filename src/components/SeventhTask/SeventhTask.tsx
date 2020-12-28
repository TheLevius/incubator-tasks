import React, {useEffect, useState} from 'react';
import Select from '../common/Select/Select';
import InputRadio from '../common/Input/InputRadio';

const SeventhTask = () => {
    console.log('renderSeventh')
    //State для Select
    const [select, setSelect] = useState({ options: ['чык-чырык-1', 'чык-чырык-2', 'чык-чырык-3'] } );
    const [radio, setRadio] = useState(
        {
            values: ['первый', 'второй', 'третий'],
            name: 'testRadio'
        }
    );

    return(<div>
        <Select value={select.options} multiple={true} />
        <ol><InputRadio name={radio.name} value={radio.values}/></ol>
    </div>)
}

export default SeventhTask