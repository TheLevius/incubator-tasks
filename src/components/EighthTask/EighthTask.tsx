import React from 'react';
import styles from './eighthTask.module.css';
import {AppStateType} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../common/Button/Button';
import { actions } from '../../redux/hwReducer';

const EighthTask = (props: any) => {
    const {peoples} = useSelector((state: AppStateType) => state.hwReducer)
    const dispatch = useDispatch();
    debugger
    const peoplesRender = peoples.map((p, i) => {

        return(<li key={i}>
            <p className={styles.peopleCell}>
              <span>{Number(p.id) + Number(1)}</span>
                <span><strong>{p.name}</strong></span>
              <span>возраст: {p.age}</span>
            </p>
        </li>)
    });
    const onSortByUpNameClick = () => {
        dispatch(actions.sortByNameUpAC())
    }
    const onSortByDownNameClick = () => {
        dispatch(actions.sortByNameDownAC())
    }
    const onDeleteLessThanTwenty = () => {
        dispatch(actions.filterByOverAgeAC( 20));
    }
    console.log(peoples)
    return(
        <div className={styles.wrap}>
            <ul className={styles.peopleList}>
                {peoplesRender}
            </ul>
            <Button value={'By Up Name'} onClick={onSortByUpNameClick}/>
            <Button value={'By Down Name'} onClick={onSortByDownNameClick}/>
            <Button value={'Over 20 y. o.'} onClick={onDeleteLessThanTwenty}/>
        </div>

    )
}

export default EighthTask;