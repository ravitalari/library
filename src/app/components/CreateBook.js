import React from 'react';

class CreateBook extends React.Component {
    constructor (props) {
        super(props);
        this.nameElement = React.createRef();
        this.authorElement = React.createRef();
        this.descElement = React.createRef();
        this.countElement = React.createRef();
    }

    addBook = () => {
        const book = {name: this.nameElement.current.value,
            author: this.authorElement.current.value,
            description: this.descElement.current.value,
            count: this.countElement.current.value
        };
        this.props.CreateBook(book);
        this.nameElement.current.value = '';
        this.authorElement.current.value = '';
        this.descElement.current.value = '';
        this.countElement.current.value = '';
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='create'>
                <h1>Create Book</h1>
                    <input type='text' className='field' name='bookName' placeholder='BookName'  ref={this.nameElement }/><br/>
                    <textarea type='text' className='fieldArea' placeholder='Description' name='description'  ref={this.descElement }/><br/>
                    <input type='number' className='field' placeholder='Count'  name='count'  ref={this.countElement }/><br/>
                    <input type='text' className='field' placeholder='Author' name='author'  ref={this.authorElement }/><br/>
                <button className='createButton' onClick={()=> this.addBook()}>Create</button>
            </div>
        )
    }
}

export default CreateBook;