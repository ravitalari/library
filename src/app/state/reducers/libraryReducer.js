import { CREATE_LIBRARY, LIST_LIBRARY } from '../action-type';

// Initial set of books 
const InitialState = {
    libraries: [{id:"001", name:'Library 001', place:'Bangalore'},
    {id:"002", name:'Library 002', place:'Mangalore'},
    {id:"003", name:'Library 003', place:'Mysore'},
    {id:"004", name:'Library 004', place:'Hubali'},]
}

// Reducer is responsible to change the state if action type is matches
// otherwise it will give default initial state
export const libraryReducer = (state = InitialState, action) => {
    switch (action.type) {
        case LIST_LIBRARY: return {...state}
        case CREATE_LIBRARY: return {...state, libraries: [...state.libraries, action.library]}
        default: return state;
    }
}