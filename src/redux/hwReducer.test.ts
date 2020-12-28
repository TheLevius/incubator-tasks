import hwReducer, {TestStateType} from './hwReducer';

it('Task 8, test of hwReducer', ()=>{

    const testState: TestStateType = {
        peoples: [
            {id: '0', name: 'Василий', age: 24},
            {id: '1', name: 'Дмитрий', age: 27},
            {id: '2', name: 'Георгий', age: 26},
            {id: '3', name: 'Андрей', age: 20},
            {id: '4', name: 'Борис', age: 23},
        ]
    }
    const sortedState = {
        ...testState,
        peoples: testState.peoples.sort((a, b) =>(a.name < b.name ? -1 : 1))}


expect(hwReducer(testState, {type: 'SORT', payload: { order: 'up'} } )).toStrictEqual(sortedState);
});