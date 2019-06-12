import React from 'react';
import TaskListContent from './taskListContent';

const ListDisplay = (props) => {
    const {user, title} = props;

    return (
        <ul className='taskList'>
         <li className='taskListTitle'>{title}</li>
         <hr />
         {user["quests"].map((quest, index) =>
            <TaskListContent
                quest={quest}
                index={index}
                key={index}
                {...props}
            />
         )}
        </ul>
    )
};

export default ListDisplay;