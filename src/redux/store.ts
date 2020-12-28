import {combineReducers, createStore} from 'redux';
import firstTaskReducer from './firstTaskReducer';
import secondTaskReducer from './secondTaskReducer';
import thirdTaskReducer from './thirdTaskReducer';
import headerReducer from './headerReducer';
import hwReducer from './hwReducer';

export const rootReducer = combineReducers({
    headerReducer,
    firstTaskReducer,
    secondTaskReducer,
    thirdTaskReducer,
    hwReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export const store = createStore(rootReducer);

export default store;