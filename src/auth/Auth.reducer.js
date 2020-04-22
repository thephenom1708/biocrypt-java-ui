import { loop, Cmd } from 'redux-loop';
import { AUTH_ACTION_TYPE, resetSession } from './Auth.action';


const initialState = {
    user: {}
}

export default function AuthReducer(state = initialState, action) {
    switch(action.type){
        case AUTH_ACTION_TYPE.SET_USER:
            return {
                ...state,
                user: action.payload.user,
            }
        
        case AUTH_ACTION_TYPE.ON_ERROR:
            return loop({
                ...state,
            },Cmd.action(resetSession()));

        case AUTH_ACTION_TYPE.RESET_SESSION:
            return {
                ...state,
                ...initialState
            }

        default:
            return state
    }
}
