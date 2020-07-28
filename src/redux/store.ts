import {combineReducers, createStore} from 'redux';
import firstTaskReducer from './firstTaskReducer';
import secondTaskReducer from './secondTaskReducer';

export const rootReducer = combineReducers({
    firstTaskReducer,
    secondTaskReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

export default store;