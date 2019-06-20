import _ from 'lodash';
import sortStatusDoneUp from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/sortFunctions/sortStatusDoneUp';
import sortStatusPerformedUp from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/sortFunctions/sortStatusPerformedUp';
import sortNewDatesUp from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/sortFunctions/sortNewDatesUp';
import sortOldDatesUp from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/sortFunctions/sortOldDatesUp';
import sortImportanceLowUp from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/sortFunctions/sortImportanceLowUp';
import sortImportanceHighUp from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/sortFunctions/sortImportanceHighUp';
import addTaskToState from '../Components/PageWithTasks/PageWithTasksComponents/secondaryFunctions/addTaskToState';

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_DATA' :
            return state = action.payload
        case 'ONLY_DONE' :
            return state = action.payload
        case 'ONLY_PERFORMED' :
            return state = action.payload
        case 'SORT_STATUS_DONE_UP' :
            return state = sortStatusDoneUp(_.cloneDeep(state))
        case 'SORT_STATUS_PERFORMED_UP' :
            return state = sortStatusPerformedUp(_.cloneDeep(state))
        case 'NEW_DATES_UP' :
            return state = sortNewDatesUp(_.cloneDeep(state))
        case 'OLD_DATES_UP' :
            return state = sortOldDatesUp(_.cloneDeep(state))
        case 'SORT_IMPORTANCE_HIGH_UP' :
            return state = sortImportanceHighUp(_.cloneDeep(state))
        case 'SORT_IMPORTANCE_LOW_UP' :
            return state = sortImportanceLowUp(_.cloneDeep(state))
        case 'ADD_TASK' :
            return state = addTaskToState(_.cloneDeep(state), action.payload)
        default :
            return state
    }
};

export default dataReducer;
