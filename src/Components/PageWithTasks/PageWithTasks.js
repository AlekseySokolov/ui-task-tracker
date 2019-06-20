import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Header from './PageWithTasksComponents/Header/Header';
import TaskList from './PageWithTasksComponents/displayOptions/TaskList';
import DataRequest from '../dataRequest/dataRequest';
import './pageWithTask.css';

const PageWithTasks = (props) => {
    const {
        dataState,
        personState,
        taskMappingState,
        taskDetailState,
        addTaskFormState,
        getData} = props;

    return (
         <div className='taskContainer'>
          <DataRequest
              getData={getData}
              name={dataState.username}
          />
          <Header
              user={dataState}
              dataState={dataState}
              personState={personState}
              {...props}/>
         <TaskList
             taskMappingState={taskMappingState}
             addTaskFormState={addTaskFormState}
             user={dataState}
             taskDetailState={taskDetailState}
             dataState={dataState}
             id={dataState.quests.title}
             tasks={dataState['quests']}
             {...props}
         />
         </div>
    )
};

const mapStateToProps = (state) => {
    return {
        dataState: state.dataState,
        personState : state.personState,
        taskMappingState : state.taskMappingState,
        taskDetailState : state.taskDetailState,
        addTaskFormState: state.addTaskFormState
    }
}

export default connect(mapStateToProps, actions)(PageWithTasks);