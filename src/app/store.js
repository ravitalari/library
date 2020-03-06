import {createStore, combineReducers} from 'redux';

import {libraryBookReducer} from '../app/state/reducers/libraryBookReducer';
import {libraryReducer} from '../app/state/reducers/libraryReducer';


// if more than one reducer is available then only we need
// to use combineReducers

const rootReducer = combineReducers({
    libraryBookReducer,
    libraryReducer
})

//very first time, store calls reducer to initialize the state value
const store = createStore(rootReducer);

export default store;