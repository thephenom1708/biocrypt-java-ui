import { loop, Cmd } from 'redux-loop';
import { APP_ACTION_TYPE, setFingerprints } from './App.action';
import FingerprintsAPI from '../api/FingerprintsAPI';


const initialState = {
    fingerprints: []
}

export default function AppReducer(state = initialState, action) {
    switch(action.type){
        case APP_ACTION_TYPE.FETCH_REGISTERED_FINGERPRINTS:
            return loop({
                ...state,
            },
                Cmd.run(FingerprintsAPI.getRegisteredFingerprints, {
                    successActionCreator: setFingerprints,
                    args: [action.payload.userId] 
                })
            );

        case APP_ACTION_TYPE.SET_FINGERPRINTS:
            return {
                ...state,
                fingerprints: action.payload.fingerprints
            }

        default:
            return state
    }
}
