import React from 'react';

class CreateLibrary extends React.Component {
    constructor (props) {
        super(props);
        this.idElement = React.createRef();
        this.nameElement = React.createRef();
        this.placeElement = React.createRef();
    }

    addLibrary = () => {
        const library = {
            id: this.idElement.current.value,
            name: this.nameElement.current.value,
            place: this.placeElement.current.value,
        };
        this.props.CreateLibrary(library);
        this.idElement.current.value = '';
        this.nameElement.current.value = '';
        this.placeElement.current.value = '';
        this.props.history.push('/listLibrary');
    }

    render() {
        return(
            <div className='create'>
                <h1>Create Library</h1>
                    <input type='text' className='field' placeholder='Name' key='LibraryId' ref={this.nameElement }/><br/>
                    <input type='text' className='field' placeholder='Library Id' key='Name'  ref={this.idElement }/><br/>
                    <input type='text' className='field' placeholder='Place'  key='Place'  ref={this.placeElement }/><br/>
                <button className='createButton' onClick={()=> this.addLibrary()}>Create Library</button>
            </div>
        )
    }
}

export default CreateLibrary;