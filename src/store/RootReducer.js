import { combineReducers } from 'redux-loop'
import AuthReducer from '../auth/Auth.reducer';

export const RootReducer = combineReducers({
    auth: AuthReducer,
});