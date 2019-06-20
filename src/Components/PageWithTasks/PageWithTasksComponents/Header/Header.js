import React from 'react';
import goOut from "../secondaryFunctions/goOut";
import FilterButtons from './FilterButtons';

const Header = (props) => {
    const {user, logout, taskMappingState} = props
    return (
        <div className='header'>
            <div className='topHeaderContainer'>
            <h2 className='userName'>{user.name}</h2>
            <button className='goOut' onClick={goOut(logout)}>Logout</button>
            </div>
            {
                taskMappingState !== 'taskDetail' && taskMappingState!== 'scrum' ?
                <FilterButtons {...props} /> :
                null
            }

        </div>
    )
}

export default Header;