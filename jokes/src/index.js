import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import SignIn from './components/signin';
// import Users from './components/users';
// import SignOut from './components/signout';
// import SignUp from './components/signup';
// import RequireAuth from './components/HOC/RequiredAuth';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <Router>
            <div>
                <Route path='/' component={App} />
                {/* <Route path='/signup' component={Signup} />
                <Route path='/signin' component={Signin} />
                <Route path='/signout' component={Signout} />
                <Route path='/jokes' component={RequiredAuth(Jokes)} /> */}
            </div>
        </Router>
    </Provider>,
        document.getElementById('root')
);
