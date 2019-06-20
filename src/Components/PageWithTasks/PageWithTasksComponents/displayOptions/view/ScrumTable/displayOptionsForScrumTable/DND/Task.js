import React from 'react'
import {Draggable} from 'react-beautiful-dnd';
import TaskContent from './TaskContent';

const Task = (props) => {
    const {task ,id, index, status} = props
    return (
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                 <TaskContent text={task} status={status}/>
                </div>
            )}

        </Draggable>
    )
}

export default Task;