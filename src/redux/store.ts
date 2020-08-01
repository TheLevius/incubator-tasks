import {combineReducers, createStore} from 'redux';
import firstTaskReducer from './firstTaskReducer';
import secondTaskReducer from './secondTaskReducer';
import thirdTaskReducer from './thirdTaskReducer';

export const rootReducer = combineReducers({
    firstTaskReducer,
    secondTaskReducer,
    thirdTaskReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

export default store;