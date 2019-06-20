import React from 'react';
import AddTaskForm from './AddTaskForm';

const AddTaskFormSwitch = (props) => {
    const {addTaskFormState, addTaskFormOpen} = props
    return (
        addTaskFormState === false ?
            <button className='btnTaskForm' onClick={()=>addTaskFormOpen()}>add Task</button> :
            addTaskFormState === true ? <AddTaskForm {...props}/> :
            null
    )
}

export default AddTaskFormSwitch;