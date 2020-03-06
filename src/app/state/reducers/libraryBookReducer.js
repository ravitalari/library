import {CREATE_BOOK, LIST_BOOKS} from '../action-type';

// Initial set of books 
const InitialState = {
    books:[{name:"Js", author:'Ravi Talari', description:'MyBestBook', count:5, libId:"001"},
    {name:"Node", author:'Ravi Talari', description:'MyBestBook', count:5, libId:"002"},
    {name:"React", author:'Ravi Talari', description:'MyBestBook', count:5, libId:"001"},
    {name:"Angular", author:'Ravi Talari', description:'MyBestBook', count:5, libId:"003"}]
}

// Reducer is responsible to change the state if action type is matches
// otherwise it will give default initial state
export const libraryBookReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LIST_BOOKS: return {...state}
        case CREATE_BOOK: return {...state, books: [...state.books, action.book]}
        default: return state;
    }
}