import {LIST_BOOKS, CREATE_BOOK} from './action-type';

export const CreateBook = (book) => {
    // returns an action onject
    return {
        type:CREATE_BOOK,
        book
    }
}

export const SearchBook = (search) => {
    // returns an action onject
    return {
        type:CREATE_BOOK,
        search
    }
}

export const ListBooks = () => ({
    type:LIST_BOOKS
});