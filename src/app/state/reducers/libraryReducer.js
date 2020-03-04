import {CREATE_BOOK, LIST_BOOKS, SEARCH_BOOK} from '../action-type';

const InitialState = {
    books:[{name:"Js", author:'Ravi Talari', description:'MyBestBook', count:5},
    {name:"Node", author:'Ravi Talari', description:'MyBestBook', count:5},
    {name:"React", author:'Ravi Talari', description:'MyBestBook', count:5},
    {name:"Angular", author:'Ravi Talari', description:'MyBestBook', count:5}]
}

export const libraryReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LIST_BOOKS: return {...state}
        case CREATE_BOOK: return {...state, books: [...state.books, action.book]}
        default: return state;
    }
}