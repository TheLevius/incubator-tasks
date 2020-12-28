import {UsersType} from '../types/entities';

type InitialStateType = {
    users: UsersType
}

const initialState: InitialStateType = {
    users: [
        {
            id: 1,
            name: 'Жмышенко Валерий',
            msg: 'Жмых, ты npm start нажимал?',
            date: '12:54',
        },
    ]
}

export const firstTaskReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        default: return state;
    }
}



export default firstTaskReducer;