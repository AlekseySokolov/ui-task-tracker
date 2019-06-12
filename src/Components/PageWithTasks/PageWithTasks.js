import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import Header from './PageWithTasksComponents/Header';
import TaskList from './PageWithTasksComponents/displayOptions/TaskList';
import DataRequest from '../dataRequest/dataRequest';
import currentUser from './PageWithTasksComponents/secondaryFunctions/currentUser';
import './pageWithTask.css';
import UpdateObjPerson from '../dataRequest/updateObjPerson';

const PageWithTasks = (props) => {
    const {
        dataState,
        personState,
        taskMappingState,
        taskDetailState,
        getData,
        sortByStatus,
        getPerson} = props;

    const currentUserInData = currentUser(dataState, personState);
    return (
         <div className='taskContainer'>
          <DataRequest
              getData={getData}
          />
          <UpdateObjPerson
              getPerson={getPerson}
              data={currentUserInData}
          />
          <Header user={personState} {...props}/>
         <TaskList
             taskMappingState={taskMappingState}
             user={personState}
             personState={personState}
             taskDetailState={taskDetailState}
             sortByStatus={sortByStatus}
             {...props}
         />
         </div>
    )
};

const mapStateToProps = (state) => {
    return {
        personState: state.personState,
        dataState: state.dataState,
        taskMappingState : state.taskMappingState,
        taskDetailState : state.taskDetailState
    }
}

export default connect(mapStateToProps, actions)(PageWithTasks);