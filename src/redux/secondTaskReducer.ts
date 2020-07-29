import {priorityFiltersType, PriorityType, TasksPriorityType} from '../types/entities';

const DELETE_TASK = 'secondTaskReducer/DELETE-TASK';
const CHANGE_ACTIVE_PRIORITY = 'secondTaskReducer/CHANGE-ACTIVE-PRIORITY';

export type InitialStateType = {tasks:TasksPriorityType, priorityFilters: priorityFiltersType}

export const initialState: InitialStateType = {
    tasks: [
        {id: 1, task: 'Work', priority: 'High'},
        {id: 2, task: 'News', priority: 'Low'},
        {id: 3, task: 'Games', priority: 'Middle'},
        {id: 4, task: 'React', priority: 'High'},
        {id: 5, task: 'JavaScript', priority: 'High'}
    ],
    priorityFilters: [
        {priority: 'All', isActive: true},
        {priority: 'High'},
        {priority: 'Middle'},
        {priority: 'Low'}
    ],
}

const secondTaskReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case DELETE_TASK:
            return {
            ...state,
                tasks: state.tasks.filter((t) => t.id !== action.taskId)
            };
        case CHANGE_ACTIVE_PRIORITY:
            return {
            ...state,
                priorityFilters: state.priorityFilters.map(t => t.priority === action.priority ? {...t, isActive: true} : {...t, isActive: false})
            };
        default: return state;
    }
}

export const deleteTaskAC = (taskId:number):{} => ({type: DELETE_TASK, taskId});
export const filterButtonIsActiveAC = (priority: PriorityType):{} => ({type: CHANGE_ACTIVE_PRIORITY, priority})

export default secondTaskReducer;

