import {LIST_BOOKS, CREATE_BOOK, CREATE_LIBRARY, LIST_LIBRARY} from './action-type';

export const CreateBook = (book) => {
    return {
        type:CREATE_BOOK,
        book
    }
}

export const ListBooks = () => ({
    type:LIST_BOOKS
});

export const CreateLibrary = (library) => ({
        type:CREATE_LIBRARY,
        library
});

export const ListLibrary = () => ({
    type:LIST_LIBRARY
});