import {PriorityType, TasksPriorityType} from '../types/entities';

export type InitialStateType = {tasks:TasksPriorityType}

export const initialState: InitialStateType = {
    tasks: [
        {id: 1, task: 'работа', priority: 'height'},
        {id: 2, task: 'аниме', priority: 'low'},
        {id: 3, task: 'игры', priority: 'middle'},
        {id: 4, task: 'реакт', priority: 'height'},
        {id: 5, task: 'хтмл', priority: 'low'}
    ]
}

export const secondTaskReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default: return state;
    }
}

export default secondTaskReducer;

