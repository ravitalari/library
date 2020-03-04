import {connect} from "react-redux";
import ListBooks from "../components/ListBooks";
import * as ActionTypes from '../state/action-type';


export const mapStateToProps = (state) => {
    return {
        books: state.libraryReducer.books
    }
}

export const mapDispatchToProps = (dispatch) => ({
    

    ListBooks: function() {
        dispatch({type:ActionTypes.LIST_BOOKS});
    }
})
//create and retruns a container
export default connect(mapStateToProps, mapDispatchToProps) (ListBooks);