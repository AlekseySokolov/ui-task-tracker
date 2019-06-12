import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import {Field, reduxForm} from 'redux-form';
import {validate} from './formComponents/validate';
import {renderField} from './formComponents/renderField';
import FormButtons from './formComponents/FormButtons';
import './loginPage.css';
import userValid from './formComponents/userValid';
import FirstDataRequest from '../dataRequest/firstDataRequest';

const LoginPage = (props) => {
    const {
        getData,
        dataState,
        getPerson,
        login,
        handleSubmit} = props;

    const submit = (values) => userValid(values, dataState, getPerson, login);
    return (
        <div className='formContainer'>
            <FirstDataRequest getData={getData}/>
            <form onSubmit={handleSubmit(submit)} className='loginForm'>
                <Field
                    name="username"
                    component={renderField}
                    type="login"
                    label="Username"
                />
                <Field
                    name="password"
                    component={renderField}
                    type="password"
                    label="Password"
                />
                <FormButtons {...props}/>
                <span className='hint'>
                    * hint (username: Tom/ password: mark, <br />
                      username: Bruce/ password : gotham, <br />
                      username :Tyrion/ password: Jaime)
                </span>
            </form>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState: state.loginState,
        dataState : state.dataState
    }
}

const toConnect = connect(
    mapStateToProps,
    actions
)(LoginPage);

export default reduxForm({form : 'loginForm', validate})(toConnect);