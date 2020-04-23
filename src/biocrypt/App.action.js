export const APP_ACTION_TYPE = {
    FETCH_REGISTERED_FINGERPRINTS: 'FETCH_REGISTERED_FINGERPRINTS',
    SET_FINGERPRINTS: 'SET_FINGERPRINTS'
}

export function getRegisteredFingerprints(userId) {
    return {
        type: APP_ACTION_TYPE.FETCH_REGISTERED_FINGERPRINTS,
        payload: {
            userId
        }
    }
}

export function setFingerprints(fingerprints) {
    return {
        type: APP_ACTION_TYPE.SET_FINGERPRINTS,
        payload: {
            fingerprints
        }
    }
}