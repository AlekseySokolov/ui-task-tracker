import React from 'react';
import { Route, Redirect } from 'react-router';
import * as actions from '../../actions/actions';
import {connect} from 'react-redux';

const PrivatePageWithTasksRoute = ({loginState, component: Component, ...rest }) => {
    return (
        <Route {...rest} render = { props =>
          loginState === true ?
          <Component {...props} /> :
          <Redirect to={{
            pathname : "/",
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

export default connect(mapStateToProps, actions)(PrivatePageWithTasksRoute);