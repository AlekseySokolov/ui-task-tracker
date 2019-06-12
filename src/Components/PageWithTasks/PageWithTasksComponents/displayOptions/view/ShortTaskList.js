import React from 'react';
import ListDisplay from '../ListDisplay';
import SortButtons from './SortButtons';

const ShortTaskList = (props) => {
    const {showDetail} = props
    return (
        <>
         <div className='table'>
            <ListDisplay title={'Tasks'} questKey={'title'} {...props}/>
            <ListDisplay title={'Status'} questKey={'status'} {...props}/>
         </div>
            <div className='btnTaskListContainer'>
             <SortButtons {...props} />
             <button className='btnSwitchView' onClick={()=>showDetail()}>detail</button>
            </div>
        </>
    )
}

export default ShortTaskList;