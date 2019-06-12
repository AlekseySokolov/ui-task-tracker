import React from 'react';
import { Route, Redirect } from 'react-router';
import * as actions from '../../../actions/actions';
import {connect} from 'react-redux';

const PrivateLoginPageRoute = ({loginState, component: Component, ...rest }) => {
    return (
        <Route {...rest} render = { props =>
            loginState === false ?
            <Component {...props} /> :
            <Redirect to={{
               pathname : "/tasks",
               state: {from: props.location}
            }} /> }
        />
    )
};

const mapStateToProps = (state) => {
    return {
        loginState : state.loginState
    }
}

export default connect(mapStateToProps, actions)(PrivateLoginPageRoute);