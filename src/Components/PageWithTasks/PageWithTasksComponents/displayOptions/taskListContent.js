import React from 'react';
import calculatePastDays from "../secondaryFunctions/dateFunctions/calculatePastDays";
import toLocalDate from "../secondaryFunctions/dateFunctions/toLocalDate";
import {liClassDoneOrTask} from "../secondaryFunctions/classNamesFunctions/classNames";

const TaskListContent = (props) => {
    const {
        questKey,
        quest,
        index,
        showTaskDetail,
        getQuestDetail} = props;
    return (
        <li
         key={index}
         className={liClassDoneOrTask(quest)}
         onClick={() => showTaskDetail() && getQuestDetail(quest)}>
         {
            questKey === 'date' ?
            toLocalDate(quest[questKey]) :
            questKey === 'elapsed days' ?
            calculatePastDays(quest['date']) :
            quest[questKey]
        }
        </li>
    )
};

export default TaskListContent;

