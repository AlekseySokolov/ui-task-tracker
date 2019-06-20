import React from 'react'

const TaskContent = ({text, status}) => {
    return (
        <div className='scrumTaskContainer'>
         <div
            className={status === 'performed' ?
                'task scrumTaskPerformed' :
                status === 'done' ?
                    'task scrumTaskDone'
                    : null}>
            {text}
         </div>
        </div>
    )
}

export default TaskContent;