import {
    combineReducers
} from 'redux';
import {
    game1Reducer
} from './Game1/reducer';
export const rootReducer = combineReducers({
    game1Reducer
})