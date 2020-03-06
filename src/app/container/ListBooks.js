import {connect} from "react-redux";
import ListBooks from "../components/ListBooks";
import * as actions from '../state/actions';


export const mapStateToProps = (state) => {
    return {
        books: state.libraryBookReducer.books
    }
}

export const mapDispatchToProps = (dispatch) => ({
    

    ListBooks: function() {
        dispatch({type:actions.ListBooks});
    }
})
//create and retruns a container
export default connect(mapStateToProps, mapDispatchToProps) (ListBooks);