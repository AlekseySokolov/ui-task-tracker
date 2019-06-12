import React from 'react';
import ShortTaskList from './view/ShortTaskList';
import DetailTaskList from './view/DetailTaskList';
import TaskDetailsPage from './view/TaskDetailsPage';

const TaskList = (props) => {
    const {taskMappingState, taskDetailState} = props;

    return (
        taskMappingState === 'briefly' ?
            <ShortTaskList {...props}/> :
            taskMappingState === 'detail' ?
            <DetailTaskList {...props}/> :
            taskMappingState === 'taskDetail' ?
            <TaskDetailsPage
             task={taskDetailState}
             {...props}
            /> :
            null
    )
};

export default TaskList;