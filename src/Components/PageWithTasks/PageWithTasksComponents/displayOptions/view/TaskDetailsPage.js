import React from 'react';
import calculatePastDays from '../../secondaryFunctions/dateFunctions/calculatePastDays';
import {importanceClass, statusClass} from '../../secondaryFunctions/classNamesFunctions/classNames';


const TaskDetailsPage = (props) => {
    const {task, removeQuestDetail, showBrief} = props
    const {title, description, date, importance, status} = task
    return (
        <div className='taskDetailsPageContainer'>
         <ul className='detailTask'>
             <li className='TaskTitle'>{title}</li>
             <li className='taskDefaultText'>Description: {description}</li>
             <li className='taskDefaultText'>Date of ordinance: {date}</li>
             <li className={importanceClass(importance)}>Importance: {importance}</li>
             <li className='taskDefaultText'>Planned days: {task["planned days"]}</li>
             <li className='taskDefaultText'>Elapsed days: {calculatePastDays(date)}</li>
             <li className='taskDefaultText'>Days left: {task["planned days"] - calculatePastDays(date)}</li>
             <li className={statusClass(status)}>Status: {status}</li>
         </ul>
         <button
             className='goBack'
             onClick={() => showBrief() && removeQuestDetail()}>
             ← Go Back
         </button>
        </div>
    )
}


export default TaskDetailsPage;