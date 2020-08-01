import React, {useState} from 'react';
import styles from './SecondTask.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTaskAC, filterButtonIsActiveAC} from '../../redux/secondTaskReducer';
import {AppStateType} from '../../redux/store';
import {PriorityType, TaskPriorityType} from '../../types/entities';

const SecondTask = (props: any) => {
    let [filterValue, setFilterValue] = useState('All');

    const dispatch = useDispatch()

    const tasks = useSelector((state: AppStateType) => state.secondTaskReducer.tasks)
    const priorityFilters = useSelector((state: AppStateType) => state.secondTaskReducer.priorityFilters)

    let filteredTasks = tasks.filter((el) => {
        return filterValue === 'All'
            ? el
            : el.priority === filterValue
    })


    let myTasks = filteredTasks.map((t: TaskPriorityType) => {
            return (
                <li className={styles.myTask} key={t.id}>
                    <span>{`Priority: '${t.priority}' `}</span>
                    <span>{`Task: '${t.task}' `}</span>
                    <input type='button' value='x' onClick={() => (dispatch(deleteTaskAC(t.id)))}/>
                </li>
            )

    });

    const onFilterBtnClick = (priority: PriorityType) => {
        setFilterValue(priority)
        dispatch(filterButtonIsActiveAC(priority))
    }

    let MyFilterButtons = priorityFilters.map((b:any, index: number) => {
        return b.isActive
            ? <button key={index} onClick={() => onFilterBtnClick(b.priority)} className={styles.active}>{b.priority}</button>
            : <button key={index} onClick={() => onFilterBtnClick(b.priority)}>{b.priority}</button>
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