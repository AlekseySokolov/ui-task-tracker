import React from 'react';

const SortButtons = (props) => {
    const {
        dataState,
        taskMappingState,
        sortStatusDoneUp,
        sortStatusPerformedUp,
        sortImportanceLowUp,
        sortNewDatesUp,
        sortOldDatesUp,
        sortImportanceHighUp} = props
    return (
        <>
            <button
             className='btnSortStatus'
             onClick={() => sortStatusDoneUp(dataState)}>
                Done on top
            </button>
            <button
                className='btnSortStatus'
                onClick={() => sortStatusPerformedUp(dataState)}>
                Performed on top
            </button>
            {taskMappingState === 'detail' ?
                <>
                    <button
                        className='btnSortDates'
                        onClick={() => sortNewDatesUp(dataState)}>
                        newDates on top
                    </button>
                    <button
                        className='btnSortDates'
                        onClick={() => sortOldDatesUp(dataState)}>
                        oldDates on top
                    </button>
                <button
                    className='btnSortImportance'
                    onClick={() => sortImportanceLowUp(dataState)}>
                    Low on top
                </button>
                <button
                    className='btnSortImportance'
                    onClick={() => sortImportanceHighUp(dataState)}>
                    High on top
                </button>
                 </>
                : null}
        </>
    )
}

export default SortButtons;