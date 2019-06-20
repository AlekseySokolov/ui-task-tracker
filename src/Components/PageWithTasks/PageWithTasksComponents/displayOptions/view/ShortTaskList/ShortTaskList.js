import React from 'react';
import ListDisplay from '../../ListDisplay';
import SortButtons from '../SortButtons';
import AddTaskFormSwitch from './addTaskFormSwitch';

const ShortTaskList = (props) => {
    const {showDetail, showScrum} = props
    return (
        <>
         <div className='table'>
            <ListDisplay title={'Tasks'} questKey={'title'} {...props}/>
            <ListDisplay title={'Status'} questKey={'status'} {...props}/>
         </div>
            <AddTaskFormSwitch {...props} />
            <div className='btnTaskListContainer'>
             <SortButtons {...props} />
             <button className='btnSwitchView' onClick={()=>showDetail()}>detail</button>
             <button className='btnToScrumTable' onClick={()=>showScrum()}>Scrum table</button>
            </div>
        </>
    )
}

export default ShortTaskList;