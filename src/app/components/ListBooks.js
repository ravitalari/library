import React from 'react';
import {TableRow} from '../common/TableRow';

class ListBooks extends React.Component {
    constructor (props) {
        super(props);
        this.search = React.createRef();
        this.properties = [...this.props.books];
    }
    searching = () => {
        this.properties = [...this.props.books];
        const searchItems = this.properties.filter((item)=> {
            let searchTerm = this.search.current.value.toLowerCase();
            let name = item.name.toLowerCase();
            let desc = item.description.toLowerCase();
            let author = item.author.toLowerCase();
            if (name.includes(searchTerm)) {
                return item;
            }
            if (desc.includes(searchTerm)) {
                return item;
            }
            if (author.includes(searchTerm)) {
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
                <input type='text' placeholder='Search' ref= {this.search} onChange={()=> this.searching()} />
        
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
            </div>
        )
    }
}

export default ListBooks;