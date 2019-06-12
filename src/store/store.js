import {createStore , combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import loginReducer from '../reducers/loginReducer';
import dataReducer from '../reducers/dataReducer';
import personReducer from '../reducers/personReducer';
import taskMappingReducer from '../reducers/taskMappingReducer';
import taskDetailReducer from '../reducers/taskDetailReducer';


const reducers = {
    form: formReducer,
    loginState: loginReducer,
    dataState : dataReducer,
    personState: personReducer,
    taskMappingState : taskMappingReducer,
    taskDetailState : taskDetailReducer
};
const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);

export default store;