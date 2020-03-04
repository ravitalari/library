import React from 'react';

export const TableRow = (props) => {
    const {name, description, count, author} =  props.book;
    return (
        <React.Fragment>
        <td>{name}</td>
        <td>{description}</td>
        <td>{count}</td>
        <td>{author}</td>
    </React.Fragment>
    )
}