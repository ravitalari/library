import React from 'react';

export const TableLibraryRow = (props) => {
    const {id, name, place} =  props.library;
    return (
        <React.Fragment>
            <td>{id}</td>
            <td>{name}</td>
            <td>{place}</td>
        </React.Fragment>
    )
}