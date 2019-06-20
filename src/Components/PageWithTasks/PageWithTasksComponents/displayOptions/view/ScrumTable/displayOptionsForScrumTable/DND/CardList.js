import React, {Component} from 'react';
import Card from './Card';
import {DragDropContext} from 'react-beautiful-dnd';


const statuses = ['performed', 'done'];
const filtered = (tasks, status) => {
    return tasks.filter(task => task.status === status)
}

export default class CardList extends Component {
    render() {
        return (
            <div className='scrumTableContainer'>
            <div className='cardContainer'>
                <div className='Card'>
                    <span className='taskListTitle'>All</span>
                    {this.props.tasks.map((task, index) => <div className='task' key={task.id}>{task.title}</div>)}
                </div>
            <DragDropContext>
            {statuses.map(status =>
                <Card
                    listId={status}
                    status={status}
                    title={status}
                    tasks={filtered(this.props.tasks, status)}
                    key={status} />
            )}

            </DragDropContext>
            </div>
                <button className='goBack' onClick={() => this.props.showBrief()}>Go back</button>
            </div>
        )
    }
}