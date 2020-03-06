import {connect} from "react-redux";
import CreateBook from "../components/CreateBook";
import * as ActionTypes from '../state/action-type';

export const mapStateToProps = (state) => {
    return {state};
}

export const mapDispatchToProps = (dispatch) => ({
    CreateBook: function(book) {
        dispatch({type:ActionTypes.CREATE_BOOK,book});
    },
})
//create and retruns a container
export default connect(mapStateToProps, mapDispatchToProps) (CreateBook);