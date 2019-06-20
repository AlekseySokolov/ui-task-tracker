import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderField} from './renderField'
const AddTaskForm = (props) => {
    const {
        addTask,
        handleSubmit,
        addTaskFormClose} = props;
    const submit = (values) => addTask(values.input) && addTaskFormClose()
    return (
        <div className='addTaskContainer'>
        <form onSubmit={handleSubmit(submit)} className='addTaskForm'>
            <Field
                name="input"
                component={renderField}
                type="input"
                label="add task"
            />
        </form>
            <button className='btnTaskForm' onClick={()=>addTaskFormClose()}>close</button>
        </div>

    )
}

export default reduxForm({form : 'addTaskForm'})(AddTaskForm);