import {combineReducers, createStore} from 'redux';
import firstTaskReducer from './firstTaskReducer';

export const rootReducer = combineReducers({
    firstTaskReducer
});

export type RootStateType = ReturnType<typeof rootReducer>

export const store: any = createStore(rootReducer);

export default store;