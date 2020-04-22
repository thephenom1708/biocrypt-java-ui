export const AUTH_ACTION_TYPE = {
    SET_TOKEN: 'SET_TOKEN',
    FETCH_USER: 'FETCH_USER',
    SET_USER: 'SET_USER',
    LOGOUT: 'LOGOUT',
    RESET_SESSION: 'RESET_SESSION',
    ON_LOGOUT_SUCCESS: 'ON_LOGOUT_SUCCESS',
    ON_LOGOUT_ERROR: 'ON_LOGOUT_ERROR',
    ON_ERROR: 'ON_ERROR'
}

export function setToken(token) {
    return {
        type: AUTH_ACTION_TYPE.SET_TOKEN,
        payload: {
            token
        }
    }
}

export function fetchUser() {
    return {
        type: AUTH_ACTION_TYPE.FETCH_USER,
    }
}

export function setUser(user) {
    return {
        type: AUTH_ACTION_TYPE.SET_USER,
        payload: {
            user,
        }
    }
}

export function logout(token) {
    return {
        type: AUTH_ACTION_TYPE.LOGOUT,
        payload: {
            token
        }
    }
} 

export function resetSession() {
    return {
        type: AUTH_ACTION_TYPE.RESET_SESSION
    }
}

export function onLogoutSuccess() {
    return {
        type: AUTH_ACTION_TYPE.ON_LOGOUT_SUCCESS
    }
}

export function onLogoutError() {
    return {
        type: AUTH_ACTION_TYPE.ON_LOGOUT_ERROR
    }
}

export function onError() {
    return {
        type: AUTH_ACTION_TYPE.ON_ERROR
    }
}
