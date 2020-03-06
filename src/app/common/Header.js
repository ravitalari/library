import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return(
        <React.Fragment>
            <h1>{props.heading}</h1>
            <NavLink to='/' className='button' activeClassName='success'>Books List</NavLink>
            <NavLink to='/create' className='button' activeClassName='success'>Create Book</NavLink>
            <NavLink to='/createLibrary' className='button' activeClassName='success'>Create Lib</NavLink>
            <NavLink to='/listLibrary' className='button' activeClassName='success'>List Lib</NavLink>
        </React.Fragment>
    )
}

export default Header;
