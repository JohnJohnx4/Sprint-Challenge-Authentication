import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import AuthReducer from './auth';
import JokesReducer from './jokes';
const rootReducer = combineReducers({
    form: FormReducer,
    jokes: JokesReducer,
    auth: AuthReducer
});

export default rootReducer;