import {createStore, combineReducers} from 'redux';

import {libraryReducer} from '../app/state/reducers/libraryReducer';


const rootReducer = combineReducers({
    libraryReducer
})

//very first time, store calls reducer to initialize the state value
const store = createStore(rootReducer);

export default store;