import React from 'react';
import {Switch} from "react-router";
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import PrivateLoginPageRoute from './Components/LoginPage/formRoute/PrivateLoginPageRoute';
import PageWithTasks from './Components/PageWithTasks/PageWithTasks';
import PrivatePageWithTasksRoute from './Components/PageWithTasks/PrivatePageWithTasksRoute';

const App = () => {
    return (
        <div className='container'>
            <Switch>
                <PrivateLoginPageRoute exact path="/" component={LoginPage} />
                <PrivatePageWithTasksRoute path="/tasks" component={PageWithTasks} />
            </Switch>
        </div>
    )
};


export default App;
