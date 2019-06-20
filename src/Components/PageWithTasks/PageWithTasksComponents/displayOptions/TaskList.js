import React from 'react';
import ShortTaskList from './view/ShortTaskList/ShortTaskList';
import DetailTaskList from './view/DetailTaskList';
import TaskDetailsPage from './view/TaskDetailsPage';
import CardList from './view/ScrumTable/displayOptionsForScrumTable/DND/CardList';

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
            taskMappingState === 'scrum' ?
             <CardList
             {...props}
             />:
            null
    )
};

export default TaskList;