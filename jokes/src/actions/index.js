import axios from 'axios';
axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000';

export const USER_REG = 'USER_REG';
export const USER_AUTH = 'USER_AUTH';
export const USER_UNAUTH = 'USER_UNAUTH';
export const AUTH_ERR = 'AUTH_ERR';
export const GET_JOKES = 'GET_JOKES';
export const CHECK_IF_AUTH = 'CHECK_IF_AUTH';

export const authErr = err => {
    return {
        type: AUTH_ERR,
        payload: err
    };
};

export const register = (username, password, confirmPassword, history) => {
    return dispatch => {
        if (password !==confirmPassword) {
            dispatch(authErr('Passwords do not match'));
        }
        if (!username || !password || !confirmPassword) {
            dispatch(authErr('Please fill in all fields'));
        }

        axios
            .post(`${ROOT_URL}/api/`, { username, password })
            .then(user => {
                dispatch({
                    type: USER_REG
                });
                //history.push('/signin');
            })
            .catch(() => {
                dispatch(authErr('Failed to register user, please try again.'));
            });
    };
};

export const login = (username, password, history) => {
    return dispatch => {
        
    }
};

export const logout = () => {
    return dispatch => {
        
    }
};

export const getJokes = () => {
    return dispatch => {
        
    }
};
