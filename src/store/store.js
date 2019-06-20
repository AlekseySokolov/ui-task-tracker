import {createStore , combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as addTaskReducer} from 'redux-form';
import loginReducer from '../reducers/loginReducer';
import dataReducer from '../reducers/dataReducer';
import personReducer from '../reducers/personReducer';
import taskMappingReducer from '../reducers/taskMappingReducer';
import taskDetailReducer from '../reducers/taskDetailReducer';
import addTaskFormReducer from '../reducers/addTaskFormReducer';


const reducers = {
    form: formReducer,
    form : addTaskReducer,
    loginState: loginReducer,
    dataState : dataReducer,
    personState : personReducer,
    taskMappingState : taskMappingReducer,
    taskDetailState : taskDetailReducer,
    addTaskFormState : addTaskFormReducer
};
const rootReducer = combineReducers(reducers);
let store = createStore(rootReducer);
// store.subscribe(()=> console.log(store.getState()))

export default store;