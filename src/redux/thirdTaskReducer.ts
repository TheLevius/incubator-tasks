import { v1 as uuidv1 } from 'uuid';

export const SET_NAME = 'thirdTaskReducer/SET-NAME';

type ActionsType = setNameACType;

type NameType = {
    name: string
    id: string
}

type InitialStateType = {
    names: Array<NameType>
}

const initialState = {
    names: []
}

const thirdTaskReducer = (state: InitialStateType = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                names: [...state.names, {name: action.name, id: action.id}]
            }
        default: return state;
    }
}

type setNameACType = {
    id: string
    type: typeof SET_NAME
    name: string
}

export const setNameAC = (name: string):setNameACType => ({type: SET_NAME, name, id: uuidv1()});

export default thirdTaskReducer;