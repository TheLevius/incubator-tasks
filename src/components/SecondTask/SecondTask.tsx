import React, {useState} from 'react';
import styles from './SecondTask.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTaskAC, filterButtonIsActiveAC} from '../../redux/secondTaskReducer';
import {AppStateType} from '../../redux/store';
import {priorityFilterType, PriorityType, TaskPriorityType} from '../../types/entities';
import Button from '../common/Button/Button';

const SecondTask = (props: any) => {
    let [filterValue, setFilterValue] = useState('All');

    const dispatch = useDispatch()

    const {tasks, priorityFilters} = useSelector((state: AppStateType) => state.secondTaskReducer)

    let filteredTasks = tasks.filter((el:TaskPriorityType) => {
        return filterValue === 'All'
            ? el
            : el.priority === filterValue
    })


    let myTasks = filteredTasks.map((t: TaskPriorityType) => {
            return (
                <li className={styles.myTask} key={t.id}>
                    <span>{`Priority: '${t.priority}' `}</span>
                    <span>{`Task: '${t.task}' `}</span>
                    <Button value={'x'} danger={true} onClick={()=>(dispatch((deleteTaskAC(t.id))))}/>
                </li>
            )

    });

    const onFilterBtnClick = (priority: PriorityType) => {
        setFilterValue(priority)
        dispatch(filterButtonIsActiveAC(priority))
    }

    let MyFilterButtons = priorityFilters.map((b: priorityFilterType, index: number) => {
        debugger
        return b.isActive
            ? <Button key={index} onClick={() => onFilterBtnClick(b.priority)} active={b.isActive} value={b.priority}/>
            : <Button key={index} onClick={() => onFilterBtnClick(b.priority)} value={b.priority} />

    });


    return (
        <div className={styles.wrap}>
            <div className={styles.col}>
                <ol className={styles.myTasksList}>
                    {myTasks}
                </ol>
                <div className={styles.filterTasksColumn}>
                    <h5>Filtering by priority: </h5>
                    {MyFilterButtons}
                </div>
            </div>
        </div>
    );
}

export default SecondTask;