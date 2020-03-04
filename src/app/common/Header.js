import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return(
        <React.Fragment>
            <h1>{props.heading}</h1>
            <NavLink to='/' className='button' activeClassName='success'>Books List</NavLink>
            <NavLink to='/create' className='button' activeClassName='success'>Create</NavLink>
        </React.Fragment>
    )
}

export default Header;
