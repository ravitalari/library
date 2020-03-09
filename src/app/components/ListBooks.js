import React from 'react';
import {TableRow} from '../common/TableRow';

class ListBooks extends React.Component {
    constructor (props) {
        super(props);
        this.search = React.createRef();
        this.properties = [...this.props.books];
    }
    searching = () => {
        this.properties = [...this.props.bookss];
        const searchItems = this.properties.filter((item)=> {
            if (item.name.includes(this.search.current.value)) {
                return item;
            }
            if (item.author.includes(this.search.current.value)) {
                return item;
            }
        });

        this.properties = [...searchItems];
    
        
        this.forceUpdate();
    }
    render() {
        return(
            <div>
                <h1>Books List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Count</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.properties.map(book => {
                        return (
                            <tr> 
                                <TableRow book={book} />
                            </tr>
                        )
                    })}
                        
                    
                    </tbody>
                </table>
                <input type='text' placeholder='Search' ref= {this.search} onChange={()=> this.searching()} />
            </div>
        )
    }
}

export default ListBooks;