import {InferActionsTypes} from './store';

export type PeopleType = {
    id: string
    name: string
    age: number
}

export type TestStateType = {
    peoples: PeopleType[]
    sortedByName: 'up' | 'down'
}
const initialState: TestStateType = {
    peoples: [
        {id: '0', name: 'Василий', age: 24},
        {id: '1', name: 'Дмитрий', age: 27},
        {id: '2', name: 'Георгий', age: 26},
        {id: '3', name: 'Андрей', age: 20},
        {id: '4', name: 'Борис', age: 23},
        {id: '5', name: 'Алексей', age: 19},
        {id: '6', name: 'Владимир', age: 18},
    ],
    sortedByName: 'up'
}


const hwReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case 'SORT':
            return action.payload.order === 'up'
                ? {...state, peoples: [
                    ...state.peoples.sort((a, b) => (a.name < b.name ? -1 : 1))
                  ], sortedByName: action.payload.order}
                : action.payload.order === 'down'
                ? {...state, peoples: [
                    ...state.peoples.sort((a, b) => (a.name > b.name ? -1 : 1))
                  ], sortedByName: action.payload.order}
                : state
        case 'FILTER':
            return {...state, peoples: state.peoples.filter(p => p.age >= 20)}
        default:
            return state
    }
};

export const actions = {
    sortByNameUpAC: () => ({type: 'SORT', payload: { order: 'up' } }),
    sortByNameDownAC: () => ({type: 'SORT', payload: { order: 'down' } }),
    filterByOverAgeAC: (ageOver: number) => ({type: 'FILTER', payload: {
        ageOver,
        } }
    )
}

// export type InitialStateType = typeof initialState;
// export type ActionsType = InferActionsTypes<typeof actions>
export default hwReducer;