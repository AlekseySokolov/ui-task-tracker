import React from 'react';
import goOut from "./secondaryFunctions/goOut";

const Header = (props) => {
    const {user, logout, removePerson} = props
    return (
        <div className='header'>
            <h2 className='userName'>{user.name}</h2>
            <button className='goOut' onClick={goOut(logout, removePerson)}>Logout</button>
        </div>
    )
}

export default Header;