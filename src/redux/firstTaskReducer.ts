import {UsersType} from '../types/entities';

type InitialStateType = {
    users: UsersType
}

const initialState: InitialStateType = {
    users: [
        {id: 1, name: 'Артем', msg: 'npm start нажимал?', date: '20:00'}
    ]
}

export const firstTaskReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default: return state;
    }
}

export default firstTaskReducer;