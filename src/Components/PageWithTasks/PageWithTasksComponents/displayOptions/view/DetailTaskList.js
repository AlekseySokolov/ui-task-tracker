import React from 'react';

import ListDisplay from '../ListDisplay';
import SortButtons from './SortButtons';


const DetailTaskList = (props) => {
    const {showBrief} = props;

    return (
        <>
            <div className='table'>
                <ListDisplay title={'Tasks'} questKey={'title'} {...props}/>
                <ListDisplay title={'Date'} questKey={'date'} {...props}/>
                <ListDisplay title={'Importance'} questKey={'importance'} {...props}/>
                <ListDisplay title={'Status'} questKey={'status'} {...props}/>
            </div>
            <div className='btnTaskListContainer'>
                <SortButtons {...props} />
                <button className='btnSwitchView' onClick={() => showBrief()}>briefly</button>
            </div>
        </>
    )
}

export default DetailTaskList;