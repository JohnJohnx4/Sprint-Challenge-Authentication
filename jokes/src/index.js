import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RequiredAuth from './components/HOC/RequiredAuth';
import Jokes from './components/Jokes';
import SignIn from './components/SignIn';
// import SignOut from './components/SignOut';
import SignUp from './components/SignUp';
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
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
                {/* <Route path='/signout' component={Signout} /> */}
                <Route path='/jokes' component={Jokes} />
            </div>
        </Router>
    </Provider>,
        document.getElementById('root')
);
