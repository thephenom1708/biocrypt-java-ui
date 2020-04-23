import { combineReducers } from 'redux-loop'
import AuthReducer from '../auth/Auth.reducer';
import AppReducer from '../biocrypt/App.reducer';

export const RootReducer = combineReducers({
    app: AppReducer,
    auth: AuthReducer,
});