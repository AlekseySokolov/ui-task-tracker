import React from 'react';
import {filterByDone, filterByPerformed} from "../secondaryFunctions/filterFunctions/filterFunctions";

const FilterButtons = (props) => {
    const {getData, dataState, onlyDoneTasks, onlyPerformedTasks, personState} = props;
    return (
        <div className='filterBtnContainer'>
         <button
             className='filterBtn'
             onClick={() => onlyDoneTasks(filterByDone(dataState))}
             onMouseUp={() => getData(personState)}>
             Only Done
         </button>
         <button
              className='filterBtn'
              onClick={() => onlyPerformedTasks(filterByPerformed(dataState))}
              onMouseUp={() => getData(personState)}>
              Only Performed
         </button>
            <button
                className='filterBtn'
                onClick={() => getData(personState)}>
                All tasks
            </button>
        </div>
    )
}

export default FilterButtons;