import React from 'react';
import {TableLibraryRow} from '../common/TableLibraryRow';

class ListLibrary extends React.Component {
    render() {
        return(
            <div>
                <h1>Library List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.libraries.map(lib => {
                        return (
                            <tr> 
                                <TableLibraryRow library={lib} />
                            </tr>
                        )
                    })}
                        
                    
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default ListLibrary;