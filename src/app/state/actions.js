import {LIST_BOOKS, CREATE_BOOK} from './action-type';

export const CreateBook = (book) => {
    // returns an action object
    return {
        type:CREATE_BOOK,
        book
    }
}


export const ListBooks = () => ({
    type:LIST_BOOKS
});