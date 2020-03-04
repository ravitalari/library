import React from 'react';
import {TableRow} from '../common/TableRow';

class ListBooks extends React.Component {
    render() {
        return(
            <div>
                <h1>Books List</h1>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Count</th>
                        <th>Author</th>
                    </thead>
                    <tbody>
                        
                        {this.props.books.map(book => {
                        return (
                            <tr> 
                                <TableRow book={book} />
                            </tr>
                        )
                    })}
                        
                    
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default ListBooks;