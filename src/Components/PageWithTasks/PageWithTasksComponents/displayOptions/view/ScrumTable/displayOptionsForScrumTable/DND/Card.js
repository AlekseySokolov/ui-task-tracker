import React from 'react';
import Task from './Task';
import {Droppable} from 'react-beautiful-dnd';



const Card = (props) => {
    const {title, tasks, listId, status} = props
    return (
        <Droppable droppableId = {listId}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className='Card'>
                 <span className='taskListTitle'>{title}</span>
                 {tasks.map((task, index) => <Task task={task.title} key={task.id} id={task.id} index={index} status={status} />)}
                 {provided.placeholder}
                </div>
            )}

        </Droppable>
    )
}

export default Card;