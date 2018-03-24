import axios from 'axios';
//import auth from '../reducers/auth';
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
        console.log("Registering. Password is: ", username);
        
        axios
        .post(`${ROOT_URL}/api/users`, { username, password })
        .then(user => {
                dispatch({
                    type: USER_REG
                });
                history.push('/signin');
            })
            .catch(err => {
                dispatch(authErr(err.toString()));
            });
    };
};

export const login = (username, password, history) => {
    return dispatch => {
        axios
        .post(`${ROOT_URL}/api/login`, { username, password })
        .then(res => {
            let token = res.data.token;
            console.log("token recieved", token);
            axios.defaults.headers.common['Authorization'] = token;
            dispatch({
                type: USER_AUTH
            });
            history.push('/jokes');
        })
        .catch(() => {
            dispatch(authErr('Incorrect username and/or password'));
        });
    };
};

export const logout = (history) => {
    return dispatch => {
        axios
        .post(`${ROOT_URL}/api/logout`)
        .then(() => {
            
            dispatch({
                type: USER_UNAUTH
            });
            setTimeout(() => {
                axios.defaults.headers.common['Authorization'] = null;
                history.push('/');
            }, 2000);
        })
        .catch(() => {
        dispatch(authErr('Failed to log you out'));
        });
    };
};

export const getJokes = () => {
    return dispatch => {
        axios
            .get(`${ROOT_URL}/api/jokes`, )
            .then(res => {
                dispatch({
                    type: GET_JOKES,
                    payload: res.data
                });
            })
            .catch(() => {
                dispatch(authErr('Jokes on you'));
            });
    };
};
