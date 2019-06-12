import React from 'react';
import sortByStatusPerformed from "../../secondaryFunctions/sortFunctions/sortByStatusPerformed";
import sortByStatusDone from "../../secondaryFunctions/sortFunctions/sortByStatusDone";

const SortButtons = (props) => {
    const {user, sortByStatus} = props
    return (
        <>
            <button
             className='btnSortByDone'
             onClick={() => sortByStatus(sortByStatusDone(user))}>
                Done ↑
            </button>
            <button
             className='btnSortByPerformed'
             onClick={() => sortByStatus(sortByStatusPerformed(user))}>
                Performed ↑
            </button>
        </>
    )
}

export default SortButtons;